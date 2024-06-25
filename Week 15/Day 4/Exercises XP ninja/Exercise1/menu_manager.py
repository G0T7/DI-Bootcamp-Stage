import json
import re

# Load the restaurant menu from JSON file
def load_menu():
    with open("restaurant_menu.json", "r") as file:
        menu = json.load(file)
    return menu

# Save the updated menu to JSON file
def save_menu(menu):
    with open("restaurant_menu.json", "w") as file:
        json.dump(menu, file, indent=4)

# Validate if the name follows the Valentine's day item rules
def validate_item_name(name):
    # Each word in the item name should begin with an uppercase letter
    words = name.split()
    for word in words:
        if not re.match(r'^[A-Z][a-z]*$', word):
            return False
    
    # First word should start with 'V'
    if not words[0].startswith('V'):
        return False
    
    # Connection words should start in lowercase
    connection_words = ['of', 'for', 'with', 'and', 'at', 'the']
    for i in range(1, len(words)):
        if words[i] in connection_words:
            if not words[i].islower():
                return False
    
    # The item name should contain at least two 'e' and no numbers
    if name.count('e') < 2 or any(char.isdigit() for char in name):
        return False
    
    return True

# Validate if the price matches the pattern XX.14
def validate_item_price(price):
    return re.match(r'^\d\d\.14$', price) is not None

# Class to manage the restaurant menu
class MenuManager:
    def __init__(self):
        self.menu = load_menu()
        
    def add_valentine_item(self, name, price):
        if validate_item_name(name) and validate_item_price(price):
            self.menu['valentines_day_items'].append({
                'name': name,
                'price': float(price)
            })
            print(f"Item '{name}' added to Valentine's day menu.")
            save_menu(self.menu)
        else:
            print("Invalid item format. Could not add to Valentine's day menu.")

    def display_menu(self):
        print("MENU")
        print("-----")
        for item in self.menu['items']:
            print(f"{item['name']}, ${item['price']}")
        print("Valentine's Day Menu")
        print("-----")
        for item in self.menu['valentines_day_items']:
            print(f"{item['name']}, ${item['price']}")
        print("\n")
        print("   **         **   ")
        print(" ****       ****  ")
        print("********   ********")
        print(" **************** ")
        print("   ************** ")
        print("     **********   ")
        print("       ******     ")
        print("         **       ")

# Main function to interact with the menu
def main():
    manager = MenuManager()
    
    while True:
        choice = input("Enter 'a' to add a Valentine's day item, 'v' to view the menu, or 'x' to exit: ").lower()
        
        if choice == 'a':
            name = input("Enter the name of the Valentine's day item: ").strip()
            price = input("Enter the price (format XX.14): ").strip()
            manager.add_valentine_item(name, price)
        elif choice == 'v':
            manager.display_menu()
        elif choice == 'x':
            print("Saving the menu...")
            save_menu(manager.menu)
            print("Menu saved. Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()

