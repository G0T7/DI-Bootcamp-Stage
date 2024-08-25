from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from .models import BookReview, Book
from django.contrib.auth.decorators import login_required
import json

def list_books(request):
    books = Book.objects.all()
    books_list = list(books.values())
    return JsonResponse(books_list, safe=False)

def book_detail(request, id):
    book = get_object_or_404(Book, id=id)
    book_data = {
        'title': book.title,
        'authors': [author.name for author in book.authors.all()],
        'published_date': book.published_date,
        'description': book.description,
        'page_count': book.page_count,
        'categories': [category.name for category in book.categories.all()],
        'thumbnail_url': book.thumbnail_url,
    }
    return JsonResponse(book_data)

@csrf_exempt
def create_book(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        book = Book.objects.create(
            title=data['title'],
            published_date=data['published_date'],
            description=data['description'],
            page_count=data['page_count'],
            thumbnail_url=data['thumbnail_url']
        )
        book.authors.set(data['authors'])
        book.categories.set(data['categories'])
        book.save()
        book_data = {
            'id': book.id,
            'title': book.title,
            'published_date': book.published_date,
            'description': book.description,
            'page_count': book.page_count,
            'thumbnail_url': book.thumbnail_url,
        }
        return JsonResponse(book_data)

@login_required
@csrf_exempt
def create_review(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        book = get_object_or_404(Book, id=data['book_id'])
        review = BookReview.objects.create(
            book=book,
            user=request.user,
            rating=data['rating'],
            review_text=data['review_text']
        )
        return JsonResponse({'id': review.id, 'review_text': review.review_text})

@login_required
@csrf_exempt
def edit_review(request, id):
    review = get_object_or_404(BookReview, id=id)
    if request.method == 'POST':
        data = json.loads(request.body)
        review.rating = data['rating']
        review.review_text = data['review_text']
        review.save()
        return JsonResponse({'id': review.id, 'review_text': review.review_text})

@login_required
@csrf_exempt
def delete_review(request, id):
    review = get_object_or_404(BookReview, id=id)
    review.delete()
    return JsonResponse({'id': id, 'status': 'deleted'})
