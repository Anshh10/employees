# Generated by Django 4.1.5 on 2023-02-04 04:46

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0008_payslip_year'),
    ]

    operations = [
        migrations.CreateModel(
            name='reqPaySlip',
            fields=[
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('userName', models.CharField(blank=True, max_length=50, null=True)),
                ('reason', models.CharField(blank=True, max_length=200, null=True)),
                ('month', models.CharField(blank=True, max_length=10, null=True)),
                ('year', models.CharField(blank=True, max_length=10, null=True)),
                ('created', models.CharField(blank=True, max_length=10, null=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
