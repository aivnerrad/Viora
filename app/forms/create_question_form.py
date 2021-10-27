from flask_wtf import FlaskForm
from wtforms.fields import TextAreaField, IntegerField, SelectField
from wtforms.validators import DataRequired


class CreateQuestionForm(FlaskForm):
  userId = IntegerField('userId', validators=[DataRequired()])
  content = TextAreaField('content', validators=[DataRequired()])
  topicName = SelectField('topicName', validators=[DataRequired()], choices=["Weather", "Entertainment", "Sports", "Family", "Food", "Work", "Travel", "Hobbies And Health"])
