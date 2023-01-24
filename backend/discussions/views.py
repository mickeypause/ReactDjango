from rest_framework import generics, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Topic, Discussion
from .serializers import DiscussionSerializer, TopicSerializer


class ListTopic(generics.ListAPIView):
    #permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    
class DetailTopic(generics.RetrieveAPIView):
    
   # permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer


class ListDiscussion(generics.ListAPIView):
    search_fields = ['title']
    filter_backends = (filters.SearchFilter,)
    #permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Discussion.objects.all()
    serializer_class = DiscussionSerializer


class DetailDiscussion(generics.RetrieveAPIView):

   # permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Discussion.objects.all()
    serializer_class = DiscussionSerializer
    

