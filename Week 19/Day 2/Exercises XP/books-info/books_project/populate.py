import os
import django
import requests
from datetime import datetime
from books.models import Book, Author, Category

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'books_project.settings')
django.setup()

def fetch_books_data(search_term):
    url = f'https://www.googleapis.com/books/v1/volumes?q={search_term}'
    response = requests.get(url)
    return response.json()

def populate_books(data):
    for item in data['items']:
        volume_info = item['volumeInfo']
        title = volume_info.get('title', 'No Title')
        authors = volume_info.get('authors', ['Unknown Author'])
        published_date = volume_info.get('publishedDate', '2000-01-01')
        description = volume_info.get('description', 'No Description')
        page_count = volume_info.get('pageCount', 0)
        categories = volume_info.get('categories', ['Uncategorized'])
        thumbnail_url = volume_info.get('imageLinks', {}).get('thumbnail', '')

        # Convert published_date to datetime object
        try:
            published_date = datetime.strptime(published_date, '%Y-%m-%d').date()
        except ValueError:
            published_date = datetime.strptime(published_date, '%Y').date()

        book = Book.objects.create(
            title=title,
            published_date=published_date,
            description=description,
            page_count=page_count,
            thumbnail_url=thumbnail_url
        )

        for author_name in authors:
            author, created = Author.objects.get_or_create(name=author_name)
            book.authors.add(author)

        for category_name in categories:
            category, created = Category.objects.get_or_create(name=category_name)
            book.categories.add(category)

        book.save()

if __name__ == '__main__':
    search_term = 'python'
    data = fetch_books_data(search_term)
    populate_books(data)
