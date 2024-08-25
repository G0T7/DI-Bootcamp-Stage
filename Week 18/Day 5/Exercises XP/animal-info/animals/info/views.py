from django.shortcuts import render
from django.http import HttpResponse
from .data import animals, families

def display_all_animals(request):
    response = "<br>".join([f"{animal['name']}, {animal['legs']} legs, {animal['weight']} kg, {animal['height']} m, {animal['speed']} km/h" for animal in animals])
    return HttpResponse(response)

def display_all_families(request):
    response = "<br>".join([family['name'] for family in families])
    return HttpResponse(response)

def display_one_animal(request, animal_id):
    animal = next((animal for animal in animals if animal['id'] == animal_id), None)
    if animal:
        response = f"{animal['name']}, {animal['legs']} legs, {animal['weight']} kg, {animal['height']} m, {animal['speed']} km/h"
    else:
        response = "Animal not found"
    return HttpResponse(response)

def display_animal_per_family(request, family_id):
    response = "<br>".join([animal['name'] for animal in animals if animal['family'] == family_id])
    return HttpResponse(response)

