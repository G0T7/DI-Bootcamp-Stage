from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    date_joined = models.DateField()

    def __str__(self):
        return self.name
