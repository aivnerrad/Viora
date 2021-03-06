"""empty message

Revision ID: 6daa6a71fc12
Revises: 86eec9367e0f
Create Date: 2021-10-20 18:16:20.962721

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6daa6a71fc12'
down_revision = '86eec9367e0f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'profile_pic')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('profile_pic', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
