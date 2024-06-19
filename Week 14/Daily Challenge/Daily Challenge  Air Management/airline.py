class Airline:
    def __init__(self, id, name):
        self.id = id
        self.name = name
        self.planes = []

    def __repr__(self):
        return f"Airline({self.id}, {self.name})"
