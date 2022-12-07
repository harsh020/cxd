from rest_framework import serializers

from .models import User, UserProfile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'


class UserDetailSerializer(serializers.ModelSerializer):
    user_profile = serializers.SerializerMethodField()

    def get_user_profile(self, user):
        profile_instance = UserProfile.objects.get(user=user)

        return UserProfileSerializer(profile_instance).data

    class Meta:
        model = User
        fields = '__all__'


class UserCreateSerializer(serializers.ModelSerializer):
    is_active = serializers.BooleanField(default=True)
    user_profile = serializers.JSONField()

    class Meta:
        model = User
        fields = ('is_active', 'id','username','password','first_name', 'last_name', 'email', 'user_profile')
        extra_kwargs = {
            'password':{'write_only': True},
        }

    def create(self, validated_data):
        user_profile = validated_data.pop('user_profile') if 'user_profile' in validated_data else None

        user = User.objects.create_user(validated_data['username'],
                                        password=validated_data['password'],
                                        first_name=validated_data['first_name'],
                                        last_name=validated_data['last_name'],
                                        email=validated_data['email'])

        user_profile['user'] = user
        UserProfile.objects.create(**user_profile)

        return user
