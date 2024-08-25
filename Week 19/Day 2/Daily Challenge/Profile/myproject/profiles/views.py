from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Profile

@csrf_exempt
def create_profile(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        profile = Profile.objects.create(name=name, email=email)
        return JsonResponse({'success': True, 'profile_id': profile.id})

@csrf_exempt
def delete_profile(request, id):
    try:
        profile = Profile.objects.get(id=id)
        profile.delete()
        return JsonResponse({'success': True})
    except Profile.DoesNotExist:
        return JsonResponse({'success': False, 'error': 'Profile not found'})
