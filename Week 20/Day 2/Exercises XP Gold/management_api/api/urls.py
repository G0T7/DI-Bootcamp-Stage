from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import DepartmentViewSet, EmployeeViewSet, ProjectViewSet
from .views import DepartmentListView, DepartmentCreateView, EmployeeListView, EmployeeCreateView, TaskRetrieveView, TaskUpdateView

router = DefaultRouter()
router.register(r'departments', DepartmentViewSet)
router.register(r'employees', EmployeeViewSet)
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('departments/', DepartmentListView.as_view(), name='department-list-create'),
    path('departments/create/', DepartmentCreateView.as_view(), name='department-create'),
    path('employees/', EmployeeListView.as_view(), name='employee-list-create'),
    path('employees/create/', EmployeeCreateView.as_view(), name='employee-create'),
    path('tasks/<int:pk>/', TaskRetrieveView.as_view(), name='task-retrieve'),
    path('tasks/<int:pk>/update/', TaskUpdateView.as_view(), name='task-update'),
]
