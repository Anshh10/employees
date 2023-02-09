from django.contrib import admin
from base.models import paySlip, attendance, event, leave, holiday, internCompelete, relieving, image
# Register your models here.

admin.site.register(image)
admin.site.register(relieving)
admin.site.register(paySlip)
admin.site.register(attendance)
admin.site.register(event)
admin.site.register(leave)
admin.site.register(holiday)
admin.site.register(internCompelete)
