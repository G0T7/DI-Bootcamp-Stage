from datetime import datetime
from airline import Airline
from airplane import Airplane
from flight import Flight
from airport import Airport

# Create airlines
airline1 = Airline('AA', 'American Airlines')

# Create airports
jfk = Airport('JFK')
lax = Airport('LAX')

# Create airplanes
plane1 = Airplane(1, jfk, airline1)
plane2 = Airplane(2, jfk, airline1)

# Add planes to airline and airports
airline1.planes.append(plane1)
airline1.planes.append(plane2)
jfk.planes.append(plane1)
jfk.planes.append(plane2)

# Schedule flights
jfk.schedule_flight(lax, datetime(2024, 6, 15))
jfk.schedule_flight(lax, datetime(2024, 6, 16))

# Display flight info
print("\nFlight Information from JFK:")
jfk.info(datetime(2024, 6, 14), datetime(2024, 6, 20))

# Fly plane1
plane1.fly(lax)

# Check location of plane1 on specific date
print(f"\nLocation of Plane 1 on 2024-06-15: {plane1.location_on_date(datetime(2024, 6, 15)).city}")

# Check availability of plane2 on specific date
print(f"\nIs Plane 2 available on 2024-06-16 at JFK? {plane2.available_on_date(datetime(2024, 6, 16), jfk)}")
