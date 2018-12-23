from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from rest_framework import routers
from user import views

router = routers.DefaultRouter()
router.register(r'user', views.UserViewSet, base_name='user')


api_pattern = ([
    url('', include(router.urls)),
], 'api')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(api_pattern))
]

