# Generated by Django 4.1.5 on 2023-02-02 05:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_alter_payslip_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payslip',
            name='pNetEarnings',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='pStipend',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='pTotalDeducted',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='pTotalPaid',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='paBasic',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='paConveyance',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='paHRA',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='paOtherAllowance',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='paTelephone',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='pdEsi',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='pdLop',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='pdOtherDeductions',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='pdPf',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='payslip',
            name='pdTds',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
