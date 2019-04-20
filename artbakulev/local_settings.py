DEBUG = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1']


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'artbakulev_db',
        'USER': 'me_db',
        'PASSWORD': 'artbakulev_me_db',
        'HOST': '104.248.205.3',
        'PORT': '5432',
    }
}
