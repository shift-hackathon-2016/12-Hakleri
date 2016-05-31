from tastypie.resources import BaseModelResource, ModelResource, Resource
from social.apps.django_app.utils import load_strategy, load_backend
from models import *
from tastypie.authentication import Authentication
from tastypie.authorization import Authorization, ReadOnlyAuthorization
from tastypie import fields

from authentication import SocialAuthentication
from social.apps.django_app.views import NAMESPACE

from django.core.urlresolvers import reverse



class TeamResource(ModelResource):

    class Meta:
        queryset = Team.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "team"
        always_return_data = True

class CompanyResource(ModelResource):
    class Meta:
        queryset = Company.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "company"
        always_return_data = True

class UserResource(ModelResource):
    team = fields.ForeignKey(TeamResource, attribute='team', full=True, null=True, blank=True)
    company = fields.ForeignKey(CompanyResource, attribute='company', full=True, null=True, blank=True)

    class Meta:
        queryset = ShiftUser.objects.all()
        excludes = ['email', 'password', 'is_superuser', 'is_staff']
        allowed_methods = ['get']
        authentication = Authentication()
        authorization = ReadOnlyAuthorization()
        resource_name = "user"
        always_return_data = True
