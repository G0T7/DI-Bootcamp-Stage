class Temperature:
    def __init__(self, value):
        self.value = value

    def to_celsius(self):
        raise NotImplementedError("Subclass must implement to_celsius method")

    def to_kelvin(self):
        raise NotImplementedError("Subclass must implement to_kelvin method")

    def to_fahrenheit(self):
        raise NotImplementedError("Subclass must implement to_fahrenheit method")


class Celsius(Temperature):
    def __init__(self, value):
        super().__init__(value)

    def to_celsius(self):
        return self.value

    def to_kelvin(self):
        return self.value + 273.15

    def to_fahrenheit(self):
        return (self.value * 9/5) + 32


class Kelvin(Temperature):
    def __init__(self, value):
        super().__init__(value)

    def to_celsius(self):
        return self.value - 273.15

    def to_kelvin(self):
        return self.value

    def to_fahrenheit(self):
        return (self.value - 273.15) * 9/5 + 32


class Fahrenheit(Temperature):
    def __init__(self, value):
        super().__init__(value)

    def to_celsius(self):
        return (self.value - 32) * 5/9

    def to_kelvin(self):
        return (self.value - 32) * 5/9 + 273.15

    def to_fahrenheit(self):
        return self.value


# Test the implementation
if __name__ == "__main__":
    # Create instances of each subclass
    celsius_temp = Celsius(25)
    kelvin_temp = Kelvin(300)
    fahrenheit_temp = Fahrenheit(77)

    # Test conversions
    print(f"{celsius_temp.to_celsius()} Celsius is equal to {celsius_temp.to_kelvin()} Kelvin")
    print(f"{celsius_temp.to_celsius()} Celsius is equal to {celsius_temp.to_fahrenheit()} Fahrenheit")
    print(f"{kelvin_temp.to_kelvin()} Kelvin is equal to {kelvin_temp.to_celsius()} Celsius")
    print(f"{kelvin_temp.to_kelvin()} Kelvin is equal to {kelvin_temp.to_fahrenheit()} Fahrenheit")
    print(f"{fahrenheit_temp.to_fahrenheit()} Fahrenheit is equal to {fahrenheit_temp.to_celsius()} Celsius")
    print(f"{fahrenheit_temp.to_fahrenheit()} Fahrenheit is equal to {fahrenheit_temp.to_kelvin()} Kelvin")
