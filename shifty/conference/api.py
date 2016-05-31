from tastypie.resources import BaseModelResource, ModelResource, Resource
from models import *
from tastypie.authentication import Authentication
from tastypie.authorization import Authorization, ReadOnlyAuthorization


class ConferenceResource(ModelResource):
    class Meta:
        queryset = Conference.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "conference"
        always_return_data = True

class ConferenceEventResource(ModelResource):
    class Meta:
        queryset = ConferenceEvent.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "conference_event"
        always_return_data = True

class EventTypeResource(ModelResource):
    class Meta:
        queryset = EventType.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "event_type"
        always_return_data = True

class EventLikeResource(ModelResource):
    class Meta:
        queryset = EventLike.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "event_like"
        always_return_data = True

class ConferenceAttendeeResource(ModelResource):
    class Meta:
        queryset = ConferenceAttendee.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "conference_attendee"
        always_return_data = True

class EventTeamResource(ModelResource):
    class Meta:
        queryset = EventTeam.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "event_team"
        always_return_data = True

class EventJudgeVoteResource(ModelResource):
    class Meta:
        queryset = EventJudgeVote.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "event_judge_vote"
        always_return_data = True

class EventCommentResource(ModelResource):
    class Meta:
        queryset = EventComment.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "event_comment"
        always_return_data = True



