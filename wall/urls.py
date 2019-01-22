from django.urls import path

from . import views

app_name = 'works/wall'
urlpatterns = [
    path('', views.ListView.as_view(), name='index'),
    path('works/<short_url>/', views.details, name='details'),
    path('creation/', views.creation, name='creation')
]
