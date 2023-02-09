from django.urls import path
from . import views

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('list/', views.getUsers, name='users-list'),
    path('create/', views.crtUsers.as_view(), name='user-create'),
    path('user/<str:employeeId>', views.getUser, name='users-details'),

    path('login/jwt-token/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('login/jwt-token/refresh/',
         TokenRefreshView.as_view(), name='token_refresh'),
]
