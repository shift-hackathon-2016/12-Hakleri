from tastypie.resources import BaseModelResource, ModelResource, Resource
from models import *
from tastypie.authentication import Authentication
from tastypie.authorization import Authorization, ReadOnlyAuthorization
from tastypie import fields


class ConferenceResource(ModelResource):
    company = fields.ForeignKey('shifty.resources.CompanyResource', attribute='company', full=True, null=True, blank=True)

    class Meta:
        queryset = Conference.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "conference"
        always_return_data = True

class EventTypeResource(ModelResource):
    class Meta:
        queryset = EventType.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "event_type"
        always_return_data = True

class ConferenceEventResource(ModelResource):
    conference = fields.ForeignKey(ConferenceResource, attribute='conference', full=True, null=True, blank=True)
    event_type = fields.ForeignKey(EventTypeResource, attribute='event_type', full=True, null=True, blank=True)

    class Meta:
        queryset = ConferenceEvent.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "conference_event"
        always_return_data = True

class EventLikeResource(ModelResource):
    user = fields.ForeignKey('shifty.resources.UserResource', attribute='user', full=True, null=True, blank=True)
    conference_event = fields.ForeignKey(ConferenceEventResource, attribute='conference_event', full=True, null=True, blank=True)

    class Meta:
        queryset = EventLike.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "event_like"
        always_return_data = True

class ConferenceAttendeeResource(ModelResource):
    conference = fields.ForeignKey(ConferenceResource, attribute='conference', full=True, null=True, blank=True)
    user = fields.ForeignKey('shifty.resources.UserResource', attribute='user', full=True, null=True, blank=True)

    class Meta:
        queryset = ConferenceAttendee.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "conference_attendee"
        always_return_data = True

class EventTeamResource(ModelResource):
    conference_event = fields.ForeignKey(ConferenceEventResource, attribute='conference_event', full=True, null=True, blank=True)
    team = fields.ForeignKey('shifty.resources.TeamResource', attribute='team', full=True, null=True, blank=True)

    class Meta:
        queryset = EventTeam.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "event_team"
        always_return_data = True

class EventJudgeVoteResource(ModelResource):
    judge = fields.ForeignKey('shifty.resources.UserResource', attribute='judge', full=True, null=True, blank=True)
    team = fields.ForeignKey('shifty.resources.TeamResource', attribute='team', full=True, null=True, blank=True)
    conference_event = fields.ForeignKey(ConferenceEventResource, attribute='conference_event', full=True, null=True, blank=True)

    class Meta:
        queryset = EventJudgeVote.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "event_judge_vote"
        always_return_data = True

class EventCommentResource(ModelResource):
    user = fields.ForeignKey('shifty.resources.UserResource', attribute='user', full=True, null=True, blank=True)
    conference_event = fields.ForeignKey(ConferenceEventResource, attribute='conference_event', full=True, null=True, blank=True)

    class Meta:
        queryset = EventComment.objects.all()
        authentication = Authentication()
        authorization = Authorization()
        resource_name = "event_comment"
        always_return_data = True
