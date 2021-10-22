from app.models import db, Image

# Adds a demo user, you can add other users here if you want
def seed_images():
    ImageOne = Image(email='demo@aa.io', url="https://www.spica-siam.com/wp-content/uploads/2017/12/user-demo.png")
    ImageTwo = Image(email='marnie@aa.io', url='https://pbs.twimg.com/profile_images/770394499/female.png')
    ImageThree = Image(email='bobbie@aa.io', url='https://i.pinimg.com/originals/80/70/40/807040a1e3dc5367e50a1701b2263234.jpg')
    db.session.add(ImageOne)
    db.session.add(ImageTwo)
    db.session.add(ImageThree)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
