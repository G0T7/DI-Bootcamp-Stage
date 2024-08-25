from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Card, User
from .serializers import CardSerializer, UserSerializer

class CardListView(APIView):
    def get(self, request):
        cards = Card.objects.all()
        serializer = CardSerializer(cards, many=True)
        return Response(serializer.data)

class CardDetailView(APIView):
    def get(self, request, card_id):
        card = get_object_or_404(Card, id=card_id)
        serializer = CardSerializer(card)
        return Response(serializer.data)

class UserProfileView(APIView):
    def get(self, request, user_id):
        user = get_object_or_404(User, id=user_id)
        serializer = UserSerializer(user)
        return Response(serializer.data)

class BuyCardView(APIView):
    def post(self, request, card_id, user_id):
        card = get_object_or_404(Card, id=card_id)
        user = get_object_or_404(User, id=user_id)

        if user.amount_of_money >= card.price:
            user.amount_of_money -= card.price
            card.previous_owner = card.current_owner
            card.current_owner = user
            user.save()
            card.save()
            return Response({'status': 'success', 'message': 'Card bought successfully'})
        return Response({'status': 'error', 'message': 'Insufficient funds'}, status=status.HTTP_400_BAD_REQUEST)

class SellCardView(APIView):
    def post(self, request, card_id, user_id):
        card = get_object_or_404(Card, id=card_id)
        user = get_object_or_404(User, id=user_id)

        if card.current_owner == user:
            user.amount_of_money += card.price
            card.previous_owner = card.current_owner
            card.current_owner = None
            user.save()
            card.save()
            return Response({'status': 'success', 'message': 'Card sold successfully'})
        return Response({'status': 'error', 'message': 'You do not own this card'}, status=status.HTTP_400_BAD_REQUEST)

class UserDetailView(APIView):
    def get(self, request, user_id):
        user = get_object_or_404(User, id=user_id)
        serializer = UserSerializer(user)
        return Response(serializer.data)
