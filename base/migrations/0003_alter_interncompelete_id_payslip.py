# Generated by Django 4.1.5 on 2023-02-02 05:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interncompelete',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.CreateModel(
            name='paySlip',
            fields=[
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=20, null=True)),
                ('month', models.CharField(blank=True, max_length=20, null=True)),
                ('panNum', models.CharField(blank=True, max_length=20, null=True)),
                ('jobRole', models.CharField(blank=True, max_length=20, null=True)),
                ('pfNum', models.CharField(blank=True, max_length=20, null=True)),
                ('location', models.CharField(blank=True, max_length=20, null=True)),
                ('bankName', models.CharField(blank=True, max_length=20, null=True)),
                ('shift', models.CharField(blank=True, max_length=20, null=True)),
                ('accNum', models.CharField(blank=True, max_length=20, null=True)),
                ('joinDate', models.CharField(blank=True, max_length=20, null=True)),
                ('lopDays', models.CharField(blank=True, max_length=20, null=True)),
                ('paBasic', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('paHRA', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('paConveyance', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('paTelephone', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('paOtherAllowance', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('pdTds', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('pdLop', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('pdPf', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('pdEsi', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('pdOtherDeductions', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('pTotalPaid', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('pTotalDeducted', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('pNetEarnings', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('pStipend', models.DecimalField(blank=True, decimal_places=3, max_digits=10, null=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]