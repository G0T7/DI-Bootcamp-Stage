import re

def validate_full_name():
    # Define the regular expression pattern
    pattern = r'^[A-Z][a-z]+ [A-Z][a-z]+$'
    
    while True:
        full_name = input("Enter your full name (e.g., John Doe): ")
        
        # Use re.match() to match the pattern
        if re.match(pattern, full_name):
            print("Valid full name!")
            break
        else:
            print("Invalid full name format. Please try again.")

# Test the function
if __name__ == "__main__":
    validate_full_name()

