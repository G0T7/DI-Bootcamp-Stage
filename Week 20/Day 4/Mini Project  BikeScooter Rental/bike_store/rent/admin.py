from django.contrib import admin
from .models import Address, Customer, VehicleType, VehicleSize, Vehicle, Rental, RentalRate, RentalStation, VehicleAtRentalStation

admin.site.register(Address)
admin.site.register(Customer)
admin.site.register(VehicleType)
admin.site.register(VehicleSize)
admin.site.register(Vehicle)
admin.site.register(Rental)
admin.site.register(RentalRate)
admin.site.register(RentalStation)
admin.site.register(VehicleAtRentalStation)
