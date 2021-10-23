from sqlalchemy.orm import backref
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(40), nullable=False)
    lastName = db.Column(db.String(40), nullable=False)
    aboutMe = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    posts = db.relationship('Post', back_populates='user', cascade="all, delete")
    likes = db.relationship('Like', back_populates='user', cascade="all, delete")
    questions = db.relationship('Question', back_populates='user', cascade="all, delete")
    answers = db.relationship('Answer', back_populates='user', cascade="all, delete")
    comments = db.relationship('Comment', back_populates='user', cascade="all, delete")
    images = db.relationship("Image", back_populates="user", cascade="all, delete")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'aboutMe': self.aboutMe,
            'email': self.email,
            'images': [image.to_dict() for image in self.images]
        }
