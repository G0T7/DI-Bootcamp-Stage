import datetime

class Airplane:
    def __init__(self, id, current_location, company):
        self.id = id
        self.current_location = current_location
        self.company = company
        self.next_flights = []

    def fly(self, destination):
        if self.next_flights and self.next_flights[0].destination == destination:
            flight = self.next_flights.pop(0)
            flight.take_off()
            flight.land()
            print(f"Airplane {self.id} has flown from {flight.origin.city} to {flight.destination.city}.")
        else:
            print(f"No scheduled flight to {destination.city}.")

    def location_on_date(self, date):
        for flight in self.next_flights:
            if flight.date == date:
                return flight.destination
        return self.current_location

    def available_on_date(self, date, location):
        return self.location_on_date(date) == location and not any(flight.date == date for flight in self.next_flights)

    def __repr__(self):
        return f"Airplane({self.id}, {self.current_location.city}, {self.company.id})"
