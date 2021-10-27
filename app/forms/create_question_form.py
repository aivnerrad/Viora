from flask_wtf import FlaskForm
from wtforms.fields import TextAreaField, IntegerField, SelectField
from wtforms.fields.core import StringField
from wtforms.validators import DataRequired


class CreateQuestionForm(FlaskForm):
  userId = IntegerField('userId', validators=[DataRequired("You must be logged in to ask a question.")])
  title = StringField('title', validators=[DataRequired("Please headline your question.")])
  content = TextAreaField('content', validators=[DataRequired("Please give details about your question.")])
  topicName = SelectField('topicName', validators=[DataRequired("Please choose a topic.")], choices=["Weather", "Entertainment", "Sports", "Family", "Food", "Work", "Travel", "Hobbies And Health"])
