def calculate_age_on_planet(age_in_seconds):
    # Define orbital periods in seconds on Earth
    orbital_periods = {
        'Earth': 31557600,
        'Mercury': 0.2408467 * 31557600,
        'Venus': 0.61519726 * 31557600,
        'Mars': 1.8808158 * 31557600,
        'Jupiter': 11.862615 * 31557600,
        'Saturn': 29.447498 * 31557600,
        'Uranus': 84.016846 * 31557600,
        'Neptune': 164.79132 * 31557600
    }
    
    # Calculate age on each planet
    age_on_planets = {}
    for planet, period_in_seconds in orbital_periods.items():
        age_on_planet = age_in_seconds / period_in_seconds
        age_on_planets[planet] = round(age_on_planet, 2)
    
    # Print or return the results
    for planet, age in age_on_planets.items():
        print(f"Age on {planet}: {age} Earth-years")

# Test the function
if __name__ == "__main__":
    age_in_seconds = 1000000000
    calculate_age_on_planet(age_in_seconds)
