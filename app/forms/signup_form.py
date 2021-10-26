from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, FileField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

class SignUpForm(FlaskForm):
    firstName = StringField('firstName', validators=[DataRequired( message="Please enter a first name."), Length(-1, 50)])
    lastName = StringField('lastName', validators=[DataRequired(message="Please enter a last name."), Length(-1, 50)])
    aboutMe = TextAreaField('aboutMe')
    email = StringField('email', validators=[DataRequired(message="Please enter an email address."), user_exists, Length(-1, 50)])
    password = StringField('password', validators=[DataRequired(), Length(5, 17, message="Please enter a password of at least 6 characters. (Max: 16)")])
