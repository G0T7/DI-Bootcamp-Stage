import re

def return_numbers(s):
    # Define the regular expression pattern to match numbers
    pattern = r'\d+'
    
    # Use re.findall() to find all matches of the pattern in the string
    numbers = re.findall(pattern, s)
    
    # Join the numbers together into a single string
    result = ''.join(numbers)
    
    return result

# Test the function
if __name__ == "__main__":
    string = 'k5k3q2g5z6x9bn'
    print(return_numbers(string))  # Output: 532569
