from rest_framework import serializers 
from .models import Discussion, Topic

class TopicSerializer(serializers.ModelSerializer):
    
    class Meta: 
        model = Topic
        fields = '__all__'
     
        
class DiscussionSerializer(serializers.ModelSerializer): 
    author = serializers.CharField(source='author.username', read_only=True)
    author_id = serializers.SerializerMethodField('get_author_id')
    
    topic = serializers.CharField(source='topic.name', read_only=True)
    topic_id = serializers.SerializerMethodField('get_topic_id')
    # topic = TopicSerializer()
    # topic = serializers.SlugRelatedField(
    # read_only=True,
    # slug_field="name"
    #   )
  
    class Meta: 
        model = Discussion
        fields = '__all__'
        
    def get_author_id(self, discussion):
        author_id = discussion.author.id
        return author_id
    
    def get_topic_id(self, discussion):
        topic_id = discussion.topic.id
        return topic_id