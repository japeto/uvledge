from rest_framework import serializers
from .models import Participant


class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = ['Auth', 'Id', 'StudentCode', 'Email', 'IdType',
                  'FullName', 'Password']
