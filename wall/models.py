from django.db import models


class Post(models.Model):
    def __str__(self):
        return self.title
    title = models.CharField(max_length=100)
    short_url = models.CharField(max_length=100)
    pub_date = models.DateField()
    description = models.CharField(max_length=1000)
    main_image_link = models.CharField(max_length=100)


class Image(models.Model):
    def __str__(self):
        return self.image_link
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    image_link = models.CharField(max_length=100)
    code_for_insertion = '<img src=' + str(image_link) + '/>'