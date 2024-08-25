# game/views.py

from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import GameScore, UserProfile
from .serializers import GameScoreSerializer, UserProfileSerializer, UserSerializer
from django.contrib.auth import authenticate
from .ai import SnakeAI
from django.http import HttpResponse

# Home view for the root URL
def home_view(request):
    return HttpResponse("Welcome to the Snake Game!")

# ViewSets for API endpoints
class GameScoreViewSet(viewsets.ModelViewSet):
    queryset = GameScore.objects.all().order_by('-score')
    serializer_class = GameScoreSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# API Views
@api_view(['POST'])
@permission_classes([AllowAny])
def signup_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')
    
    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
    
    if User.objects.filter(email=email).exists():
        return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)
    
    user = User.objects.create_user(username=username, password=password, email=email)
    UserProfile.objects.create(user=user)
    token, created = Token.objects.get_or_create(user=user)
    
    return Response({"username": username, "token": token.key}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key})
    else:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def user_profile_view(request):
    user = request.user
    if request.method == 'GET':
        try:
            profile = UserProfile.objects.get(user=user)
            serializer = UserProfileSerializer(profile)
            return Response(serializer.data)
        except UserProfile.DoesNotExist:
            return Response({"error": "Profile not found"}, status=status.HTTP_404_NOT_FOUND)
    elif request.method == 'PUT':
        data = request.data
        user.username = data.get('username', user.username)
        user.email = data.get('email', user.email)
        if data.get('password'):
            user.set_password(data.get('password'))
        user.save()
        profile = UserProfile.objects.get(user=user)
        profile.avatar = data.get('avatar', profile.avatar)
        profile.save()
        return Response({"message": "Profile updated successfully"})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def leaderboard_view(request):
    scores = GameScore.objects.all().order_by('-score')
    serializer = GameScoreSerializer(scores, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def submit_score(request):
    user = request.user
    score = request.data.get('score')
    if score is not None:
        GameScore.objects.create(user=user, score=score)
        return Response({"message": "Score submitted successfully"}, status=status.HTTP_201_CREATED)
    return Response({"error": "Invalid score"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def ai_move(request):
    data = request.data
    board_size = data.get('board_size')
    snake_position = data.get('snake_position')
    food_position = data.get('food_position')
    
    ai = SnakeAI(board_size, snake_position, food_position)
    next_move = ai.get_next_move()
    
    return Response({'move': next_move})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def start_game(request):
    # Placeholder for game start logic
    return Response({'status': 'Game started'})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def restart_game_view(request):
    # Placeholder for game restart logic
    return Response({'status': 'Game restarted'})
