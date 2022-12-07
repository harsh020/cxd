from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from medical.core.behaviours import StatusMixin, ProfileMixin


class User(AbstractUser):
    """Default user for medical."""

    #: First and last name do not cover name patterns around the globe
    name = models.CharField(_("Name of User"), blank=True, max_length=255)

    def get_absolute_url(self):
        """Get url for user's detail view.

        Returns:
            str: URL for user detail.

        """
        return reverse("users:detail", kwargs={"username": self.username})


class UserProfile(StatusMixin, ProfileMixin, TimeStampedModel):
    user = models.ForeignKey(User, models.CASCADE, blank=True, null=True)
    occupation = models.CharField(_("Occupation"), max_length=50, blank=True, null=True)

    def __str__(self):
        if self.user:
            return self.user.username
        else:
            return str(self.id)
