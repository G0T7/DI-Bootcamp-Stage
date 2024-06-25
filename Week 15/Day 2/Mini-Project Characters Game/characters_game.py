class Character:
    def __init__(self, name):
        self.name = name
        self.life = 20
        self.attack = 10
        print(f"A new character {self.name} has been created with life {self.life} and attack {self.attack}.")
    
    def basic_attack(self, other_char):
        print(f"{self.name} is attacking {other_char.name}!")
        other_char.life -= self.attack
        print(f"{other_char.name} loses {self.attack} life points. {other_char.name}'s life is now {other_char.life}.")
    
    def __str__(self):
        return f"{self.name} has {self.life} life points and {self.attack} attack points."


class Druid(Character):
    def __init__(self, name):
        super().__init__(name)
        print(f"{self.name} is a Druid and has joined the game!")
    
    def meditate(self):
        print(f"{self.name} is meditating...")
        self.life += 10
        self.attack -= 2
        print(f"Meditation complete! {self.name}'s life is now {self.life} and attack is {self.attack}.")
    
    def animal_help(self):
        print(f"{self.name} is summoning animal help!")
        self.attack += 5
        print(f"{self.name} now has increased attack of {self.attack}.")
    
    def fight(self, other_char):
        print(f"{self.name} is fighting {other_char.name}!")
        damage = int(0.75 * self.life + 0.75 * self.attack)
        other_char.life -= damage
        print(f"{other_char.name} loses {damage} life points. {other_char.name}'s life is now {other_char.life}.")


class Warrior(Character):
    def __init__(self, name):
        super().__init__(name)
        print(f"{self.name} is a Warrior and has joined the game!")
    
    def brawl(self, other_char):
        print(f"{self.name} is brawling with {other_char.name}!")
        damage_to_other = 2 * self.attack
        self.life += 0.5 * damage_to_other
        other_char.life -= damage_to_other
        print(f"{self.name} gains {0.5 * damage_to_other} life points. {self.name}'s life is now {self.life}.")
        print(f"{other_char.name} loses {damage_to_other} life points. {other_char.name}'s life is now {other_char.life}.")
    
    def train(self):
        print(f"{self.name} is training!")
        self.attack += 2
        self.life += 2
        print(f"Training complete! {self.name}'s attack is now {self.attack} and life is {self.life}.")
    
    def roar(self, other_char):
        print(f"{self.name} is roaring at {other_char.name}!")
        other_char.attack -= 3
        print(f"{other_char.name} loses 3 attack points. {other_char.name}'s attack is now {other_char.attack}.")


class Mage(Character):
    def __init__(self, name):
        super().__init__(name)
        print(f"{self.name} is a Mage and has joined the game!")
    
    def curse(self, other_char):
        print(f"{self.name} is cursing {other_char.name}!")
        other_char.attack -= 2
        print(f"{other_char.name} loses 2 attack points. {other_char.name}'s attack is now {other_char.attack}.")
    
    def summon(self):
        print(f"{self.name} is summoning magical powers!")
        self.attack += 3
        print(f"{self.name} now has increased attack of {self.attack}.")
    
    def cast_spell(self, other_char):
        print(f"{self.name} is casting a spell on {other_char.name}!")
        damage = int(self.attack / 5)
        other_char.life -= damage
        print(f"{other_char.name} loses {damage} life points. {other_char.name}'s life is now {other_char.life}.")


# Testing the classes and methods

if __name__ == "__main__":
    # Create one of each character
    druid = Druid("Druid A")
    warrior = Warrior("Warrior B")
    mage = Mage("Mage C")
    
    # Test each character's methods
    print("\nTesting Druid methods:")
    druid.basic_attack(warrior)
    druid.meditate()
    druid.animal_help()
    druid.fight(mage)
    
    print("\nTesting Warrior methods:")
    warrior.basic_attack(druid)
    warrior.brawl(mage)
    warrior.train()
    warrior.roar(druid)
    
    print("\nTesting Mage methods:")
    mage.basic_attack(druid)
    mage.curse(druid)
    mage.summon()
    mage.cast_spell(warrior)
