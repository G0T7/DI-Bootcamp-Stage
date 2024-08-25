import json
from django.conf import settings
import os

def load_data():
    with open(os.path.join(settings.BASE_DIR, 'info', 'data.json')) as f:
        return json.load(f)

def get_all_animals():
    data = load_data()
    return data['animals']

def get_all_families():
    data = load_data()
    return data['families']

def get_one_animal(animal_id):
    animals = get_all_animals()
    return next((animal for animal in animals if animal['id'] == animal_id), None)

def get_animals_per_family(family_id):
    animals = get_all_animals()
    return [animal for animal in animals if animal['family'] == family_id]
