from tastypie.resources import BaseModelResource, ModelResource, Resource
from social.apps.django_app.utils import load_strategy, load_backend
from models import ShiftUser
from tastypie.authentication import Authentication
from tastypie.authorization import Authorization, ReadOnlyAuthorization

from authentication import SocialAuthentication
from social.apps.django_app.views import NAMESPACE

from django.core.urlresolvers import reverse


class UserResource(ModelResource):

    class Meta:
        queryset = ShiftUser.objects.all()
        excludes = ['email', 'password', 'is_superuser', 'is_staff']
        allowed_methods = ['get']
        authentication = SocialAuthentication()
        authorization = ReadOnlyAuthorization()
        resource_name = "user"
        always_return_data = True
