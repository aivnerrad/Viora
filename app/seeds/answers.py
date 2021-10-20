from app.models import db, Answer

# Adds a demo user, you can add other users here if you want
def seed_answers():
    WeatherAnswerOne = Answer(
        questionId='1', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='1')
    WeatherAnswerTwo = Answer(
        questionId='2', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='2')
    EntertainmentAnswerOne = Answer(
        questionId='3', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='3')
    EntertainmentAnswerTwo = Answer(
        questionId='4', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='4')
    SportsAnswerOne = Answer(
        questionId='5', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='1')
    SportsAnswerTwo = Answer(
        questionId='6', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='2')
    FamilyAnswerOne = Answer(
        questionId='7', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='3')
    FamilyAnswerTwo = Answer(
        questionId='8', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='4')
    FoodAnswerOne = Answer(
        questionId='9', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='1')
    FoodAnswerTwo = Answer(
        questionId='10', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='2')
    WorkAnswerOne = Answer(
        questionId='11', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='3')
    WorkAnswerTwo = Answer(
        questionId='12', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='4')
    TravelAnswerOne = Answer(
        questionId='13', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='1')
    TravelAnswerTwo = Answer(
        questionId='14', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='2')
    HobbiesAndHealthAnswerOne = Answer(
        questionId='15', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='3')
    HobbiesAndHealthAnswerTwo = Answer(
        questionId='16', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='4')
    db.session.add(WeatherAnswerOne)
    db.session.add(WeatherAnswerTwo)
    db.session.add(EntertainmentAnswerOne)
    db.session.add(EntertainmentAnswerTwo)
    db.session.add(SportsAnswerOne)
    db.session.add(SportsAnswerTwo)
    db.session.add(FamilyAnswerOne)
    db.session.add(FamilyAnswerTwo)
    db.session.add(FoodAnswerOne)
    db.session.add(FoodAnswerTwo)
    db.session.add(WorkAnswerOne)
    db.session.add(WorkAnswerTwo)
    db.session.add(TravelAnswerOne)
    db.session.add(TravelAnswerTwo)
    db.session.add(HobbiesAndHealthAnswerOne)
    db.session.add(HobbiesAndHealthAnswerTwo)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_answers():
    db.session.execute('TRUNCATE answers RESTART IDENTITY CASCADE;')
    db.session.commit()
