from django.urls import path

from .views import DiagnosisCreateView, DiagnosisDetailView


app_name = "diagnosis"
urlpatterns = [
    path("create/", view=DiagnosisCreateView.as_view(), name='diagnosis_create'),
    path("details/", view=DiagnosisDetailView.as_view(), name='diagnosis_details'),
]
