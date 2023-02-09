from django.urls import path
from . import views


urlpatterns = [
    path('upcoming-event/', views.getEvents, name='Events'),

    path('images/', views.getImages, name='image'),
    
    path('attendance/', views.getAttenances, name='Leaves'),
    path('attendance/filter/', views.getFilteredAttenances.as_view(), name='Leaves'),
    path('attendance/<str:id>', views.getIndAttenances, name='Individual Leaves'),

    path('leave-request/', views.getLeaves, name='Leaves'),
    path('leave-request/<str:id>', views.getIndLeaves, name='Individual Leaves'),
    path('<user>/leave-request/', views.getEmployeeLeave, name='Employee Leaves'),

    path('req-pay-slip/', views.getReqPaySlips, name='PaySlip Requests'),
    path('req-pay-slip/<str:id>', views.getReqPaySlip,
         name='Individual PaySlip Request'),

    path('pay-slip/', views.getPaySlips, name='PaySlips'),
    path('pay-slip/<str:id>', views.getIndPaySlip, name='Individual PaySlip'),
    path('<user>/pay-slip/', views.getEmployeePaySlip,
         name='Employee PaySlips'),

    path('holiday/', views.getHolidays, name='Holidays'),

    path('intern-compelete/', views.getInternCompeletes,
         name='All InternComepeletes'),
    path('intern-compelete/<user>', views.getEmployeeInternCompelete,
         name='Employee InternComepeletes'),

    path('relieving-letter/', views.getRelievings,
         name='All InternComepeletes'),
    path('relieving-letter/<user>', views.getEmployeeRelieving,
         name='Employee InternComepeletes'),
]
