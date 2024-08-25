# models.py

from django.db import models

class Station(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Vehicle(models.Model):
    BIKE = 'bike'
    SCOOTER = 'scooter'
    VEHICLE_TYPE_CHOICES = [
        (BIKE, 'Bike'),
        (SCOOTER, 'Scooter'),
    ]
    vehicle_type = models.CharField(max_length=10, choices=VEHICLE_TYPE_CHOICES)

    def __str__(self):
        return self.vehicle_type

class Rental(models.Model):
    station = models.ForeignKey(Station, on_delete=models.CASCADE)
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    rental_date = models.DateTimeField()

    def __str__(self):
        return f'{self.vehicle} rented from {self.station}'
