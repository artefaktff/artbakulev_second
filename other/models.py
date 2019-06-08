from django.db import models


class Vote(models.Model):
    name = models.CharField(max_length=100)
    duration = models.IntegerField(default=0)
    weeks = models.CharField(max_length=200)  # Wrong, but Im too lazy to make ForeignKey

    def __str__(self):
        return self.name
