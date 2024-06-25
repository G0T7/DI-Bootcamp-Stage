import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Please provide either radius or diameter.")

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle with radius: {self.radius}"

    def __repr__(self):
        return f"Circle({self.radius})"

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __lt__(self, other):
        return self.radius < other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def sort_key(self):
        return self.radius

# Test the implementation
if __name__ == "__main__":
    # Create some circles
    c1 = Circle(radius=3)
    c2 = Circle(diameter=10)
    c3 = Circle(radius=5)
    c4 = Circle(diameter=6)

    # Test area calculation
    print(f"Area of c1: {c1.area:.2f}")
    print(f"Area of c2: {c2.area:.2f}")

    # Test string representation
    print(f"c1: {c1}")
    print(f"c2: {c2}")

    # Test addition of circles
    c5 = c1 + c3
    print(f"c5 (c1 + c3): {c5}")

    # Test comparison of circles
    print(f"c1 < c3: {c1 < c3}")
    print(f"c1 == c4: {c1 == c4}")

    # Test sorting circles
    circles = [c1, c2, c3, c4, c5]
    circles_sorted = sorted(circles, key=lambda x: x.sort_key())
    print("Sorted Circles:")
    for circle in circles_sorted:
        print(circle)
