from tastypie.authentication import Authentication
from tastypie.exceptions import ImmediateHttpResponse
from tastypie.http import HttpUnauthorized, HttpBadRequest
from social.apps.django_app.utils import load_strategy, load_backend
from social.utils import requests
from social.exceptions import MissingBackend
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from models import ShiftUser as User

import json


class SocialAuthentication(Authentication):

    invalid_backend = HttpUnauthorized(json.dumps(
        {'error': 'Invalid backend!'}), content_type="json")
    invalid_access_token = HttpUnauthorized(json.dumps(
        {'error': 'Invalid access token!'}), content_type="json")
    bad_request = HttpBadRequest(json.dumps(
        {'error': 'Provider, access_token and email where not in GET request!'}), content_type="json")

    invalid_email = HttpUnauthorized(json.dumps(
        {'error': 'Invalid email!'}), content_type="json")

    def is_authenticated(self, request, **kwargs):
        if 'provider' not in request.GET or 'access_token' not in request.GET:
            raise ImmediateHttpResponse(self.bad_request)

        provider = request.GET.get('provider')
        access_token = request.GET.get('access_token')
        email = request.GET.get('email')

        if provider is None or provider == '' or access_token is None or access_token == '' or email is None or email == '':
            raise ImmediateHttpResponse(self.bad_request)

        try:
            validate_email(email)
        except ValidationError:
            raise ImmediateHttpResponse(self.invalid_email)

        strategy = load_strategy(request=request)
        backend = provider

        try:
            backend = load_backend(strategy, provider, None)
        except MissingBackend:
            raise ImmediateHttpResponse(self.invalid_backend)

        try:
            user = backend.do_auth(access_token=access_token)
            user = User.objects.get(username=user)
            if user.email is None or user.email == '':
                user.email = email
                user.save()
        except requests.HTTPError:
            raise ImmediateHttpResponse(self.invalid_access_token)

        if user and user.is_active:
            return True
        return False
