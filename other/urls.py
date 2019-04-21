from django.urls import path

from other import views

urlpatterns = [
    path('internet-tech/trafic-analyze', views.trafic_analyze),
    path('internet-tech/neural-networks', views.neural_networks),
    path('internet-tech', views.internet_tech),
    path('olimp', views.olimp),
]
