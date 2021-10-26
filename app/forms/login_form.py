from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email entered is incorrect, please try again. Or if you would like you can sign up!')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        if not user.check_password(password):
            raise ValidationError('Password does not match provided email address.')


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(message="Please enter an email address."), user_exists])
    password = StringField('password', validators=[DataRequired(message="Password is required."), password_matches])
