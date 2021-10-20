"""empty message

Revision ID: 86eec9367e0f
Revises: 4ab29b939e6b
Create Date: 2021-10-19 22:28:10.885917

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '86eec9367e0f'
down_revision = '4ab29b939e6b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('likes', sa.Column('commentId', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'likes', 'comments', ['commentId'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'likes', type_='foreignkey')
    op.drop_column('likes', 'commentId')
    # ### end Alembic commands ###
