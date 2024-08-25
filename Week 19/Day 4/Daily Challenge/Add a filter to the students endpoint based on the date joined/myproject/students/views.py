from rest_framework.generics import GenericAPIView
from rest_framework import status
from rest_framework.response import Response
from .models import Student
from .serializers import StudentSerializer
from .mixins import StudentOperationsMixin

class StudentList(StudentOperationsMixin, GenericAPIView):
    def get(self, request, *args, **kwargs):
        date_joined_param = request.GET.get('date_joined')
        if date_joined_param:
            students = Student.objects.filter(date_joined=date_joined_param)
        else:
            students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentDetail(StudentOperationsMixin, GenericAPIView):
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        student = self.get_object()
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        student = self.get_object()
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
