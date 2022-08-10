from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Participant(models.Model):
    Auth = models.OneToOneField(User, on_delete=models.CASCADE)
    Id = models.CharField(max_length=12, unique=True)
    StudentCode = models.CharField(max_length=12, default='', unique=True)
    Email = models.CharField(max_length=256, unique=True)
    IdType = models.CharField(max_length=8, default='C.C')
    FullName = models.CharField(max_length=512)
    Password = models.CharField(max_length=256)
