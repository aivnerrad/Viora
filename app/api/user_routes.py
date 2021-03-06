from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Post, Question

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/feed')
@login_required
def feed():
    feed = Post.query.filter(current_user.id != Post.userId).all()
    return {'feed': [post.to_dict() for post in feed]}
