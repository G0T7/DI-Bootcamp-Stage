from rest_framework import mixins
from .models import Student
from .serializers import StudentSerializer

class StudentOperationsMixin(mixins.RetrieveModelMixin, mixins.ListModelMixin):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
