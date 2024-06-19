class Flight:
    def __init__(self, date, origin, destination, plane):
        self.date = date
        self.origin = origin
        self.destination = destination
        self.plane = plane
        self.id = f"{destination.city}{plane.company.id}{date.strftime('%Y%m%d')}"

    def take_off(self):
        self.origin.planes.remove(self.plane)

    def land(self):
        self.destination.planes.append(self.plane)
        self.plane.current_location = self.destination

    def __repr__(self):
        return f"Flight({self.id}, {self.origin.city} -> {self.destination.city} on {self.date})"
