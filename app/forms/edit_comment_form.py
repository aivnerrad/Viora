from flask_wtf import FlaskForm
from wtforms.fields import TextAreaField, IntegerField, DateField
from wtforms.validators import DataRequired


class EditCommentForm(FlaskForm):
  userId = IntegerField('userId', validators=[DataRequired("Please log in.")])
  postId = IntegerField('postId', validators=[DataRequired()])
  content = TextAreaField('content', validators=[DataRequired("You're just going to erase everything?")])
