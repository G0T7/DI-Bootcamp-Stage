import random
import string

def generate_password(length):
    # Define the character sets
    digits = string.digits
    lowercase_letters = string.ascii_lowercase
    uppercase_letters = string.ascii_uppercase
    special_characters = '!@#$%^&*()_+{}[]'
    
    # Ensure at least one character from each category
    password = []
    password.append(random.choice(digits))
    password.append(random.choice(lowercase_letters))
    password.append(random.choice(uppercase_letters))
    password.append(random.choice(special_characters))
    
    # Fill the rest of the password with random characters
    remaining_length = length - 4  # 4 characters already chosen
    password.extend(random.choices(digits + lowercase_letters + uppercase_letters + special_characters, k=remaining_length))
    
    # Shuffle the password to ensure randomness
    random.shuffle(password)
    
    # Convert list to string
    password_str = ''.join(password)
    
    return password_str

def generate_valid_password():
    # Ask user to input the password length
    while True:
        try:
            length = int(input("Enter the password length (between 6 and 30 characters): "))
            if 6 <= length <= 30:
                break
            else:
                print("Please enter a number between 6 and 30.")
        except ValueError:
            print("Please enter a valid number.")
    
    # Generate the password
    password = generate_password(length)
    
    # Print the password with a friendly message
    print(f"Generated Password: {password}")
    print("Please keep this password in a safe place!")

# Test the function
if __name__ == "__main__":
    # Generate 100 passwords of different lengths and test them
    for _ in range(100):
        length = random.randint(6, 30)
        password = generate_password(length)
        print(f"Password Length: {length}, Password: {password}")
        # You can add additional validation here if needed
