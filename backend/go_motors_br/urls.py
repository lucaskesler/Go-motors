"""
URL configuration for go_motors_br project.
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Adiciona as URLs da nossa API de veículos
    path('api/', include('vehicles.urls')),
]