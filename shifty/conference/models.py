from __future__ import unicode_literals

from django.db import models

class Conference(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    date_start = models.DateTimeField(blank=True, null=True)
    date_end = models.DateTimeField(blank=True, null=True)

    time_created = models.DateTimeField(auto_now_add=True)

    company = models.ForeignKey('shifty.Company', blank=True, null=True)

    def __str__(self):
        return '%s' % (self.name,)

class EventType(models.Model):
    event_type = models.CharField(max_length=100)

    def __str__(self):
        return '%s' % (self.event_type,)

class ConferenceEvent(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    time_start = models.DateTimeField(blank=True, null=True)
    time_end = models.DateTimeField(blank=True, null=True)

    time_created = models.DateTimeField(auto_now_add=True)

    event_type = models.ForeignKey('EventType', blank=True, null=True)
    conference = models.ForeignKey('Conference', blank=True, null=True)

    def __str__(self):
        return '%s in conference %s' % (self.name, self.conference.name)

class EventLike(models.Model):
    conference_event = models.ForeignKey('ConferenceEvent', blank=True, null=True)
    user = models.ForeignKey('shifty.ShiftUser', blank=True, null=True)

    time_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s likes %s' % (self.user.username, self.conference_event.name if self.conference_event else 'nothing')

class ConferenceAttendee(models.Model):
    conference = models.ForeignKey('Conference', blank=True, null=True)
    user = models.ForeignKey('shifty.ShiftUser', blank=True, null=True)

    time_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s in conference %s' % (self.user.username, self.conference.name)

class EventTeam(models.Model):
    conference_event = models.ForeignKey('ConferenceEvent', blank=True, null=True)
    team = models.ForeignKey('shifty.Team', blank=True, null=True)

    time_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '%s is a team in event %s' % (self.team.team_name, self.conference_event.name if self.conference_event else 'nothing')

class EventJudgeVote(models.Model):
    judge = models.ForeignKey('shifty.ShiftUser', blank=True, null=True)
    conference_event = models.ForeignKey('ConferenceEvent', blank=True, null=True)
    team = models.ForeignKey('shifty.Team', blank=True, null=True)

    vote = models.IntegerField()

    time_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'judge %s voted %d for team %s' % (self.judge.username, self.vote, self.team.team_name)


class EventComment(models.Model):
    user = models.ForeignKey('shifty.ShiftUser', blank=True, null=True)
    conference_event = models.ForeignKey('ConferenceEvent', blank=True, null=True)

    comment = models.TextField(blank=True, null=True)

    time_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'comment from %s' % (self.user.username,)


