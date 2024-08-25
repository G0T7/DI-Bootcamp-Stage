import json
from django.conf import settings
import os

class Animal:
    def __init__(self, name, legs, weight, height, speed, family):
        self.name = name
        self.legs = legs
        self.weight = weight
        self.height = height
        self.speed = speed
        self.family = family

    def save(self):
        data_file = os.path.join(settings.BASE_DIR, 'info', 'data.json')
        with open(data_file, 'r+') as file:
            data = json.load(file)
            new_id = max(animal['id'] for animal in data['animals']) + 1
            new_animal = {
                "id": new_id,
                "name": self.name,
                "legs": self.legs,
                "weight": self.weight,
                "height": self.height,
                "speed": self.speed,
                "family": self.family
            }
            data['animals'].append(new_animal)
            file.seek(0)
            json.dump(data, file, indent=4)
