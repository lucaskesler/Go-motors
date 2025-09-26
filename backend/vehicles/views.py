from rest_framework import viewsets
from .models import Veiculo
from .serializers import VeiculoSerializer

class VeiculoViewSet(viewsets.ModelViewSet):
    queryset = Veiculo.objects.all().order_by('-data_cadastro')
    serializer_class = VeiculoSerializer
