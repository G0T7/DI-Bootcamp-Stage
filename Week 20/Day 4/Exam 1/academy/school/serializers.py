from rest_framework import serializers
from .models import Teacher, Course, SchoolFacility, Laboratory

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class SchoolFacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = SchoolFacility
        fields = '__all__'

class LaboratorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Laboratory
        fields = '__all__'
