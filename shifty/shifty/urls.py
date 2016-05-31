from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from tastypie.api import Api
from shifty.resources import UserResource

import views

v1_api = Api(api_name='v1')
# v1_api.register(UserResource())

import inspect
from tastypie.resources import ModelResource, Resource
import conference.api, shifty.resources
# inner map registers all Resources of a module and uses predicate to filter them out.
# outer map just goes through all api.py modules
map(lambda api_module : map(lambda tup: v1_api.register(tup[1]()),
                            inspect.getmembers(api_module, lambda o: inspect.isclass(o) and issubclass(o, Resource) and o.__module__ == api_module.__name__)),
    [conference.api, shifty.resources])

### Done importing tastypie resources
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url('', include('social.apps.django_app.urls', namespace='social')),
    url(r'^api/', include(v1_api.urls)),
    url(r'^$', views.index, name='index'),
    url(r'^app/$', views.app_view, name='app'),
    url(r'^api/', include(v1_api.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
