from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Topic, Comment, db, Like, Post
from app.forms import CreateCommentForm, EditCommentForm, CreatePostForm, EditPostForm
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

@topic_routes.route('/<title>/<int:postId>', methods=['PATCH'])
@login_required
def update_post(title, postId):
    post = Post.query.get(postId)
    formPost = EditPostForm()
    formPost['csrf_token'].data = request.cookies['csrf_token']
    if formPost.validate_on_submit():
        post.title = formPost.data['title']
        post.content = formPost.data['content']
        db.session.commit()
        return post.to_dict()
    else:
        return { 'errors': validation_errors_to_error_messages(formPost.errors)}, 400

@topic_routes.route('/<title>', methods=['POST'])
@login_required
def create_post(title):
    formPost = CreatePostForm()
    formPost['csrf_token'].data = request.cookies['csrf_token']
    if formPost.validate_on_submit():
        newPost = Post(
            title=formPost.data['title'],
            topicName=formPost.data['topicName'],
            content=formPost.data['content'],
            userId=formPost.data['userId'],
        )
        db.session.add(newPost)
        db.session.commit()
        return newPost.to_dict()
    else:
        return { 'errors': validation_errors_to_error_messages(formPost.errors)}, 400

@topic_routes.route('/<title>/<int:postId>', methods=['DELETE'])
@login_required
def delete_post(title, postId):
    post = Post.query.get(postId)
    if post.userId != current_user.to_dict()['id'] or not post:
        return {'errors': ['No authorization.']}, 401

    db.session.delete(post)
    db.session.commit()
    return {'message': ['Delete Successfully']}


@topic_routes.route('/<title>/<int:postId>/like', methods=['POST'])
@login_required
def create_post_like(title, postId):
    post_liked = Like.query.filter_by(postId=postId, userId=current_user.to_dict()['id']).first()

    if not post_liked:
        like = Like(postId=postId, userId=current_user.to_dict()['id'])
        db.session.add(like)
        db.session.commit()
        return {'like': [like.to_dict()]}
    else:
        db.session.delete(post_liked)
        db.session.commit()
        return {'message': 'Post Like Removed'}

@topic_routes.route('/<title>/<int:postId>/comments')
def comments(title, postId):
    comments = Comment.query.filter_by(postId = postId).all()
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

@topic_routes.route('/<title>/<int:postId>/comments/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(title, postId, id):
    comment = Comment.query.get(id)
    if comment.userId != current_user.to_dict()['id'] or not comment:
        return {'errors': ['No authorization.']}, 401

    db.session.delete(comment)
    db.session.commit()
    return {'message': ['Delete Successfully']}

@topic_routes.route('/<title>/<int:postId>/comments/<int:commentId>/like', methods=['POST'])
@login_required
def create_comment_like(title, postId, commentId):
    comment_liked = Like.query.filter_by(commentId=commentId, userId=current_user.to_dict()['id']).first()

    if not comment_liked:
        like = Like(commentId=commentId, userId=current_user.to_dict()['id'])
        db.session.add(like)
        db.session.commit()
        return {'like': [like.to_dict()]}
    else:
        db.session.delete(comment_liked)
        db.session.commit()
        return {'message': 'Post Like Removed'}
