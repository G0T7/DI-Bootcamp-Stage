import os
import django
from faker import Faker
from rent.models import Customer, Address

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bike_store.settings')
django.setup()

fake = Faker()

def create_customers(number):
    for _ in range(number):
        address = Address(
            address=fake.street_address(),
            address2=fake.secondary_address(),
            city=fake.city(),
            country=fake.country(),
            postal_code=fake.zipcode()
        )
        address.save()

        customer = Customer(
            first_name=fake.first_name(),
            last_name=fake.last_name(),
            email=fake.email(),
            phone_number=fake.phone_number(),
            address=address
        )
        customer.save()

    print(f"CREATED {number} Customers")

create_customers(100)
