from flask_wtf import FlaskForm
from wtforms.fields import TextAreaField, IntegerField, DateField
from wtforms.validators import DataRequired


class CreateCommentForm(FlaskForm):
  userId = IntegerField('userId', validators=[DataRequired()])
  postId = IntegerField('postId', validators=[DataRequired()])
  content = TextAreaField('content', validators=[DataRequired()])
