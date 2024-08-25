import requests
import random
from django.core.management.base import BaseCommand
from datetime import datetime
from cards.models import Card

class Command(BaseCommand):
    help = 'Populates the Card model with data from the Harry Potter API'

    def handle(self, *args, **kwargs):
        api_url = "https://hp-api.onrender.com/api/characters"
        response = requests.get(api_url)
        if response.status_code != 200:
            self.stdout.write(self.style.ERROR('Failed to fetch data from Harry Potter API'))
            return

        characters = response.json()
        Card.objects.all().delete()

        for character in characters:
            name_character = character['name']
            species = character.get('species', '')
            house = character.get('house', '')
            image_url = character.get('image', '')
            date_of_birth = character.get('dateOfBirth', '')
            patronus = character.get('patronus', '')
            price = random.randint(200, 2000)
            xp_points = random.randint(1, 10)
            current_owner = None
            previous_owner = None

            # Handle date format
            if date_of_birth:
                try:
                    date_of_birth = datetime.strptime(date_of_birth, "%d-%m-%Y").strftime("%Y-%m-%d")
                except ValueError:
                    self.stdout.write(self.style.WARNING(f'Invalid date format for {name_character}: {date_of_birth}'))
                    date_of_birth = None
            else:
                date_of_birth = None

            card = Card(
                name_character=name_character,
                species=species,
                house=house,
                image_url=image_url,
                date_of_birth=date_of_birth,
                patronus=patronus,
                price=price,
                xp_points=xp_points,
                current_owner=current_owner,
                previous_owner=previous_owner
            )

            try:
                card.save()
                self.stdout.write(self.style.SUCCESS(f'Successfully saved card: {name_character}'))
            except Exception as e:
                self.stdout.write(self.style.ERROR(f'Error saving card {name_character}: {e}'))

        self.stdout.write(self.style.SUCCESS('Successfully populated cards from the Harry Potter API'))
