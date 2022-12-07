from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import Diagnosis
from .serializer import DiagnosisSerializer, DiagnosisCreateSerializer


# Create your views here.
class DiagnosisCreateView(GenericAPIView):
    serializer_class = DiagnosisCreateSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        diagnosis = serializer.save()
        return Response(serializer.data)


class DiagnosisDetailView(APIView):
    def get(self, request):
        diagnosis = Diagnosis.objects.filter(user=request.user)
        serializer = DiagnosisSerializer(diagnosis, many=True)
        return Response(serializer.data)
