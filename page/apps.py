from django.apps import AppConfig

class PageConfig(AppConfig):
    name = 'page'
    label = 'page'  # <-- this is the important line - change it to anything other than the default, which is the module name ('foo' in this case)