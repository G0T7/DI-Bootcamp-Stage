from django.db import models
from django.core.exceptions import ValidationError
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

class Author(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=50)

    def clean(self):
        if 'sunny' == self.name:
            raise ValidationError(f"Can't have 'sunny' in category name")

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=200)
    authors = models.ManyToManyField(Author)
    categories = models.ManyToManyField(Category)
    published_date = models.DateField()
    description = models.TextField()
    page_count = models.IntegerField()
    thumbnail_url = models.URLField(blank=True)

    def __str__(self):
        return self.title

class BookReview(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    review_text = models.TextField()

    def __str__(self):
        return f"{self.user.username} - {self.book.title}"
