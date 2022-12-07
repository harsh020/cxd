from rest_framework import serializers

from .models import Diagnosis


class DiagnosisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diagnosis
        fields = '__all__'


class DiagnosisCreateSerializer(serializers.ModelSerializer):
    is_active = serializers.BooleanField(default=True)

    class Meta:
        model = Diagnosis
        fields = '__all__'

    def create(self, validated_data):
        request = self.context.get('request')
        diagnosis = Diagnosis.objects.create(**validated_data)
        diagnosis.user = request.user
        diagnosis.save()

        return diagnosis
