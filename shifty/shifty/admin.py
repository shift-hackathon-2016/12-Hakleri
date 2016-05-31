from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

from shifty.models import ShiftUser, Team, Company

# Define a new User admin
class UserAdmin(BaseUserAdmin):
    pass

admin.site.register(ShiftUser, UserAdmin)
admin.site.register(Team)
admin.site.register(Company)
