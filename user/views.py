from user.models import User
from user.serializers import UserSerializer, MyTokenObtainPairSerializer, CrtUserSerializer

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework import generics
from django.contrib.auth.hashers import make_password
from rest_framework.permissions import AllowAny


@api_view(['GET', 'POST'])
def getUsers(request):
    if request.method == 'GET':
        user = User.objects.all()
        serializer = UserSerializer(user, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET', 'POST'])
# def crtUsers(request):
#     if request.method == 'POST':
#         serializer = CrtUserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()

#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class crtUsers(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = (AllowAny,)


class crtUsers(APIView):
    def post(self, request):
        serializer = CrtUserSerializer(data=request.data)
        if serializer.is_valid():
            password = serializer.validated_data.get('password')
            serializer.validated_data['password'] = make_password(password)
            new_user = serializer.save()
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getUser(request, employeeId):
    try:
        user = User.objects.get(employeeId=employeeId)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user, many=False)

        return Response(serializer.data)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
