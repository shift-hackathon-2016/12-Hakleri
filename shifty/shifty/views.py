from django.http import HttpResponse
from django.template import loader
from django.shortcuts import redirect



def index(request):
    if request.user.is_authenticated():
	return redirect('/app')

    template = loader.get_template('shifty/index.html')
    context = {
    }
    return HttpResponse(template.render(context, request))

def app_view(request):
    if not request.user.is_authenticated():
	return redirect('/')

    template = loader.get_template('shifty/app.html')
    context = {
    }
    return HttpResponse(template.render(context, request))
