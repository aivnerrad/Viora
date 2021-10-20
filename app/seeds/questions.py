from app.models import db, Question

# Adds a demo user, you can add other users here if you want
def seed_questions():
    WeatherQuestionOne = Question(
        title='Weather Question?', topicName='Weather', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='1')
    WeatherQuestionTwo = Question(
        title='Another Weather Question?',topicName='Weather', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='2')
    EntertainmentQuestionOne = Question(
        title='Entertainment Question?',topicName='Entertainment', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='3')
    EntertainmentQuestionTwo = Question(
        title='Another Entertainment Question?',topicName='Entertainment', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='4')
    SportsQuestionOne = Question(
        title='Sports Question?',topicName='Sports', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='1')
    SportsQuestionTwo = Question(
        title='Another Sports Question?',topicName='Sports', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='2')
    FamilyQuestionOne = Question(
        title='Family Question?',topicName='Family', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='3')
    FamilyQuestionTwo = Question(
        title='Another Family Question?',topicName='Family', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='4')
    FoodQuestionOne = Question(
        title='Food Question?',topicName='Food', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='1')
    FoodQuestionTwo = Question(
        title='Another Food Question?',topicName='Food', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='2')
    WorkQuestionOne = Question(
        title='Work Question?',topicName='Work', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='3')
    WorkQuestionTwo = Question(
        title='Another Work Question?',topicName='Work', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='4')
    TravelQuestionOne = Question(
        title='Travel Question?',topicName='Travel', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='1')
    TravelQuestionTwo = Question(
        title='Another Travel Question?',topicName='Travel', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='2')
    HobbiesAndHealthQuestionOne = Question(
        title='Health Question?',topicName='HobbiesAndHealth', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='3')
    HobbiesAndHealthQuestionTwo = Question(
        title='Hobby Question?',topicName='HobbiesAndHealth', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo donec enim diam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Vestibulum morbi blandit cursus risus at ultrices.', userId='4')
    db.session.add(WeatherQuestionOne)
    db.session.add(WeatherQuestionTwo)
    db.session.add(EntertainmentQuestionOne)
    db.session.add(EntertainmentQuestionTwo)
    db.session.add(SportsQuestionOne)
    db.session.add(SportsQuestionTwo)
    db.session.add(FamilyQuestionOne)
    db.session.add(FamilyQuestionTwo)
    db.session.add(FoodQuestionOne)
    db.session.add(FoodQuestionTwo)
    db.session.add(WorkQuestionOne)
    db.session.add(WorkQuestionTwo)
    db.session.add(TravelQuestionOne)
    db.session.add(TravelQuestionTwo)
    db.session.add(HobbiesAndHealthQuestionOne)
    db.session.add(HobbiesAndHealthQuestionTwo)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_questions():
    db.session.execute('TRUNCATE questions RESTART IDENTITY CASCADE;')
    db.session.commit()
