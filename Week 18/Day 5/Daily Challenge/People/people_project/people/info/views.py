from django.http import HttpResponse

# Part 1
name = 'Bob Smith'
age = 35
country = 'USA'

def display_person(request):
    response = f"Name: {name}, Age: {age}, Country: {country}"
    return HttpResponse(response)

# Part 2
people = ['bob', 'martha', 'fabio', 'john']

def display_people(request):
    sorted_people = sorted([person.capitalize() for person in people])
    response = "<br>".join(sorted_people)
    return HttpResponse(response)

# Part 3
all_people = [
    {'id': 1, 'name': 'Bob Smith', 'age': 35, 'country': 'USA'},
    {'id': 2, 'name': 'Martha Smith', 'age': 60, 'country': 'USA'},
    {'id': 3, 'name': 'Fabio Alberto', 'age': 18, 'country': 'Italy'},
    {'id': 4, 'name': 'Dietrich Stein', 'age': 85, 'country': 'Germany'}
]

def display_all_people(request):
    sorted_people = sorted(all_people, key=lambda x: x['age'])
    response = "<br>".join([f"Name: {person['name']}, Age: {person['age']}, Country: {person['country']}" for person in sorted_people])
    return HttpResponse(response)
