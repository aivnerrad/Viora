from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Topic, Comment, db
from app.forms import CreateCommentForm, EditCommentForm
from app.api.auth_routes import validation_errors_to_error_messages

topic_routes = Blueprint('topic', __name__)


@topic_routes.route('')
def topics():
    topics = Topic.query.all()
    return {'topics': [topic.to_dict() for topic in topics]}

@topic_routes.route('/<title>')
def topic(title):
    topic = Topic.query.filter_by(title = title).first()
    return {'topic': [topic.to_dict()]}

@topic_routes.route('/<title>/<int:postId>/comments')
def comments(title, postId):
    comments = Comment.query.filter_by(postId = Comment.postId).all()
    print("COMMENTS ========>>>>", comments)
    return {'comments': [comment.to_dict() for comment in comments]}

@topic_routes.route('/<title>/<int:postId>/comments', methods=['POST'])
@login_required
def create_comment(title, postId):
    formComment = CreateCommentForm()
    formComment['csrf_token'].data = request.cookies['csrf_token']
    if formComment.validate_on_submit():
        newComment = Comment(
            userId=formComment.data['userId'],
            postId=formComment.data['postId'],
            content=formComment.data['content'],
        )
        db.session.add(newComment)
        db.session.commit()
        return newComment.to_dict()
    else:
        return { 'errors': validation_errors_to_error_messages(formComment.errors)}, 400
@topic_routes.route('/<title>/<int:postId>/comments/<int:id>', methods=['PATCH'])
@login_required
def update_comment(title, postId, id):
    comment = Comment.query.get(id)
    formComment = EditCommentForm()
    formComment['csrf_token'].data = request.cookies['csrf_token']
    if formComment.validate_on_submit():
        comment.content = formComment.data['content']
        db.session.commit()
        return comment.to_dict()
    else:
        return { 'errors': validation_errors_to_error_messages(formComment.errors)}, 400
