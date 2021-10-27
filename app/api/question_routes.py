from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Post, Question, db
from app.forms import CreateAnswerForm
question_routes = Blueprint('questions', __name__)
from app.api.auth_routes import validation_errors_to_error_messages

@question_routes.route('')
@login_required
def questions():
    question_list = Question.query.filter(current_user.id != Question.userId).all()
    return {'questions': [question.to_dict() for question in question_list]}

@question_routes.route('/answers')
@login_required
def answers():
    answer_list = Question.query.all()
    return {'answers': [answer.to_dict() for answer in answer_list]}

@question_routes.route('/<int:questionId>', methods=['POST'])
@login_required
def create_answer(questionId):
    formAnswer = CreateAnswerForm()
    formAnswer['csrf_token'].data = request.cookies['csrf_token']
    if formAnswer.validate_on_submit():
        newAnswer = Question(
            questionId=formAnswer.data['questionId'],
            content=formAnswer.data['content'],
            userId=formAnswer.data['userId'],
        )
        db.session.add(newAnswer)
        db.session.commit()
        return newAnswer.to_dict()
    else:
        return { 'errors': validation_errors_to_error_messages(formAnswer.errors)}, 400
