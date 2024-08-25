
from django.utils.dateparse import parse_date
from django.db.models import Count
from django.db.models.functions import TruncMonth
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Rental

@api_view(['GET'])
def monthly_rental_stats(request):
    rentals = Rental.objects.annotate(month=TruncMonth('rental_date')).values('month').annotate(count=Count('id')).order_by('month')
    stats = {rental['month'].strftime("%B %Y"): rental['count'] for rental in rentals}
    return Response(stats)

@api_view(['GET'])
def popular_station_stats(request):
    rentals = Rental.objects.values('station__name').annotate(count=Count('id')).order_by('-count')
    stats = {rental['station__name']: rental['count'] for rental in rentals}
    return Response(stats)

@api_view(['GET'])
def popular_vehicle_type(request):
    rentals = Rental.objects.values('vehicle__vehicle_type').annotate(count=Count('id')).order_by('-count')
    stats = {rental['vehicle__vehicle_type']: rental['count'] for rental in rentals}
    return Response(stats)

from django.utils.dateparse import parse_date

@api_view(['GET'])
def monthly_rental_stats(request):
    start_date = request.GET.get('start_date')
    end_date = request.GET.get('end_date')

    rentals = Rental.objects.all()

    if start_date and end_date:
        rentals = rentals.filter(rental_date__range=[start_date, end_date])

    rentals = rentals.annotate(month=TruncMonth('rental_date')).values('month').annotate(count=Count('id')).order_by('month')
    stats = {rental['month'].strftime("%B %Y"): rental['count'] for rental in rentals}
    return Response(stats)
