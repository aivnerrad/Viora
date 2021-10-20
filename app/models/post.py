from .db import db
from sqlalchemy import DateTime
from sqlalchemy.sql.functions import now


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    topicName = db.Column(db.String(20),  db.ForeignKey('topics.title'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(DateTime(timezone=True), server_default=now())
    updated_at = db.Column(DateTime(timezone=True), onupdate=now())

    user = db.relationship('User', back_populates='posts')
    topic = db.relationship('Topic', back_populates='posts')
    comments = db.relationship('Comment', back_populates='post', cascade="all, delete")
    likes = db.relationship('Like', back_populates='post', cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'topicName': self.topicName,
            'content': self.content,
            'userId': self.userId,
            "user": self.user.to_dict(),
            "topic": self.topic.to_dict(),
            "comments": [comment.to_dict() for comment in self.comments],
            "likes": [like.to_dict() for like in self.likes],
            "created_at": self.created_at,
            "updated_at": self.updated_at

        }
