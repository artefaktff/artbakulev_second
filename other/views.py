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


def booking(request, language):
    if language == 'ru':
        return render(request, "other/booking-ru.html")
    else:
        return render(request, "other/booking.html")
