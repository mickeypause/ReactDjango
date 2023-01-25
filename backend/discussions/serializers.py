from rest_framework import serializers 
from .models import Discussion, Topic



class TopicSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Topic
        fields = '__all__'
     
        
class DiscussionSerializer(serializers.ModelSerializer): 

    topic_name = serializers.SerializerMethodField('get_topic_name')
    class Meta: 
        model = Discussion
        fields = '__all__'
    
    def get_topic_name(self, discussion):
          topic_name = discussion.topic.name
          return topic_name
      

     
    
