# Generated by Django 4.1.5 on 2023-02-02 05:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_interncompelete_id_payslip'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interncompelete',
            name='id',
            field=models.AutoField(editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='id',
            field=models.AutoField(max_length=30, primary_key=True, serialize=False),
        ),
    ]
