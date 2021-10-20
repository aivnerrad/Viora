from enum import unique
from .db import db
from sqlalchemy import DateTime
from sqlalchemy.sql.functions import now


class Topic(db.Model):
    __tablename__ = 'topics'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), unique=True, nullable=False)
    coverPhoto = db.Column(db.String, nullable=False)
    created_at = db.Column(DateTime(timezone=True), server_default=now())

    posts = db.relationship('Post', back_populates='topic',
                               cascade="all, delete")
    # one to many instructions
    questions = db.relationship('Question', back_populates='topic',
                               cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'coverPhoto': self.coverPhoto,
            "created_at": self.created_at,
            "posts": [post.to_dict() for post in self.posts],
            "questions": [question.to_dict() for question in self.questions]
        }
