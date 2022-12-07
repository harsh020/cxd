from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _


class DiagnosisConfig(AppConfig):
    name = 'medical.diagnosis'
    verbose_name = _("Diagnosis")
