# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-05-31 22:13
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shifty', '0004_company'),
    ]

    operations = [
        migrations.AddField(
            model_name='shiftuser',
            name='company',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='shifty.Company'),
        ),
    ]