from django.urls import path, include
from rest_framework import routers
from .views import ParticipantViewSet

router = routers.DefaultRouter()
router.register(r'', ParticipantViewSet)

urlpatterns = [
    path('', include(router.urls))
] 
