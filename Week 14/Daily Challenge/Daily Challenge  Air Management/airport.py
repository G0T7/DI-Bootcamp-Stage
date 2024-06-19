from flight import Flight

class Airport:
    def __init__(self, city):
        self.city = city
        self.planes = []
        self.scheduled_departures = []
        self.scheduled_arrivals = []

    def schedule_flight(self, destination, date):
        available_planes = [plane for plane in self.planes if plane.available_on_date(date, self)]
        if available_planes:
            plane = available_planes[0]
            flight = Flight(date, self, destination, plane)
            self.scheduled_departures.append(flight)
            destination.scheduled_arrivals.append(flight)
            plane.next_flights.append(flight)
            plane.next_flights.sort(key=lambda f: f.date)
            print(f"Flight {flight.id} scheduled from {self.city} to {destination.city} on {date}.")
        else:
            print(f"No available planes for flight from {self.city} to {destination.city} on {date}.")

    def info(self, start_date, end_date):
        for flight in self.scheduled_departures:
            if start_date <= flight.date <= end_date:
                print(f"Scheduled flight {flight.id} from {self.city} to {flight.destination.city} on {flight.date}.")

    def __repr__(self):
        return f"Airport({self.city})"
