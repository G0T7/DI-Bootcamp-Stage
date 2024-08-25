from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .models import Course, Teacher, SchoolFacility, Laboratory
from .serializers import TeacherSerializer, SchoolFacilitySerializer, LaboratorySerializer

def course_details(request, id):
    course = get_object_or_404(Course, id=id)
    data = {
        "course_name": course.course_name,
        "course_code": course.course_code,
        "teachers": [teacher.name for teacher in course.teachers.all()]
    }
    return JsonResponse(data)

class TeacherList(APIView):
    def get(self, request):
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        return Response(serializer.data)

class SchoolFacilityList(generics.ListCreateAPIView):
    queryset = SchoolFacility.objects.all()
    serializer_class = SchoolFacilitySerializer

class LaboratoryList(generics.ListCreateAPIView):
    queryset = Laboratory.objects.all()
    serializer_class = LaboratorySerializer
