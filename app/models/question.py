from .db import db
from sqlalchemy import DateTime
from sqlalchemy.sql.functions import now



class Question(db.Model):
    __tablename__ = 'questions'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    topicName = db.Column(db.String(20), db.ForeignKey('topics.title'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(DateTime(timezone=True), server_default=now())
    updated_at = db.Column(DateTime(timezone=True), onupdate=now())

    user = db.relationship('User', back_populates='questions')
    topic = db.relationship('Topic', back_populates='questions')
    answers = db.relationship('Answer', back_populates='question', cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'topicName': self.topicName,
            'content': self.content,
            'userId': self.userId,
            "user": self.user.to_dict(),
            "answers": [answer.to_dict() for answer in self.answers],
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
