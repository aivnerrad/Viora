from flask_wtf import FlaskForm
from wtforms.fields import TextAreaField, IntegerField, StringField, DateField
from wtforms.validators import DataRequired


class CreatePostForm(FlaskForm):
  title = StringField('title', validators=[DataRequired()])
  topicName = StringField('topicName', validators=[DataRequired()])
  content = TextAreaField('content', validators=[DataRequired()])
  userId = IntegerField('userId', validators=[DataRequired()])
