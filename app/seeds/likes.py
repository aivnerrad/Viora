from app.models import db, Like

# Adds a demo user, you can add other users here if you want
def seed_likes():
    LikeOne = Like(postId='1', userId='1')
    LikeTwo = Like(answerId='2', userId='2')
    LikeThree = Like(commentId='3', userId='3')
    LikeFour = Like(postId='4', userId='4')
    LikeFive = Like(answerId='5', userId='1')
    LikeSix = Like(commentId='6', userId='2')
    LikeSeven = Like(postId='7', userId='3')
    LikeEight = Like(answerId='8', userId='4')
    LikeNine = Like(commentId='9', userId='1')
    LikeTen = Like(postId='10', userId='2')
    LikeEleven = Like(answerId='11', userId='3')
    LikeTwelve = Like(commentId='12', userId='4')
    LikeThirteen = Like(postId='13', userId='1')
    LikeFourteen = Like(answerId='14', userId='2')
    LikeFifteen = Like(commentId='15', userId='3')
    LikeSixteen = Like(postId='16', userId='4')
    db.session.add(LikeOne)
    db.session.add(LikeTwo)
    db.session.add(LikeThree)
    db.session.add(LikeFour)
    db.session.add(LikeFive)
    db.session.add(LikeSix)
    db.session.add(LikeSeven)
    db.session.add(LikeEight)
    db.session.add(LikeNine)
    db.session.add(LikeTen)
    db.session.add(LikeEleven)
    db.session.add(LikeTwelve)
    db.session.add(LikeThirteen)
    db.session.add(LikeFourteen)
    db.session.add(LikeFifteen)
    db.session.add(LikeSixteen)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
