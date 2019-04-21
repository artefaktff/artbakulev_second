from django.shortcuts import render


# Create your views here.
def olimp(request):
    return render(request, "other/index.html")


def internet_tech(request):
    return render(request, "other/internet-tech.html")


def trafic_analyze(request):
    return render(request, "other/net-trafic.html")


def neural_networks(request):
    return render(request, "other/neural-networks.html")
