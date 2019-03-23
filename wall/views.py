import datetime
from os import makedirs
from re import sub, findall

from django.shortcuts import render, HttpResponse
from django.views import generic
from transliterate import translit

from .models import Post, Image


def generate_url_for_image(url, n):
    path = '/static/wall/res/' + url + '/images/' + n + '.jpg'
    return '<a href="' + path + '" data-lightbox="set"><img class="lazyload" data-src=' + path + '></a>'


class ListView(generic.ListView):
    def get_queryset(self):
        return Post.objects.order_by('-pub_date')

    model = Post
    context_object_name = 'posts'
    template_name = 'wall/index.html'


def details(request, short_url):
    post = Post.objects.all().filter(short_url=short_url)[0]
    re = findall('<image ([0-9]+)>', post.description)
    description = post.description
    for group in re:
        pattern = r'<image ' + group + '>'
        description = sub(pattern, generate_url_for_image(short_url, group), description)
    return render(request, 'wall/details.html', {'post': post, 'description': description})


def creation(request):
    if request.user.is_authenticated:
        def handle_uploaded_file(f, url):
            try:
                makedirs('static/wall/res/' + url + '/images/')
            except:
                pass
            with open('static/wall/res/' + url + '/images/' + str(f), 'wb+') as destination:
                for chunk in f.chunks():
                    destination.write(chunk)

        def handle_uploaded_files(set_of_images, url):
            j = 0
            print(len(set_of_images))
            for image in set_of_images:
                with open('static/wall/res/' + url + '/images/' + str(j) + '.jpg', 'wb+') as destination:
                    for chunk in image.chunks():
                        destination.write(chunk)
                j += 1
            return j

        def create_new_post(d, n):
            def create_new_images(pk, url, number):
                for i in range(n):
                    img = Image(name=str(i), image_link='/static/wall/res/' + url + '/images/' + str(i) + '.jpg',
                                post=new_post)
                    img.save()

            new_post = Post(title=d['title'], short_url=d['short_url'],
                            pub_date=d['pub_date'], description=d['description'], main_image_link=d['main_image_link'])
            new_post.save()
            create_new_images(new_post, d['short_url'], n)

        try:
            post = dict()
            post['title'] = request.POST['title']
            post['short_url'] = sub(r"'[,.\\ ]", '', translit(post['title'], 'ru', reversed=True).lower())
            post['pub_date'] = request.POST['date']
            post['description'] = request.POST['description']
            post['main_image_link'] = '/wall/res/' + post['short_url'] + '/images/' + str(request.FILES['file'])
            handle_uploaded_file(request.FILES['file'], post['short_url'])
            number_of_images = handle_uploaded_files(request.FILES.getlist('images'), post['short_url'])
            create_new_post(post, number_of_images)
            return render(request, 'wall/creation.html', {'msg': 'Новый пост опубликован успешно'})

        except KeyError as err:
            return render(request, 'wall/creation.html',
                          {'msg': 'Возникла ошибка: %s' % err})  # TODO delete the error message for first use
    else:
        return HttpResponse('You can not do this')


def sniffer(request):
    with open('~/logs{}'.format(str(datetime.datetime)), 'w') as f:
        f.write(str(request))
    return HttpResponse('p{color: blue}; a{text-decoration:none;')
