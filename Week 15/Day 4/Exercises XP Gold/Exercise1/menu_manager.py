import json

class MenuManager:
    def __init__(self):
        self.menu = self.load_menu()

    def load_menu(self):
        try:
            with open('restaurant_menu.json', 'r') as file:
                menu_data = json.load(file)
                return menu_data['items']
        except FileNotFoundError:
            print("Menu file not found. Exiting.")
            exit()

    def add_item(self, name, price):
        new_item = {
            "name": name,
            "price": price
        }
        self.menu.append(new_item)

    def remove_item(self, name):
        for item in self.menu:
            if item['name'] == name:
                self.menu.remove(item)
                return True
        return False

    def save_to_file(self):
        menu_data = {"items": self.menu}
        with open('restaurant_menu.json', 'w') as file:
            json.dump(menu_data, file, indent=4)
