from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.db.models import Avg
from .models import BookReview, Book

@receiver(post_save, sender=BookReview)
@receiver(post_delete, sender=BookReview)
def update_book_rating(sender, instance, **kwargs):
    book = instance.book
    avg_rating = book.reviews.aggregate(Avg('rating'))['rating__avg'] or 0
    book.average_rating = avg_rating
    book.save()
