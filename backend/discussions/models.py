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
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='topic_id')
    likes = models.IntegerField(default=0, editable=False)

    
    def __str__(self):
        return self.title

# class Comment(models.Model):
#     discussion = models.ForeignKey(Discussion, on_delete=models.CASCADE)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     text = models.TextField(blank=False)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
    