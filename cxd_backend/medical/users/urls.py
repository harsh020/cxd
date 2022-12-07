from django.urls import path

from medical.users.views import (
    user_detail_view,
    user_redirect_view,
    user_update_view,
    UserProfileDetailView,
    UserCreateView,
)

app_name = "users"
urlpatterns = [
    path("create/", view=UserCreateView.as_view(), name='user_create'),
    path("~redirect/", view=user_redirect_view, name="redirect"),
    path("~update/", view=user_update_view, name="update"),
    # path("<str:username>/", view=user_detail_view, name="detail"),
    path("details/", view=UserProfileDetailView.as_view(), name="user_details"),
]
