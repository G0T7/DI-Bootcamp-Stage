# exercise_one.py

# Option 1: Import the entire module
import func

func.add_numbers(2, 3)

# Option 2: Import the function directly
from func import add_numbers

add_numbers(4, 5)

# Option 3: Import the function with an alias
from func import add_numbers as add

add(6, 7)

# Option 4: Import the module with an alias
import func as f

f.add_numbers(8, 9)
