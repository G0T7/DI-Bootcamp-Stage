from django.urls import path
from . import views

urlpatterns = [
    path('stats/monthly/', views.monthly_rental_stats, name='monthly_rental_stats'),
    path('stats/popular_station/', views.popular_station_stats, name='popular_station_stats'),
    path('stats/popular_vehicle_type/', views.popular_vehicle_type, name='popular_vehicle_type'),
]
