from django.http import HttpResponse
from django.shortcuts import render
from other.models import Vote


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


def voting(request):
    return render(request, 'other/voting.html')


def voted(request):
    votes = Vote.objects.all()
    durations = 0
    weeks_rate = {}
    for vote in votes:
        durations += vote.duration
        weeks = vote.weeks.split(', ')
        for week in weeks:
            try:
                weeks_rate[week] += 1
            except KeyError:
                weeks_rate[week] = 0

    top_weeks = sorted(weeks_rate.items(), key=lambda x: x[1])[:3]
    for i in range(len(top_weeks)):
        top_weeks[i] = top_weeks[i][0].replace('-week-', ' неделя ').replace('June', 'июня').replace('July',
                                                                                                     'июля').replace(
            'August',
            'августа').replace('4', 'Четвертая').replace('3', 'Третья').replace('2', 'Вторая').replace('1', 'Первая')
        top_weeks[i] = ' '.join(top_weeks[i].split()[::-1])
    context = {'duration': round(durations / len(votes)), 'weeks': top_weeks, 'total': len(votes)}

    return render(request, 'other/success.html', context=context)


def ajax(request):
    if request.method != 'POST':
        return HttpResponse(status=400)
    vote = Vote.objects.create(name=request.POST['name'], duration=request.POST['duration'],
                               weeks=str(request.POST['weeks'][:-2]).replace('June-week-0', 'June-week-1').replace(
                                   'July-week-0', 'July-week-1').replace('August-week-0', 'August-week-1'))

    vote.save()

    return HttpResponse(status=200)
