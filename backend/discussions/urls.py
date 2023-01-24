from django.urls import path
from .views import ListTopic, DetailTopic, ListDiscussion, DetailDiscussion

urlpatterns = [
    path('topics/<int:pk>/', DetailTopic.as_view()),
    path('topics/', ListTopic.as_view()),
    path('discussions/', ListDiscussion.as_view()),
    path('discussions/<int:pk>/', DetailDiscussion.as_view())
]
