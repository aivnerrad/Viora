from app.models import db, Comment

# Adds a demo user, you can add other users here if you want
def seed_comments():
    WeatherCommentOne = Comment(
        postId='1', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='1')
    WeatherCommentTwo = Comment(
        postId='2', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='2')
    EntertainmentCommentOne = Comment(
        postId='3', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='3')
    EntertainmentCommentTwo = Comment(
        postId='4', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='4')
    SportsCommentOne = Comment(
        postId='5', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='1')
    SportsCommentTwo = Comment(
        postId='6', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='2')
    FamilyCommentOne = Comment(
        postId='7', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='3')
    FamilyCommentTwo = Comment(
        postId='8', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='4')
    FoodCommentOne = Comment(
        postId='9', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='1')
    FoodCommentTwo = Comment(
        postId='10', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='2')
    WorkCommentOne = Comment(
        postId='11', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='3')
    WorkCommentTwo = Comment(
        postId='12', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='4')
    TravelCommentOne = Comment(
        postId='13', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='1')
    TravelCommentTwo = Comment(
        postId='14', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='2')
    HobbiesAndHealthCommentOne = Comment(
        postId='15', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='3')
    HobbiesAndHealthCommentTwo = Comment(
        postId='16', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', userId='4')
    db.session.add(WeatherCommentOne)
    db.session.add(WeatherCommentTwo)
    db.session.add(EntertainmentCommentOne)
    db.session.add(EntertainmentCommentTwo)
    db.session.add(SportsCommentOne)
    db.session.add(SportsCommentTwo)
    db.session.add(FamilyCommentOne)
    db.session.add(FamilyCommentTwo)
    db.session.add(FoodCommentOne)
    db.session.add(FoodCommentTwo)
    db.session.add(WorkCommentOne)
    db.session.add(WorkCommentTwo)
    db.session.add(TravelCommentOne)
    db.session.add(TravelCommentTwo)
    db.session.add(HobbiesAndHealthCommentOne)
    db.session.add(HobbiesAndHealthCommentTwo)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
