from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin
from tastypie.api import Api
from shifty.resources import UserResource

v1_api = Api(api_name='v1')
v1_api.register(UserResource())

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    #url('', include('social.apps.django_app.urls', namespace='social')),
    url(r'^api/', include(v1_api.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

