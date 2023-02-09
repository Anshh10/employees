from rest_framework import status
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

from base.models import attendance, event, leave, holiday, internCompelete, paySlip, relieving, reqPaySlip, image
from base.serializers import PaySlipSerializer, AttendanceSerializer, EventSerializer, LeaveSerializer, HolidaySerializer, InternCompeleteSerializer, RelievingSerializer, ReqPaySlipSerializer, ImageSerializer


# Images
@api_view(['GET', 'POST'])
def getImages(request):
    if request.method == 'GET':
        response = image.objects.all()
        serializer = ImageSerializer(response, many=True)

        return Response(serializer.data)


# Requests Pay Slips
@api_view(['GET', 'POST'])
def getReqPaySlips(request):
    if request.method == 'GET':
        response = reqPaySlip.objects.all()
        serializer = ReqPaySlipSerializer(response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ReqPaySlipSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getReqPaySlip(request, id):
    try:
        reponse = reqPaySlip.objects.get(
            id=id)
    except leave.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ReqPaySlipSerializer(
            reponse, many=False)

        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ReqPaySlipSerializer(
            reponse, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Pay Slips


@api_view(['GET', 'POST'])
def getPaySlips(request):
    if request.method == 'GET':
        response = paySlip.objects.all()
        serializer = PaySlipSerializer(response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PaySlipSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getIndPaySlip(request, id):
    try:
        reponse = paySlip.objects.get(
            id=id)
    except leave.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PaySlipSerializer(
            reponse, many=False)

        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PaySlipSerializer(
            reponse, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getEmployeePaySlip(request, user):
    if request.method == 'GET':
        response = paySlip.objects.filter(user=user)
        serializer = PaySlipSerializer(response, many=True)

        return Response(serializer.data)


# Attendance
@api_view(['GET', 'POST'])
def getAttenances(request):
    if request.method == 'GET':
        response = attendance.objects.all()
        serializer = AttendanceSerializer(response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AttendanceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getIndAttenances(request, id):
    try:
        reponse = attendance.objects.get(
            id=id)
    except leave.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AttendanceSerializer(
            reponse, many=False)

        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = AttendanceSerializer(
            reponse, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class getFilteredAttenances(generics.ListAPIView):
    queryset = attendance.objects.all()
    serializer_class = AttendanceSerializer
    filter_backend = [DjangoFilterBackend]
    filterset_fields = ['date', 'userName', 'month']


@api_view(['GET', 'POST'])
def getEvents(request):
    if request.method == 'GET':
        response = event.objects.all()
        serializer = EventSerializer(response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getEvent(request, pk):
    if request.method == 'GET':
        response = event.objects.get(id=pk)
        serializer = EventSerializer(response, many=False)

        return Response(serializer.data)


#  Employee Leave Request
@api_view(['GET', 'POST'])
def getLeaves(request):
    if request.method == 'GET':
        response = leave.objects.all()
        serializer = LeaveSerializer(response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = LeaveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def getIndLeaves(request, id):
    try:
        reponse = leave.objects.get(
            id=id)
    except leave.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = LeaveSerializer(
            reponse, many=False)

        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = LeaveSerializer(
            reponse, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getEmployeeLeave(request, user):
    if request.method == 'GET':
        response = leave.objects.filter(user=user)
        serializer = LeaveSerializer(response, many=True)

        return Response(serializer.data)


# Holidays
@api_view(['GET', 'POST'])
def getHolidays(request):
    if request.method == 'GET':
        response = holiday.objects.all()
        serializer = HolidaySerializer(response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = HolidaySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#  Internship Complete
@api_view(['GET', 'POST'])
def getInternCompeletes(request):
    if request.method == 'GET':
        response = internCompelete.objects.all()
        serializer = InternCompeleteSerializer(response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = InternCompeleteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getEmployeeInternCompelete(request, user):
    if request.method == 'GET':
        response = internCompelete.objects.get(user=user)
        serializer = InternCompeleteSerializer(response, many=False)

        return Response(serializer.data)


# Relieving Letter
@api_view(['GET', 'POST'])
def getRelievings(request):
    if request.method == 'GET':
        response = relieving.objects.all()
        serializer = RelievingSerializer(response, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RelievingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getEmployeeRelieving(request, user):
    if request.method == 'GET':
        response = relieving.objects.get(user=user)
        serializer = RelievingSerializer(response, many=False)

        return Response(serializer.data)
