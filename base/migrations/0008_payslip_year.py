# Generated by Django 4.1.5 on 2023-02-03 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_relieving'),
    ]

    operations = [
        migrations.AddField(
            model_name='payslip',
            name='year',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
