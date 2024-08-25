from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Customer, Vehicle, Rental, RentalStation
from .serializers import CustomerSerializer, VehicleSerializer, RentalSerializer, RentalStationSerializer

class RentalList(APIView):
    def get(self, request):
        rentals = Rental.objects.all().order_by('rental_date')
        serializer = RentalSerializer(rentals, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RentalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomerList(APIView):
    def get(self, request):
        customers = Customer.objects.all().order_by('last_name')
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
