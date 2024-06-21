import random
import json

class Character:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.strength = self.generate_ability_score()
        self.dexterity = self.generate_ability_score()
        self.constitution = self.generate_ability_score()
        self.intelligence = self.generate_ability_score()
        self.wisdom = self.generate_ability_score()
        self.charisma = self.generate_ability_score()
    
    def generate_ability_score(self):
        dice_rolls = [random.randint(1, 6) for _ in range(4)]
        dice_rolls.remove(min(dice_rolls))
        return sum(dice_rolls)
    
    def to_dict(self):
        return {
            "name": self.name,
            "age": self.age,
            "strength": self.strength,
            "dexterity": self.dexterity,
            "constitution": self.constitution,
            "intelligence": self.intelligence,
            "wisdom": self.wisdom,
            "charisma": self.charisma
        }
    

class Game:
    def __init__(self):
        self.characters = []
    
    def create_characters(self):
        num_players = int(input("How many players are playing? "))
        for i in range(1, num_players + 1):
            name = input(f"Enter name for player {i}: ")
            age = input(f"Enter age for player {i}: ")
            character = Character(name, age)
            self.characters.append(character)
    
    def export_to_txt(self, filename):
        with open(filename, "w") as file:
            for character in self.characters:
                file.write(f"Character: {character.name}\n")
                file.write(f"Age: {character.age}\n")
                file.write(f"Strength: {character.strength}\n")
                file.write(f"Dexterity: {character.dexterity}\n")
                file.write(f"Constitution: {character.constitution}\n")
                file.write(f"Intelligence: {character.intelligence}\n")
                file.write(f"Wisdom: {character.wisdom}\n")
                file.write(f"Charisma: {character.charisma}\n")
                file.write("\n")
    
    def export_to_json(self, filename):
        characters_data = [character.to_dict() for character in self.characters]
        with open(filename, "w") as file:
            json.dump(characters_data, file, indent=4)
    
    def display_characters(self):
        for character in self.characters:
            print(f"Character: {character.name}")
            print(f"Age: {character.age}")
            print(f"Strength: {character.strength}")
            print(f"Dexterity: {character.dexterity}")
            print(f"Constitution: {character.constitution}")
            print(f"Intelligence: {character.intelligence}")
            print(f"Wisdom: {character.wisdom}")
            print(f"Charisma: {character.charisma}")
            print("\n")

def main():
    game = Game()
    game.create_characters()
    
    print("\nCharacters created:\n")
    game.display_characters()
    
    txt_filename = "characters.txt"
    json_filename = "characters.json"
    
    game.export_to_txt(txt_filename)
    print(f"Characters exported to {txt_filename}")
    
    game.export_to_json(json_filename)
    print(f"Characters exported to {json_filename}")

if __name__ == "__main__":
    main()
