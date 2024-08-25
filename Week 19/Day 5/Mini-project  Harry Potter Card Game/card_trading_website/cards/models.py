from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
import random

def default_price():
    return random.randint(200, 2000)

def default_xp_points():
    return random.randint(1, 10)

class User(AbstractUser):
    amount_of_money = models.DecimalField(max_digits=10, decimal_places=2, default=1000)
    points = models.IntegerField(default=0)

    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_set',  # Add related_name to avoid conflict
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_set',  # Add related_name to avoid conflict
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )

class Card(models.Model):
    name_character = models.CharField(max_length=100)
    species = models.CharField(max_length=100, blank=True)
    house = models.CharField(max_length=100, blank=True)
    image_url = models.URLField(blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    patronus = models.CharField(max_length=100, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=default_price)
    xp_points = models.IntegerField(default=default_xp_points)
    current_owner = models.ForeignKey(User, related_name='current_cards', on_delete=models.SET_NULL, null=True, blank=True)
    previous_owner = models.ForeignKey(User, related_name='previous_cards', on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name_character
