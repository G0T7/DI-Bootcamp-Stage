from menu_manager import MenuManager

def load_manager():
    return MenuManager()

def show_user_menu(manager):
    print("MENU")
    print("(a) Add an item")
    print("(d) Delete an item")
    print("(v) View the menu")
    print("(x) Exit")
    print("")

    while True:
        choice = input(":").lower()

        if choice == 'a':
            add_item_to_menu(manager)
        elif choice == 'd':
            remove_item_from_menu(manager)
        elif choice == 'v':
            show_restaurant_menu(manager)
        elif choice == 'x':
            manager.save_to_file()
            print("Menu was saved.")
            break
        else:
            print("Invalid choice. Please choose again.")

def add_item_to_menu(manager):
    name = input("Enter the item's name: ")
    price = float(input("Enter the item's price: "))
    manager.add_item(name, price)
    print("Item was added successfully.")

def remove_item_from_menu(manager):
    name = input("Enter the name of the item to remove: ")
    if manager.remove_item(name):
        print(f"{name} was deleted successfully.")
    else:
        print(f"Error: {name} was not found in the menu.")

def show_restaurant_menu(manager):
    print("\nRestaurant Menu:")
    for item in manager.menu:
        print(f"{item['name']}: ${item['price']}")
    print("")

if __name__ == "__main__":
    manager = load_manager()
    show_user_menu(manager)
