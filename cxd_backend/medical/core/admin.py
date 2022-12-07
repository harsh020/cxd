from django.contrib import admin

from medical.core.models import Country, City, State


# Register your models here.
@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    model = Country


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    model = City


@admin.register(State)
class StateAdmin(admin.ModelAdmin):
    model = State
