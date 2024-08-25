# backend/urls.py

from django.contrib import admin
from django.urls import path, include
from game import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/signup/', views.signup_view, name='signup'),
    path('api/login/', views.login_view, name='login'),
    path('api/user-profile/', views.user_profile_view, name='user-profile'),
    path('api/leaderboard/', views.leaderboard_view, name='leaderboard'),  # Add this line
    path('api/', include('game.urls')),  # Ensure this includes your app's URLs
]
