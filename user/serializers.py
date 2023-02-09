from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from user.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['employeeId', 'crtDate', 'first_name', 'last_name', 'gender', 'dob', 'age', 'bldGrp', 'marital', 'email', 'mobile', 'altMobile', 'religion', 'aadhar', 'address',
                  'fatherName', 'motherName', 'spouseName', 'edu1', 'edu1Board', 'edu1Marks', 'edu1PassYear', 'edu1Stream', 'edu1Grade', 'edu2', 'edu2Board', 'edu2Marks',
                  'edu2PassYear', 'edu2Stream', 'edu2Grade', 'edu3', 'edu3Board', 'edu3Marks', 'edu3PassYear', 'edu3Stream', 'edu3Grade', 'edu4', 'edu4Board', 'edu4Marks',
                  'edu4PassYear', 'edu4Stream', 'edu4Grade', 'exp1Employer', 'exp1FromDate', 'exp1ToDate', 'exp1Years', 'exp2Employer', 'exp2FromDate', 'exp2ToDate',
                  'exp2Years', 'exp3Employer', 'exp3FromDate', 'exp3ToDate', 'exp3Years', 'exp4Employer', 'exp4FromDate', 'exp4ToDate', 'exp4Years', 'bankName',
                  'bankAccName', 'bankAccNum', 'bankIfsc', 'bankBranch', 'joinDate', 'jobRole', 'jobType', 'shiftTime', 'company', 'branch',
                  'accessGroup', 'salary', 'pfNum', 'panNum', 'signBy']


class CrtUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['employeeId', 'crtDate', 'first_name', 'last_name', 'gender', 'dob', 'age', 'bldGrp', 'marital', 'email', 'mobile', 'altMobile', 'religion', 'aadhar', 'address',
                  'fatherName', 'motherName', 'spouseName', 'edu1', 'edu1Board', 'edu1Marks', 'edu1PassYear', 'edu1Stream', 'edu1Grade', 'edu2', 'edu2Board', 'edu2Marks',
                  'edu2PassYear', 'edu2Stream', 'edu2Grade', 'edu3', 'edu3Board', 'edu3Marks', 'edu3PassYear', 'edu3Stream', 'edu3Grade', 'edu4', 'edu4Board', 'edu4Marks',
                  'edu4PassYear', 'edu4Stream', 'edu4Grade', 'exp1Employer', 'exp1FromDate', 'exp1ToDate', 'exp1Years', 'exp2Employer', 'exp2FromDate', 'exp2ToDate',
                  'exp2Years', 'exp3Employer', 'exp3FromDate', 'exp3ToDate', 'exp3Years', 'exp4Employer', 'exp4FromDate', 'exp4ToDate', 'exp4Years', 'bankName',
                  'bankAccName', 'bankAccNum', 'bankIfsc', 'bankBranch', 'joinDate', 'jobRole', 'jobType', 'shiftTime', 'company', 'branch',
                  'accessGroup', 'salary', 'pfNum', 'panNum', 'is_staff', 'is_active', 'password', 'signBy']
        extra_kwargs = {
            # 'password': {'write_only': True}
        }

        # def create(self, validated_data):
        #     user = super(CrtUserSerializer, self).create(validated_data)
        #     user.set_password(validated_data['password'])
        #     user.save()
        #     return user

        # def create(self, validated_data):
        #     user = User.objects.create_user(
        #         validated_data['employeeId'], None, validated_data['password'],
        #         validated_data['first_name'],
        #         validated_data['last_name'],
        #         validated_data['gender'],
        #         validated_data['dob'],
        #         validated_data['age'],
        #         validated_data['bldGrp'],
        #         validated_data['marital'],
        #         validated_data['email'],
        #         validated_data['mobile'],
        #         validated_data['altMobile'],
        #         validated_data['religion'],
        #         validated_data['aadhar'],
        #         validated_data['address'],
        #         validated_data['fatherName'],
        #         validated_data['motherName'],
        #         validated_data['spouseName'],
        #         validated_data['edu1'],
        #         validated_data['edu1Board'],
        #         validated_data['edu1Marks'],
        #         validated_data['edu1PassYear'],
        #         validated_data['edu1Stream'],
        #         validated_data['edu1Grade'],
        #         validated_data['edu2'],
        #         validated_data['edu2Board'],
        #         validated_data['edu2Marks'],
        #         validated_data['edu2PassYear'],
        #         validated_data['edu2Stream'],
        #         validated_data['edu2Grade'],
        #         validated_data['edu3'],
        #         validated_data['edu3Board'],
        #         validated_data['edu3Marks'],
        #         validated_data['edu3PassYear'],
        #         validated_data['edu3Stream'],
        #         validated_data['edu3Grade'],
        #         validated_data['edu4'],
        #         validated_data['edu4Board'],
        #         validated_data['edu4Marks'],
        #         validated_data['edu4PassYear'],
        #         validated_data['edu4Stream'],
        #         validated_data['edu4Grade'],
        #         validated_data['exp1Employer'],
        #         validated_data['exp1FromDate'],
        #         validated_data['exp1ToDate'],
        #         validated_data['exp1Years'],
        #         validated_data['exp2Employer'],
        #         validated_data['exp2FromDate'],
        #         validated_data['exp2ToDate'],
        #         validated_data['exp2Years'],
        #         validated_data['exp3Employer'],
        #         validated_data['exp3FromDate'],
        #         validated_data['exp3ToDate'],
        #         validated_data['exp3Years'],
        #         validated_data['exp4Employer'],
        #         validated_data['exp4FromDate'],
        #         validated_data['exp4ToDate'],
        #         validated_data['exp4Years'],
        #         validated_data['bankName'],
        #         validated_data['bankAccName'],
        #         validated_data['bankAccNum'],
        #         validated_data['bankIfsc'],
        #         validated_data['bankBranch'],
        #         validated_data['joinDate'],
        #         validated_data['jobRole'],
        #         validated_data['jobType'],
        #         validated_data['shiftTime'],
        #         validated_data['company'],
        #         validated_data['branch'],
        #         validated_data['accessGroup'],
        #         validated_data['salary'],
        #         validated_data['pfNum'],
        #         validated_data['panNum'],
        #         validated_data['is_staff'],
        #         validated_data['is_active'],
        #         validated_data['signBy'],)
        #     password = self.validated_data['password']
        #     user.set_password(password)
        #     user.save()
        #     return user


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['employeeId'] = user.employeeId
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['jobRole'] = user.jobRole
        token['company'] = user.company
        token['accessGroup'] = user.accessGroup

        return token
