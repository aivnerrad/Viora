from flask.cli import AppGroup
from .users import seed_users, undo_users
from .topics import seed_topics, undo_topics
from .questions import seed_questions, undo_questions
from .posts import seed_posts, undo_posts
from .comments import seed_comments, undo_comments
from .answers import seed_answers, undo_answers
from .likes import seed_likes, undo_likes
from .images import seed_images, undo_images

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_topics()
    seed_questions()
    seed_posts()
    seed_comments()
    seed_answers()
    seed_likes()
    seed_images()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_topics()
    undo_questions()
    undo_posts()
    undo_comments()
    undo_answers()
    undo_likes()
    undo_images()
    # Add other undo functions here
