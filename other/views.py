from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
def olimp(request):
    return render(request, "other/index.html")
