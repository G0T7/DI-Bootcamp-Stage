from django.urls import path
from .views import RentalList, CustomerList

urlpatterns = [
    path('rental/', RentalList.as_view(), name='rental-list'),
    path('customer/', CustomerList.as_view(), name='customer-list'),
]
