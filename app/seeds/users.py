from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        firstName='Demo', lastName='Demo', aboutMe='I am a demo user!', email='demo@aa.io', password='password')
    marnie = User(
        firstName='Marnie', lastName='Edgar', aboutMe="Fake User", email='marnie@aa.io', password='password')
    bobbie = User(
        firstName='Bobby', lastName="Boucher", aboutMe="Momma says that's the devil!", email='bobbie@aa.io', password='password')
    darren = User(
        firstName='Darren', lastName="Via", aboutMe="App Academy Grad, Developer", email='aivnerrad1993@gmail.com', password='aivnerrad')
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(darren)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
