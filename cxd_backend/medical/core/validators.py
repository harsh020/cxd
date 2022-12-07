from django.core.validators import RegexValidator


mobile_validator = RegexValidator(regex=r'[1-9]\d{9}', message="Invalid Mobile Number")
country_code_validator = RegexValidator(regex=r'^\+[0-9]{1,4}', message='Invalid Country Code')
