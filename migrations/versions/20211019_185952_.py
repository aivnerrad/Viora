"""empty message

Revision ID: 4ab29b939e6b
Revises: 70617112f74e
Create Date: 2021-10-19 18:59:52.799480

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4ab29b939e6b'
down_revision = '70617112f74e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('answers_questionId_fkey', 'answers', type_='foreignkey')
    op.create_foreign_key(None, 'answers', 'questions', ['questionId'], ['id'])
    op.create_foreign_key(None, 'posts', 'topics', ['topicName'], ['title'])
    op.create_foreign_key(None, 'questions', 'topics', ['topicName'], ['title'])
    op.add_column('users', sa.Column('profile_pic', sa.String(length=255), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'profile_pic')
    op.drop_constraint(None, 'questions', type_='foreignkey')
    op.drop_constraint(None, 'posts', type_='foreignkey')
    op.drop_constraint(None, 'answers', type_='foreignkey')
    op.create_foreign_key('answers_questionId_fkey', 'answers', 'posts', ['questionId'], ['id'])
    # ### end Alembic commands ###
