from django.contrib import admin
from .models import Teacher, Course, SchoolFacility, Laboratory

admin.site.register(Teacher)
admin.site.register(Course)
admin.site.register(SchoolFacility)
admin.site.register(Laboratory)
