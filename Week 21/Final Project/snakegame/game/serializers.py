# game/serializers.py
from rest_framework import serializers
from .models import GameScore, UserProfile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {
            'password': {'write_only': True, 'min_length': 8},
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class GameScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameScore
        fields = '__all__'

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
