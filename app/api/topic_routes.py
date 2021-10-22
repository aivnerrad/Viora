from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Topic

topic_routes = Blueprint('topic', __name__)


@topic_routes.route('')
def topics():
    topics = Topic.query.all()
    return {'topics': [topic.to_dict() for topic in topics]}

@topic_routes.route('/<title>')
def topic(title):
    topic = Topic.query.filter_by(title = title).first()
    return {'topic': [topic.to_dict()]}
