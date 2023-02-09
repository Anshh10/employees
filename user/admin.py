from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin


class UserAdminConfig(UserAdmin):
    fieldsets = (
        (None, {'fields': ('employeeId',  'accessGroup', 'first_name', 'last_name', 'gender', 'dob', 'age', 'bldGrp', 'marital', 'email', 'mobile', 'altMobile', 'religion', 'aadhar', 'address',
                           'fatherName', 'motherName', 'spouseName', 'edu1', 'edu1Board', 'edu1Marks', 'edu1PassYear', 'edu1Stream', 'edu1Grade', 'edu2', 'edu2Board', 'edu2Marks',
                           'edu2PassYear', 'edu2Stream', 'edu2Grade', 'edu3', 'edu3Board', 'edu3Marks', 'edu3PassYear', 'edu3Stream', 'edu3Grade', 'edu4', 'edu4Board', 'edu4Marks',
                           'edu4PassYear', 'edu4Stream', 'edu4Grade', 'exp1Employer', 'exp1FromDate', 'exp1ToDate', 'exp1Years', 'exp2Employer', 'exp2FromDate', 'exp2ToDate',
                           'exp2Years', 'exp3Employer', 'exp3FromDate', 'exp3ToDate', 'exp3Years', 'exp4Employer', 'exp4FromDate', 'exp4ToDate', 'exp4Years', 'bankName',
                           'bankAccName', 'bankAccNum', 'bankIfsc', 'bankBranch', 'joinDate', 'jobRole', 'jobType', 'shiftTime', 'company', 'branch',
                           'salary', 'pfNum', 'panNum', 'signBy', 'password', )}),
        ('Permissions', {
         'fields': ('is_staff', 'is_active', 'is_superuser')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('employeeId', 'accessGroup', 'password1', 'password2', 'first_name', 'last_name', 'gender', 'dob', 'age', 'bldGrp', 'marital', 'email', 'mobile', 'altMobile', 'religion', 'aadhar', 'address',
                       'fatherName', 'motherName', 'spouseName', 'edu1', 'edu1Board', 'edu1Marks', 'edu1PassYear', 'edu1Stream', 'edu1Grade', 'edu2', 'edu2Board', 'edu2Marks',
                       'edu2PassYear', 'edu2Stream', 'edu2Grade', 'edu3', 'edu3Board', 'edu3Marks', 'edu3PassYear', 'edu3Stream', 'edu3Grade', 'edu4', 'edu4Board', 'edu4Marks',
                       'edu4PassYear', 'edu4Stream', 'edu4Grade', 'exp1Employer', 'exp1FromDate', 'exp1ToDate', 'exp1Years', 'exp2Employer', 'exp2FromDate', 'exp2ToDate',
                       'exp2Years', 'exp3Employer', 'exp3FromDate', 'exp3ToDate', 'exp3Years', 'exp4Employer', 'exp4FromDate', 'exp4ToDate', 'exp4Years', 'bankName',
                       'bankAccName', 'bankAccNum', 'bankIfsc', 'bankBranch', 'joinDate', 'jobRole', 'jobType', 'shiftTime', 'company', 'branch',
                       'salary', 'pfNum', 'panNum', 'signBy', 'is_staff', 'is_active', 'is_superuser',)}),
    )

    search_fields = ('employeeId', 'first_name', 'last_name',
                     'email',   'accessGroup',)
    list_filter = (
        'accessGroup', 'branch', 'is_staff', 'is_active', 'jobType', 'jobRole')
    ordering = ()
    list_display = ('employeeId', 'branch', 'first_name', 'last_name',
                    'email',  'accessGroup', 'jobRole')


admin.site.register(User, UserAdminConfig)
