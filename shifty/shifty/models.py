from django.db import models
from django.contrib.auth.models import AbstractUser

class ShiftUser(AbstractUser):
    ATTENDEE = 'att'
    JUDGE = 'judge'
    TYPE_CHOICES = (
        (ATTENDEE, 'Attendee'),
        (JUDGE, 'Judge'),
    )
    user_type = models.CharField(max_length=10,
                                      choices=TYPE_CHOICES,
                                      default=ATTENDEE)

    team = models.ForeignKey('Team', on_delete=models.CASCADE, blank=True, null=True)
    company = models.ForeignKey('Company', on_delete=models.CASCADE, blank=True, null=True)

class Team(models.Model):
    team_name = models.CharField(max_length=100)
    def __str__(self):
        return '%s' % (self.team_name, )

class Company(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    country_code = models.CharField(max_length=255, blank=True, null=True)
    def __str__(self):
        return '%s' % (self.name, )
