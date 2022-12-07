from django.db import models
from model_utils.models import TimeStampedModel
from django.utils.translation import ugettext_lazy as _

from .behaviours import StatusMixin


# Create your models here.
class Country(StatusMixin, TimeStampedModel):
    country = models.CharField(_("Country"), max_length=50, blank=True, null=True)

    def __str__(self):
        return self.country


class State(StatusMixin, TimeStampedModel):
    country = models.ForeignKey("Country", models.SET_NULL, blank=True, null=True, related_name="core_country")
    state = models.CharField(_("State"), max_length=50, blank=True, null=True)

    def __str__(self):
        return self.state


class City(StatusMixin, TimeStampedModel):
    state = models.ForeignKey("State", models.SET_NULL, blank=True, null=True, related_name="core_state")
    city = models.CharField(_("city"), max_length=50, blank=True, null=True)

    def __str__(self):
        return self.city
