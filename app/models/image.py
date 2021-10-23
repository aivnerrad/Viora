from .db import db


class Image(db.Model):
    __tablename__ = "images"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, db.ForeignKey("users.email"))
    url = db.Column(db.String, nullable=False)

    user = db.relationship("User", back_populates="images")

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "url": self.url
        }
