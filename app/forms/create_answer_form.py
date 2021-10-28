from flask_wtf import FlaskForm
from wtforms.fields import TextAreaField, IntegerField
from wtforms.validators import DataRequired


class CreateAnswerForm(FlaskForm):
  userId = IntegerField('userId', validators=[DataRequired("Please log in.")])
  questionId = IntegerField('questionId', validators=[DataRequired("Answer a question. Nothing else.")])
  content = TextAreaField('content', validators=[DataRequired("Please provide an answer. A blank doesn't help anybody.")])
