from django.test import Client, TestCase
from django.urls import reverse
from .models import Student

class StudentListViewTest(TestCase):
    def setUp(self):
        self.client = Client()
        # Create test data
        Student.objects.create(name='John Doe', date_joined='2023-09-22')

    def test_student_list_view(self):
        response = self.client.get(
            reverse('student-list') + '?date_joined=2023-09-22',
            HTTP_HOST='testserver'
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response['Content-Type'], 'application/json')
        data = response.json()
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['name'], 'John Doe')
