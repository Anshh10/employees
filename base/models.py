from django.db import models
from user.models import User


# Create your models here.
class attendance(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.CharField(primary_key=True, max_length=30)
    locationPin = models.CharField(max_length=50, blank=True, null=True)
    date = models.DateField(auto_now_add=True)
    userName = models.CharField(max_length=100, blank=True, null=True)
    month = models.CharField(max_length=20, blank=True, null=True)
    inOffice = models.CharField(max_length=15, blank=True, null=True)
    inLunch = models.CharField(max_length=15, blank=True, null=True)
    inBreak1 = models.CharField(max_length=15, blank=True, null=True)
    inBreak2 = models.CharField(max_length=15, blank=True, null=True)
    inBreak3 = models.CharField(max_length=15, blank=True, null=True)
    officeIn = models.CharField(max_length=20, blank=True, null=True)
    officeOut = models.CharField(max_length=20, blank=True, null=True)
    lunchIn = models.CharField(max_length=20, blank=True, null=True)
    lunchOut = models.CharField(max_length=20, blank=True, null=True)
    break1In = models.CharField(max_length=20, blank=True, null=True)
    break1Out = models.CharField(max_length=20, blank=True, null=True)
    break2In = models.CharField(max_length=20, blank=True, null=True)
    break2Out = models.CharField(max_length=20, blank=True, null=True)
    break3In = models.CharField(max_length=20, blank=True, null=True)
    break3Out = models.CharField(max_length=20, blank=True, null=True)
    didOffice = models.CharField(max_length=15, blank=True, null=True)
    didLunch = models.CharField(max_length=15, blank=True, null=True)
    didBreak1 = models.CharField(max_length=15, blank=True, null=True)
    didBreak2 = models.CharField(max_length=15, blank=True, null=True)
    didBreak3 = models.CharField(max_length=15, blank=True, null=True)
    report = models.CharField(max_length=300, blank=True, null=True)

    # def __str__(self):
    #     return self.userName


class image(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    logo = models.ImageField(null=True, blank=True)
    letterHead = models.ImageField(null=True, blank=True)


class event(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    date = models.CharField(max_length=30, blank=True, null=True)
    time = models.CharField(max_length=10, blank=True, null=True)
    title = models.CharField(max_length=50, blank=True, null=True)
    body = models.CharField(max_length=300, blank=True, null=True)
    meetForhr = models.CharField(max_length=30, blank=True, null=True)
    meetForIT = models.CharField(max_length=30, blank=True, null=True)
    meetForSales = models.CharField(max_length=30, blank=True, null=True)
    meetForAccFin = models.CharField(max_length=30, blank=True, null=True)
    meetForBusiness = models.CharField(max_length=30, blank=True, null=True)

    def __str__(self):
        return self.title + str(self.date)


class leave(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    userName = models.CharField(max_length=50, blank=True, null=True)
    stDate = models.CharField(max_length=20, blank=True, null=True)
    endDate = models.CharField(max_length=20, blank=True, null=True)
    reason = models.CharField(max_length=200, blank=True, null=True)
    approval = models.CharField(max_length=10, blank=True, null=True)

    # def __str__(self):
    # return self.userName + str(self.stDate) + " to " + str(self.endDate)


class holiday(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    date = models.CharField(max_length=20, blank=True, null=True)
    reason = models.CharField(max_length=200, blank=True, null=True)

    def __str__(self):
        return str(self.reason) + str(self.date)


class internCompelete(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=30, blank=True, null=True)
    college = models.CharField(max_length=100, blank=True, null=True)
    branch = models.CharField(max_length=30, blank=True, null=True)
    jobRole = models.CharField(max_length=30, blank=True, null=True)
    titles = models.CharField(max_length=10, blank=True, null=True)
    regRoll = models.CharField(max_length=20, blank=True, null=True)
    rollNum = models.CharField(max_length=20, blank=True, null=True)
    company = models.CharField(max_length=50, blank=True, null=True)
    stDate = models.CharField(max_length=20, blank=True, null=True)
    endDate = models.CharField(max_length=20, blank=True, null=True)
    signBy = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return str(self.name) + str(self.jobRole)


class paySlip(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.CharField(primary_key=True, max_length=30, editable=True)
    name = models.CharField(max_length=20, blank=True, null=True)
    month = models.CharField(max_length=20, blank=True, null=True)
    year = models.CharField(max_length=10, blank=True, null=True)
    panNum = models.CharField(max_length=20, blank=True, null=True)
    jobRole = models.CharField(max_length=20, blank=True, null=True)
    pfNum = models.CharField(max_length=20, blank=True, null=True)
    location = models.CharField(max_length=20, blank=True, null=True)
    bankName = models.CharField(max_length=20, blank=True, null=True)
    shift = models.CharField(max_length=20, blank=True, null=True)
    accNum = models.CharField(max_length=20, blank=True, null=True)
    joinDate = models.CharField(max_length=20, blank=True, null=True)
    lopDays = models.CharField(max_length=20, blank=True, null=True)
    paBasic = models.IntegerField(blank=True, null=True)
    paHRA = models.IntegerField(blank=True, null=True)
    paConveyance = models.IntegerField(blank=True, null=True)
    paTelephone = models.IntegerField(blank=True, null=True)
    paOtherAllowance = models.IntegerField(blank=True, null=True)
    pdTds = models.IntegerField(blank=True, null=True)
    pdLop = models.IntegerField(blank=True, null=True)
    pdPf = models.IntegerField(blank=True, null=True)
    pdEsi = models.IntegerField(blank=True, null=True)
    pdOtherDeductions = models.IntegerField(blank=True, null=True)
    pTotalPaid = models.IntegerField(blank=True, null=True)
    pTotalDeducted = models.IntegerField(blank=True, null=True)
    pNetEarnings = models.IntegerField(blank=True, null=True)
    pStipend = models.IntegerField(blank=True, null=True)


class relieving(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=30, blank=True, null=True)
    jobRole = models.CharField(max_length=30, blank=True, null=True)
    titles = models.CharField(max_length=10, blank=True, null=True)
    branch = models.CharField(max_length=20, blank=True, null=True)
    company = models.CharField(max_length=75, blank=True, null=True)
    stDate = models.CharField(max_length=20, blank=True, null=True)
    endDate = models.CharField(max_length=20, blank=True, null=True)
    signBy = models.CharField(max_length=20, blank=True, null=True)


def __str__(self):
    return str(self.name) + str(self.jobRole)


class reqPaySlip(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    id = models.AutoField(primary_key=True, editable=False)
    userName = models.CharField(max_length=50, blank=True, null=True)
    reason = models.CharField(max_length=200, blank=True, null=True)
    month = models.CharField(max_length=10, blank=True, null=True)
    year = models.CharField(max_length=10, blank=True, null=True)
    created = models.CharField(max_length=10, blank=True, null=True)
