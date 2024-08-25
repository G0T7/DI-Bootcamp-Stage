from django.urls import path
from . import views

urlpatterns = [
    path('books/', views.list_books),
    path('books/<int:id>/', views.book_detail),
    path('books/create/', views.create_book),
    path('books/review/create/', views.create_review),
    path('books/review/edit/<int:id>/', views.edit_review),
    path('books/review/delete/<int:id>/', views.delete_review),
    path('likes/add/', views.add_like),
    path('likes/remove/<int:id>/', views.remove_like),
    path('top-books/', views.top_books),
    path('active-users/', views.active_users),
    path('search-books/', views.search_books),
]
