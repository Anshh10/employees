# Generated by Django 4.1.5 on 2023-02-09 07:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0014_rename_images_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='meetForWeb',
            new_name='meetForIT',
        ),
    ]