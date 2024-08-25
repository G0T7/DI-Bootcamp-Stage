# admin.py
from django.contrib import admin
from django.contrib.auth.models import User, Group
from .models import GameScore, UserProfile

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('username', 'email')
    ordering = ('username',)
    list_filter = ('is_staff', 'is_active')

class GroupAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)
    ordering = ('name',)

class GameScoreAdmin(admin.ModelAdmin):
    list_display = ('player', 'score', 'date', 'difficulty')
    search_fields = ('player__username', 'difficulty')
    list_filter = ('difficulty', 'date')
    ordering = ('-date',)

class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'short_bio', 'avatar')
    search_fields = ('user__username',)
    ordering = ('user',)

    def short_bio(self, obj):
        return obj.bio[:50]  # Display first 50 characters of bio
    short_bio.short_description = 'Bio'

# Unregister the default User and Group models
admin.site.unregister(User)
admin.site.unregister(Group)

# Register the models with the customized admin classes
admin.site.register(User, UserAdmin)
admin.site.register(Group, GroupAdmin)
admin.site.register(GameScore, GameScoreAdmin)
admin.site.register(UserProfile, UserProfileAdmin)
