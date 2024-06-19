# random_string_generator.py

import string
import random

def generate_random_string(length=5):
    letters = string.ascii_letters
    return ''.join(random.choice(letters) for _ in range(length))

if __name__ == "__main__":
    random_string = generate_random_string()
    print("Random String:", random_string)
