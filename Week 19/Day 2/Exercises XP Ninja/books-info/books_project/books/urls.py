from django.urls import path
from . import views

urlpatterns = [
    path('books/', views.list_books),
    path('books/<int:id>/', views.book_detail),
    path('books/create/', views.create_book),
    path('books/review/create/', views.create_review),
    path('books/review/edit/<int:id>/', views.edit_review),
    path('books/review/delete/<int:id>/', views.delete_review),
]
