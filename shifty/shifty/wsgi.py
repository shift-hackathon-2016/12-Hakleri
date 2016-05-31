import os

from django.core.wsgi import get_wsgi_application
from dj_static import Cling
from django.conf import settings

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shifty.settings")

if settings.RUNNING_LOCALLY:
        application = Cling(get_wsgi_application)
    else:
        application = get_wsgi_application()
