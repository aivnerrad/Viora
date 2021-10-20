from .db import db
from sqlalchemy import DateTime
from sqlalchemy.sql.functions import now

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    postId = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(DateTime(timezone=True), server_default=now())
    updated_at = db.Column(DateTime(timezone=True), onupdate=now())

    user = db.relationship('User', back_populates='comments')
    post = db.relationship('Post', back_populates='comments')
    likes = db.relationship('Like', back_populates='comment', cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'postId': self.postId,
            'content': self.content,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "user": self.user.to_dict(),
            "post": self.post.to_dict(),
            "likes": [like.to_dict() for like in self.likes]
        }
