from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    zipcode = db.Column(db.String(120), unique=False, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "zipcode": self.zipcode
        }


class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=True)
    gender = db.Column(db.String(120), unique=False, nullable=True)
    michrochip = db.Column(db.String(120), unique=True, nullable=True)
    found_date = db.Column(db.String(120), unique=False, nullable=True)
    injured = db.Column(db.String(120), unique=False, nullable=True)
    possible_name = db.Column(db.String(120), unique=False, nullable=True)
    color = db.Column(db.String(120), unique=False, nullable=False)
    size = db.Column(db.String(120), unique=False, nullable=True)
    weight = db.Column(db.String(120), unique=False, nullable=True)
    picture = db.Column(db.String(120), unique=False, nullable=True)
    zipcode = db.Column(db.String(120), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User")

    def __repr__(self):
        return '<Pet %r>' % self.pet

    def serialize(self):
        return {
            "id": self.id,
            "gender": self.gender,
            "michrochip": self.michrochip,
            "found_date": self.found_date,
            "injured": self.injured,
            "possible_name": self.possible_name,
            "color": self.color,
            "size": self.size,
            "weight": self.weight,
            "picture": self.picture,
            "zipcode": self.zipcode,
            "name": self.name,
            "user": self.user.serialize()
        }