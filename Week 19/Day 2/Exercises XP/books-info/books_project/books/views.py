from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.db.models import Avg, Count
from .models import BookReview, Book, Like
import json

def list_books(request):
    books = Book.objects.annotate(avg_rating=Avg('reviews__rating')).order_by('-avg_rating')
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
        'average_rating': book.average_rating,
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

@login_required
@csrf_exempt
def add_like(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        review = get_object_or_404(BookReview, id=data['review_id'])
        like, created = Like.objects.get_or_create(user=request.user, review=review)
        if created:
            return JsonResponse({'status': 'liked'})
        else:
            return JsonResponse({'status': 'already liked'})

@login_required
@csrf_exempt
def remove_like(request, id):
    like = get_object_or_404(Like, id=id, user=request.user)
    like.delete()
    return JsonResponse({'status': 'unliked'})

def top_books(request):
    books = Book.objects.annotate(avg_rating=Avg('reviews__rating')).order_by('-avg_rating')
    books_list = list(books.values())
    return JsonResponse(books_list, safe=False)

def active_users(request):
    users = User.objects.annotate(num_reviews=Count('bookreview')).order_by('-num_reviews')
    users_list = list(users.values())
    return JsonResponse(users_list, safe=False)

def search_books(request):
    query = request.GET.get('q', '')
    books = Book.objects.filter(
        models.Q(title__icontains=query) |
        models.Q(authors__name__icontains=query) |
        models.Q(categories__name__icontains=query)
    ).distinct()
    books_list = list(books.values())
    return JsonResponse(books_list, safe=False)
