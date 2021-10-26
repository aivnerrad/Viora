from flask_wtf import FlaskForm
from wtforms.fields import TextAreaField, IntegerField
from wtforms.validators import DataRequired


class CreateAnswerForm(FlaskForm):
  userId = IntegerField('userId', validators=[DataRequired()])
  questionId = IntegerField('questionId', validators=[DataRequired()])
  content = TextAreaField('content', validators=[DataRequired()])
