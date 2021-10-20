from app.models import db, Topic


# Adds a demo user, you can add other users here if you want
def seed_topics():
    Weather = Topic(
        title='Weather', coverPhoto="https://cdn.pixabay.com/photo/2015/11/22/15/16/lightning-1056419_960_720.jpg")
    Entertainment = Topic(
        title='Entertainment', coverPhoto="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_960_720.jpg")
    Sports = Topic(
        title='Sports', coverPhoto="https://cdn.pixabay.com/photo/2016/01/19/15/05/baseball-field-1149153_960_720.jpg")
    Family = Topic(
        title='Family', coverPhoto="https://cdn.pixabay.com/photo/2017/09/05/11/37/baby-2717347_960_720.jpg")
    Food = Topic(
        title='Food', coverPhoto="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg")
    Work = Topic(
        title='Work', coverPhoto="https://cdn.pixabay.com/photo/2016/11/21/15/13/work-harder-1845901_960_720.jpg")
    Travel = Topic(
        title='Travel', coverPhoto="https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_960_720.jpg")
    Hobbies_And_Health = Topic(
        title='Hobbies And Health', coverPhoto="https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361_960_720.jpg")
    db.session.add(Weather)
    db.session.add(Entertainment)
    db.session.add(Sports)
    db.session.add(Family)
    db.session.add(Food)
    db.session.add(Work)
    db.session.add(Travel)
    db.session.add(Hobbies_And_Health)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_topics():
    db.session.execute('TRUNCATE topics RESTART IDENTITY CASCADE;')
    db.session.commit()
