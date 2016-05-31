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
