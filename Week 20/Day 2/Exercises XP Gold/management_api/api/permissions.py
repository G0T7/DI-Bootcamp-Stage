from rest_framework.permissions import BasePermission

class IsDepartmentAdmin(BasePermission):
    def has_object_permission(self, request, view, obj):
        # Check if the user is a department administrator
        return request.user.is_authenticated and request.user.is_department_admin
