from app.models import db, Post

# Adds a demo user, you can add other users here if you want
def seed_posts():
    WeatherPostOne = Post(
        title='Weather Post', topicName='Weather', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='1')
    WeatherPostTwo = Post(
        title='Another Weather Post',topicName='Weather', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='2')
    EntertainmentPostOne = Post(
        title='Entertainment Post',topicName='Entertainment', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='3')
    EntertainmentPostTwo = Post(
        title='Another Entertainment Post',topicName='Entertainment', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='4')
    SportsPostOne = Post(
        title='Sports Post',topicName='Sports', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='1')
    SportsPostTwo = Post(
        title='Another Sports Post',topicName='Sports', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='2')
    FamilyPostOne = Post(
        title='Family Post',topicName='Family', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='3')
    FamilyPostTwo = Post(
        title='Another Family Post',topicName='Family', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='4')
    FoodPostOne = Post(
        title='Food Post',topicName='Food', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='1')
    FoodPostTwo = Post(
        title='Another Food Post',topicName='Food', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='2')
    WorkPostOne = Post(
        title='Work Post',topicName='Work', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='3')
    WorkPostTwo = Post(
        title='Another Work Post',topicName='Work', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='4')
    TravelPostOne = Post(
        title='Travel Post',topicName='Travel', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='1')
    TravelPostTwo = Post(
        title='Another Travel Post',topicName='Travel', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='2')
    HobbiesAndHealthPostOne = Post(
        title='Health Post',topicName='HobbiesAndHealth', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='3')
    HobbiesAndHealthPostTwo = Post(
        title='Hobby Post',topicName='HobbiesAndHealth', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='4')
    db.session.add(WeatherPostOne)
    db.session.add(WeatherPostTwo)
    db.session.add(EntertainmentPostOne)
    db.session.add(EntertainmentPostTwo)
    db.session.add(SportsPostOne)
    db.session.add(SportsPostTwo)
    db.session.add(FamilyPostOne)
    db.session.add(FamilyPostTwo)
    db.session.add(FoodPostOne)
    db.session.add(FoodPostTwo)
    db.session.add(WorkPostOne)
    db.session.add(WorkPostTwo)
    db.session.add(TravelPostOne)
    db.session.add(TravelPostTwo)
    db.session.add(HobbiesAndHealthPostOne)
    db.session.add(HobbiesAndHealthPostTwo)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
