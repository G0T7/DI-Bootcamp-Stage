from faker import Faker

fake = Faker()

# Create an empty list called users (list of dictionaries)
users = []

def add_user():
    # Generate fake data
    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code()
    }
    # Append the user dictionary to the users list
    users.append(user)

# Example usage (this line is optional and can be removed):
if __name__ == "__main__":
    # Add 5 users
    for _ in range(5):
        add_user()

    # Print the users list
    for user in users:
        print(user)
