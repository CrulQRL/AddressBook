from django.db import models
import uuid

class Address(models.Model):
    user_id = models.UUIDField(primary_key=True, editable=False)
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=300)
    phone_number =  models.CharField(max_length=300)

    def __str__(self):
        return str(self.name)
