from rest_framework import serializers
from .models import Customer, Vehicle, Rental, RentalStation

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = '__all__'

class RentalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rental
        fields = '__all__'

class RentalStationSerializer(serializers.ModelSerializer):
    class Meta:
        model = RentalStation
        fields = '__all__'
