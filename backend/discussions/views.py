from rest_framework import generics, filters
from .models import Topic, Discussion
from .serializers import DiscussionSerializer, TopicSerializer
from django.contrib.auth.models import User



class ListTopic(generics.ListAPIView):

    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    
class DetailTopic(generics.RetrieveAPIView):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer


    
class ListDiscussion(generics.ListCreateAPIView):
    search_fields = ['title']
    filter_backends = (filters.SearchFilter,)
    queryset = Discussion.objects.all().order_by('-created_at')
    serializer_class = DiscussionSerializer


class DetailDiscussion(generics.RetrieveUpdateDestroyAPIView):
    queryset = Discussion.objects.all()
    serializer_class = DiscussionSerializer
