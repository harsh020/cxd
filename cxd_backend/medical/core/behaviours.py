from django.db import models
from django.utils.translation import ugettext_lazy as _

from .managers import StatusMixinManager
from .validators import mobile_validator, country_code_validator


class StatusMixin(models.Model):
    is_active = models.BooleanField(_("active"), blank=True, null=True, default=True)
    is_deleted = models.BooleanField(_("deleted"), blank=True, null=True, default=False)

    objects = StatusMixinManager()

    class Meta:
        abstract = True


class MobileMixin(models.Model):
    mobile = models.CharField(_("Mobile Number"), max_length=10, blank=True,
                              null=True, validators=[mobile_validator])

    country_code = models.CharField(_("Country Code"), max_length=4, blank=True,
                                    null=True, validators=[country_code_validator])

    class Meta:
        abstract = True


class AddressMixin(models.Model):
    address = models.CharField(_("Address"), max_length=100, blank=True, null=True)
    country = models.ForeignKey("core.Country", models.SET_NULL, blank=True, null=True)
    state = models.ForeignKey("core.State", models.SET_NULL, blank=True, null=True)
    city = models.ForeignKey("core.City", models.SET_NULL, blank=True, null=True)

    class Meta:
        abstract = True


class ProfileMixin(MobileMixin, AddressMixin):
    alternate_mobile = models.CharField(_("Alternate Mobile Number"), max_length=100, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)

    GENDER_CHOICES = (("M", "Male"), ("F", "Female"))
    gender = models.CharField(
        choices=GENDER_CHOICES, max_length=1, blank=True, null=True
    )

    class Meta:
        abstract = True
