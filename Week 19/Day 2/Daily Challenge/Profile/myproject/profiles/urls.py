from django.urls import path
from . import views

urlpatterns = [
    path('create_profile/', views.create_profile),
    path('delete_profile/<int:id>/', views.delete_profile),
]
