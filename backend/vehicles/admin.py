from django.contrib import admin
from .models import Veiculo

# Registra o modelo Veiculo para que ele apareça no site de administração
admin.site.register(Veiculo)