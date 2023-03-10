# Generated by Django 4.1.5 on 2023-02-02 07:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0006_alter_payslip_pnetearnings_alter_payslip_pstipend_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='relieving',
            fields=[
                ('id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=30, null=True)),
                ('jobRole', models.CharField(blank=True, max_length=30, null=True)),
                ('titles', models.CharField(blank=True, max_length=10, null=True)),
                ('branch', models.CharField(blank=True, max_length=20, null=True)),
                ('company', models.CharField(blank=True, max_length=75, null=True)),
                ('stDate', models.CharField(blank=True, max_length=20, null=True)),
                ('endDate', models.CharField(blank=True, max_length=20, null=True)),
                ('signBy', models.CharField(blank=True, max_length=20, null=True)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
