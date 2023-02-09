from rest_framework import serializers
from base.models import attendance, event, leave, holiday, internCompelete, paySlip, relieving, reqPaySlip, image


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = image
        fields = '__all__'


class ReqPaySlipSerializer(serializers.ModelSerializer):
    class Meta:
        model = reqPaySlip
        fields = '__all__'


class RelievingSerializer(serializers.ModelSerializer):
    class Meta:
        model = relieving
        fields = '__all__'


class PaySlipSerializer(serializers.ModelSerializer):
    class Meta:
        model = paySlip
        fields = '__all__'


class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = attendance
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = event
        fields = '__all__'


class LeaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = leave
        fields = '__all__'


class HolidaySerializer(serializers.ModelSerializer):
    class Meta:
        model = holiday
        fields = '__all__'


class InternCompeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = internCompelete
        fields = '__all__'
