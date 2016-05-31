from django.contrib import admin

from .models import *

admin.site.register(Conference)
admin.site.register(ConferenceEvent)
admin.site.register(EventType)
admin.site.register(EventLike)
admin.site.register(EventComment)
admin.site.register(EventJudgeVote)
admin.site.register(EventTeam)
admin.site.register(ConferenceAttendee)
