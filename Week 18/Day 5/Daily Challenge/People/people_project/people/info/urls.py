from django.urls import path
from . import views

urlpatterns = [
    path('person/', views.display_person),
    path('people/', views.display_people),
    path('all_people/', views.display_all_people),
]
