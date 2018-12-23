from rest_framework import serializers
from .models import Address

class AddressSerializer(serializers.ModelSerializer):
    user_id = serializers.UUIDField()

    class Meta:
        model = Address
        fields = ("__all__")