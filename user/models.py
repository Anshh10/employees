from django.db import models
from django.contrib.auth.models import User, AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _
from django.utils import timezone


class CustomUserManager(BaseUserManager):
    def create_user(self, employeeId, crtDate, first_name, last_name, gender, dob, age, bldGrp, marital, email, mobile, altMobile, religion, aadhar, address, fatherName,
                    motherName, spouseName, edu1, edu1Board, edu1Marks, edu1PassYear, edu1Stream, edu1Grade, edu2, edu2Board, edu2Marks, edu2PassYear, edu2Stream,
                    edu2Grade, edu3, edu3Board, edu3Marks, edu3PassYear, edu3Stream, edu3Grade, edu4, edu4Board, edu4Marks, edu4PassYear, edu4Stream, edu4Grade, exp1Employer,
                    exp1FromDate, exp1ToDate, exp1Years, exp2Employer, exp2FromDate, exp2ToDate, exp2Years, exp3Employer, exp3FromDate, exp3ToDate, exp3Years, exp4Employer,
                    exp4FromDate, exp4ToDate, exp4Years, bankName, bankAccName, bankAccNum, bankIfsc, bankBranch, joinDate, jobRole, jobType, shiftTime, company, branch,
                    accessGroup, salary, pfNum, panNum, signBy, password, **other_fields):

        if not email:
            raise ValueError(_('You must provide an Email Address!'))
        email = self.normalize_email(email)
        user = self.model(employeeId=employeeId, crtDate=crtDate, first_name=first_name, last_name=last_name, gender=gender, dob=dob, age=age, bldGrp=bldGrp, marital=marital,
                          email=email, mobile=mobile, altMobile=altMobile, religion=religion, aadhar=aadhar, address=address, fatherName=fatherName, motherName=motherName,
                          spouseName=spouseName, edu1=edu1, edu1Board=edu1Board, edu1Marks=edu1Marks, edu1PassYear=edu1PassYear, edu1Stream=edu1Stream, edu1Grade=edu1Grade,
                          edu2=edu2, edu2Board=edu2Board, edu2Marks=edu2Marks, edu2PassYear=edu2PassYear, edu2Stream=edu2Stream, edu2Grade=edu2Grade, edu3=edu3,
                          edu3Board=edu3Board, edu3Marks=edu3Marks, edu3PassYear=edu3PassYear, edu3Stream=edu3Stream, edu3Grade=edu3Grade, edu4=edu4, edu4Board=edu4Board,
                          edu4Marks=edu4Marks, edu4PassYear=edu4PassYear, edu4Stream=edu4Stream, edu4Grade=edu4Grade, exp1Employer=exp1Employer, exp1FromDate=exp1FromDate,
                          exp1ToDate=exp1ToDate, exp1Years=exp1Years, exp2Employer=exp2Employer, exp2FromDate=exp2FromDate, exp2ToDate=exp2ToDate, exp2Years=exp2Years,
                          exp3Employer=exp3Employer, exp3FromDate=exp3FromDate, exp3ToDate=exp3ToDate, exp3Years=exp3Years, exp4Employer=exp4Employer, exp4FromDate=exp4FromDate,
                          exp4ToDate=exp4ToDate, exp4Years=exp4Years, bankName=bankName, bankAccName=bankAccName, bankAccNum=bankAccNum, bankIfsc=bankIfsc,
                          bankBranch=bankBranch, joinDate=joinDate, jobRole=jobRole, jobType=jobType, shiftTime=shiftTime, company=company, branch=branch,
                          accessGroup=accessGroup, salary=salary, pfNum=pfNum, panNum=panNum, signBy=signBy, password=password, **other_fields)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, employeeId, crtDate, first_name, last_name, gender, dob, age, bldGrp, marital, email, mobile, altMobile, religion, aadhar, address, fatherName,
                         motherName, spouseName, edu1, edu1Board, edu1Marks, edu1PassYear, edu1Stream, edu1Grade, edu2, edu2Board, edu2Marks, edu2PassYear, edu2Stream,
                         edu2Grade, edu3, edu3Board, edu3Marks, edu3PassYear, edu3Stream, edu3Grade, edu4, edu4Board, edu4Marks, edu4PassYear, edu4Stream, edu4Grade, exp1Employer,
                         exp1FromDate, exp1ToDate, exp1Years, exp2Employer, exp2FromDate, exp2ToDate, exp2Years, exp3Employer, exp3FromDate, exp3ToDate, exp3Years, exp4Employer,
                         exp4FromDate, exp4ToDate, exp4Years, bankName, bankAccName, bankAccNum, bankIfsc, bankBranch, joinDate, jobRole, jobType, shiftTime, company, branch,
                         accessGroup, salary, pfNum, panNum, signBy, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be assigned to is_staff=True. ')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True. ')

        return self.create_user(employeeId, crtDate, first_name, last_name, gender, dob, age, bldGrp, marital, email, mobile, altMobile, religion, aadhar, address, fatherName,
                                motherName, spouseName, edu1, edu1Board, edu1Marks, edu1PassYear, edu1Stream, edu1Grade, edu2, edu2Board, edu2Marks, edu2PassYear, edu2Stream,
                                edu2Grade, edu3, edu3Board, edu3Marks, edu3PassYear, edu3Stream, edu3Grade, edu4, edu4Board, edu4Marks, edu4PassYear, edu4Stream, edu4Grade, exp1Employer,
                                exp1FromDate, exp1ToDate, exp1Years, exp2Employer, exp2FromDate, exp2ToDate, exp2Years, exp3Employer, exp3FromDate, exp3ToDate, exp3Years, exp4Employer,
                                exp4FromDate, exp4ToDate, exp4Years, bankName, bankAccName, bankAccNum, bankIfsc, bankBranch, joinDate, jobRole, jobType, shiftTime, company, branch,
                                accessGroup, salary, pfNum, panNum, signBy, password, **other_fields)


class User(AbstractBaseUser, PermissionsMixin):
    employeeId = models.CharField(
        primary_key=True, max_length=20, editable=True, unique=True)
    crtDate = models.DateField(auto_now_add=True)
    first_name = models.CharField(max_length=15, null=True, blank=True)
    last_name = models.CharField(max_length=15, null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True)
    dob = models.CharField(max_length=20, null=True, blank=True)
    age = models.CharField(max_length=5, null=True, blank=True)
    bldGrp = models.CharField(max_length=10, null=True, blank=True)
    marital = models.CharField(max_length=10, null=True, blank=True)
    email = models.EmailField(_('email address'), unique=False)
    mobile = models.CharField(max_length=15, null=True, blank=True)
    altMobile = models.CharField(max_length=15, null=True, blank=True)
    religion = models.CharField(max_length=20, null=True, blank=True)
    aadhar = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    fatherName = models.CharField(max_length=30, null=True, blank=True)
    motherName = models.CharField(max_length=30, null=True, blank=True)
    spouseName = models.CharField(max_length=30, null=True, blank=True)
    edu1 = models.CharField(max_length=30, null=True, blank=True)
    edu1Board = models.CharField(max_length=30, null=True, blank=True)
    edu1Marks = models.CharField(max_length=10, null=True, blank=True)
    edu1PassYear = models.CharField(max_length=10, null=True, blank=True)
    edu1Stream = models.CharField(max_length=20, null=True, blank=True)
    edu1Grade = models.CharField(max_length=10, null=True, blank=True)
    edu2 = models.CharField(max_length=30, null=True, blank=True)
    edu2Board = models.CharField(max_length=30, null=True, blank=True)
    edu2Marks = models.CharField(max_length=10, null=True, blank=True)
    edu2PassYear = models.CharField(max_length=10, null=True, blank=True)
    edu2Stream = models.CharField(max_length=20, null=True, blank=True)
    edu2Grade = models.CharField(max_length=10, null=True, blank=True)
    edu3 = models.CharField(max_length=30, null=True, blank=True)
    edu3Board = models.CharField(max_length=30, null=True, blank=True)
    edu3Marks = models.CharField(max_length=10, null=True, blank=True)
    edu3PassYear = models.CharField(max_length=10, null=True, blank=True)
    edu3Stream = models.CharField(max_length=20, null=True, blank=True)
    edu3Grade = models.CharField(max_length=10, null=True, blank=True)
    edu4 = models.CharField(max_length=30, null=True, blank=True)
    edu4Board = models.CharField(max_length=30, null=True, blank=True)
    edu4Marks = models.CharField(max_length=10, null=True, blank=True)
    edu4PassYear = models.CharField(max_length=10, null=True, blank=True)
    edu4Stream = models.CharField(max_length=20, null=True, blank=True)
    edu4Grade = models.CharField(max_length=10, null=True, blank=True)
    exp1Employer = models.CharField(max_length=20, null=True, blank=True)
    exp1FromDate = models.CharField(max_length=10, null=True, blank=True)
    exp1ToDate = models.CharField(max_length=10, null=True, blank=True)
    exp1Years = models.CharField(max_length=10, null=True, blank=True)
    exp2Employer = models.CharField(max_length=20, null=True, blank=True)
    exp2FromDate = models.CharField(max_length=10, null=True, blank=True)
    exp2ToDate = models.CharField(max_length=10, null=True, blank=True)
    exp2Years = models.CharField(max_length=10, null=True, blank=True)
    exp3Employer = models.CharField(max_length=20, null=True, blank=True)
    exp3FromDate = models.CharField(max_length=10, null=True, blank=True)
    exp3ToDate = models.CharField(max_length=10, null=True, blank=True)
    exp3Years = models.CharField(max_length=10, null=True, blank=True)
    exp4Employer = models.CharField(max_length=20, null=True, blank=True)
    exp4FromDate = models.CharField(max_length=10, null=True, blank=True)
    exp4ToDate = models.CharField(max_length=10, null=True, blank=True)
    exp4Years = models.CharField(max_length=10, null=True, blank=True)
    bankName = models.CharField(max_length=20, null=True, blank=True)
    bankAccName = models.CharField(max_length=30, null=True, blank=True)
    bankAccNum = models.CharField(max_length=20, null=True, blank=True)
    bankIfsc = models.CharField(max_length=15, null=True, blank=True)
    bankBranch = models.CharField(max_length=20, null=True, blank=True)
    joinDate = models.CharField(max_length=10, null=True, blank=True)
    jobRole = models.CharField(max_length=30, null=True, blank=True)
    jobType = models.CharField(max_length=20, null=True, blank=True)
    shiftTime = models.CharField(max_length=10, null=True, blank=True)
    company = models.CharField(max_length=100, null=True, blank=True)
    branch = models.CharField(max_length=50, null=True, blank=True)
    accessGroup = models.CharField(max_length=30, null=True, blank=True)
    salary = models.CharField(max_length=10, null=True, blank=True)
    pfNum = models.CharField(max_length=20, null=True, blank=True)
    panNum = models.CharField(max_length=20, null=True, blank=True)
    signBy = models.CharField(max_length=30, null=True, blank=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(
        auto_now_add=True, null=True, blank=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'employeeId'
    REQUIRED_FIELDS = ['crtDate', 'first_name', 'last_name', 'gender', 'dob', 'age', 'bldGrp', 'marital', 'email', 'mobile', 'altMobile', 'religion', 'aadhar', 'address',
                       'fatherName', 'motherName', 'spouseName', 'edu1', 'edu1Board', 'edu1Marks', 'edu1PassYear', 'edu1Stream', 'edu1Grade', 'edu2', 'edu2Board', 'edu2Marks',
                       'edu2PassYear', 'edu2Stream', 'edu2Grade', 'edu3', 'edu3Board', 'edu3Marks', 'edu3PassYear', 'edu3Stream', 'edu3Grade', 'edu4', 'edu4Board', 'edu4Marks',
                       'edu4PassYear', 'edu4Stream', 'edu4Grade', 'exp1Employer', 'exp1FromDate', 'exp1ToDate', 'exp1Years', 'exp2Employer', 'exp2FromDate', 'exp2ToDate',
                       'exp2Years', 'exp3Employer', 'exp3FromDate', 'exp3ToDate', 'exp3Years', 'exp4Employer', 'exp4FromDate', 'exp4ToDate', 'exp4Years', 'bankName',
                       'bankAccName', 'bankAccNum', 'bankIfsc', 'bankBranch', 'joinDate', 'jobRole', 'jobType', 'shiftTime', 'company', 'branch',
                       'accessGroup', 'salary', 'pfNum', 'panNum', 'signBy']

    def __str__(self):
        return self.employeeId
