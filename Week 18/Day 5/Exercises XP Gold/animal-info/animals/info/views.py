from django.http import HttpResponse
from .read_data import get_all_animals, get_all_families, get_one_animal, get_animals_per_family

def display_all_animals(request):
    animals = get_all_animals()
    response = "<br>".join([f"{animal['name']}, {animal['legs']} legs, {animal['weight']} kg, {animal['height']} m, {animal['speed']} km/h" for animal in animals])
    return HttpResponse(response)

def display_all_families(request):
    families = get_all_families()
    response = "<br>".join([family['name'] for family in families])
    return HttpResponse(response)

def display_one_animal(request, animal_id):
    animal = get_one_animal(animal_id)
    if animal:
        response = f"{animal['name']}, {animal['legs']} legs, {animal['weight']} kg, {animal['height']} m, {animal['speed']} km/h"
    else:
        response = "Animal not found"
    return HttpResponse(response)

def display_animals_per_family(request, family_id):
    animals = get_animals_per_family(family_id)
    response = "<br>".join([animal['name'] for animal in animals])
    return HttpResponse(response)
