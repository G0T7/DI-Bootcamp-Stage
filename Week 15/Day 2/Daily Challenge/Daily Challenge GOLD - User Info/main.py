# Function to ask for user input
def get_user_info():
    name = input("Enter name: ")
    age = int(input("Enter age: "))
    score = int(input("Enter score: "))
    return name, age, score

# Main function
def main():
    # List to store tuples
    user_info = []

    # Ask for user input 5 times
    for _ in range(5):
        name, age, score = get_user_info()
        user_info.append((name, age, score))

    # Sort the list by Name > Age > Score using lambda function
    user_info.sort(key=lambda x: (x[0], x[1], x[2]))

    # Print the sorted list
    print(user_info)

if __name__ == "__main__":
    main()
