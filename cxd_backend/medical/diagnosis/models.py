from django.db import models
from django.conf import settings
from model_utils.models import TimeStampedModel
from django.utils.translation import ugettext_lazy as _
from django.contrib.postgres import fields

from medical.core.models import StatusMixin


# Create your models here.
class Diagnosis(StatusMixin, TimeStampedModel):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)
    result = fields.JSONField(_("Result"), null=True, blank=True)
    name = models.CharField(_("Name"), null=True, max_length=500, blank=True)
    diagnostic = models.CharField(_("Diagnostic"), max_length=500, null=True, blank=True)

    def __str__(self):
        return str(self.id)
