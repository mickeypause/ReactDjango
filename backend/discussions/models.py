from django.db import models
from django.contrib.auth.models import User

class Topic(models.Model):
    name = models.CharField(max_length=255) 
    image = models.ImageField(upload_to='topics/',blank=True)
    def __str__(self):
        return self.name
    
    
class Discussion(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='topic_id')

    
    def __str__(self):
        return self.title
    
    @property
    def discussion_count(self):
       
        return Discussion.objects.count()


    