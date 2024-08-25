from django.urls import path
from .views import course_details, TeacherList, SchoolFacilityList, LaboratoryList

urlpatterns = [
    path('course/<int:id>/', course_details, name='course_details'),
    path('teachers/', TeacherList.as_view(), name='teacher_list'),
    path('facilities/', SchoolFacilityList.as_view(), name='school_facility_list'),
    path('laboratories/', LaboratoryList.as_view(), name='laboratory_list'),
]
