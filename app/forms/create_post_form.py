from flask_wtf import FlaskForm
from wtforms.fields import TextAreaField, IntegerField, StringField, DateField
from wtforms.validators import DataRequired


class CreatePostForm(FlaskForm):
  title = StringField('title', validators=[DataRequired("Please title your post.")])
  topicName = StringField('topicName', validators=[DataRequired("Topic Required")])
  content = TextAreaField('content', validators=[DataRequired("Please provide content for your post.")])
  userId = IntegerField('userId', validators=[DataRequired("You must be logged in to create a post.")])
