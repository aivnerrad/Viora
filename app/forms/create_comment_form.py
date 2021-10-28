from flask_wtf import FlaskForm
from wtforms.fields import TextAreaField, IntegerField, DateField
from wtforms.validators import DataRequired


class CreateCommentForm(FlaskForm):
  userId = IntegerField('userId', validators=[DataRequired("Please log in.")])
  postId = IntegerField('postId', validators=[DataRequired("Please select a post to comment on.")])
  content = TextAreaField('content', validators=[DataRequired("Actually leave a comment. No blank comments.")])
