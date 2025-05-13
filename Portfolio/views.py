from django.shortcuts import render



def homepage(request):
    return render(request, "homepage.html")


def aboutpage(request):
    return render(request, "about.html")


def contactpage(request):
   
    return render(request, "contact.html")

def educationpage(request):
    
    return render(request, "education.html")

def portfoliopage(request):
    
    return render(request, "portfolio.html")
