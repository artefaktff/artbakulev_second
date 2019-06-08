from django.urls import path

from other import views

urlpatterns = [
    path('summer/voted', views.voted, name='voted'),
    path('summer/ajax', views.ajax),
    path('summer', views.voting, name='voting'),
    path('internet-tech/trafic-analyze', views.trafic_analyze),
    path('internet-tech/neural-networks', views.neural_networks),
    path('internet-tech', views.internet_tech),
    path('olimp/booking/<str:language>', views.booking),
    path('olimp', views.olimp),
]
