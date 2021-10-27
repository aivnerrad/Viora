from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Post, Question, db, Like, Answer
from app.forms import CreateAnswerForm, CreateQuestionForm
from app.api.auth_routes import validation_errors_to_error_messages

question_routes = Blueprint('questions', __name__)

@question_routes.route('')
def questions():
    question_list = Question.query.all()
    return {'questions': [question.to_dict() for question in question_list]}

@question_routes.route('', methods=['POST'])
@login_required
def create_question():
    formQuestion = CreateQuestionForm()
    formQuestion['csrf_token'].data = request.cookies['csrf_token']
    if formQuestion.validate_on_submit():
        newQuestion = Question(
            title=formQuestion.data['title'],
            topicName=formQuestion.data['topicName'],
            content=formQuestion.data['content'],
            userId=formQuestion.data['userId'],
        )
        db.session.add(newQuestion)
        db.session.commit()
        return newQuestion.to_dict()
    else:
        return { 'errors': validation_errors_to_error_messages(formQuestion.errors)}, 400

@question_routes.route('/<int:questionId>', methods=['DELETE'])
@login_required
def delete_question(questionId):
    question = Question.query.get(questionId)
    if question.userId != current_user.to_dict()['id'] or not question:
        return {'errors': ["You can't change what a'int yours"]}, 401
    db.session.delete(question)
    db.session.commit()
    return {"message": "Delete complete"}

@question_routes.route('/<int:questionId>/answers/<int:answerId>', methods=['DELETE'])
@login_required
def delete_answer(questionId, answerId):
    answer = Answer.query.get(answerId)
    if answer.userId != current_user.to_dict()['id'] or not answer:
        return {'errors': ["You can't change what a'int yours"]}, 401
    db.session.delete(answer)
    db.session.commit()
    return {"message": "Delete complete"}

@question_routes.route('/<int:questionId>/answers')
@login_required
def answers(questionId):
    answer_list = Question.query.all()
    return {'answers': [answer.to_dict() for answer in answer_list]}

@question_routes.route('/<int:questionId>/answers', methods=['POST'])
@login_required
def create_answer(questionId):
    formAnswer = CreateAnswerForm()
    formAnswer['csrf_token'].data = request.cookies['csrf_token']
    if formAnswer.validate_on_submit():
        newAnswer = Answer(
            questionId=formAnswer.data['questionId'],
            content=formAnswer.data['content'],
            userId=formAnswer.data['userId'],
        )
        db.session.add(newAnswer)
        db.session.commit()
        return newAnswer.to_dict()
    else:
        return { 'errors': validation_errors_to_error_messages(formAnswer.errors)}, 400

@question_routes.route('/<int:questionId>/answers/<int:answerId>/like', methods=['POST'])
@login_required
def create_answer_like(questionId, answerId):
    answer_liked = Like.query.filter_by(answerId=answerId, userId=current_user.to_dict()['id']).first()

    if not answer_liked:
        like = Like(answerId=answerId, userId=current_user.to_dict()['id'])
        db.session.add(like)
        db.session.commit()
        return {'like': [like.to_dict()]}
    else:
        db.session.delete(answer_liked)
        db.session.commit()
        return {'message': 'Post Like Removed'}
