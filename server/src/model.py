from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


user_interest = db.Table(
    "user_interest",
    db.Column("user_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("interest_id", db.Integer, db.ForeignKey("interests.id")),
)


quote_user = db.Table(
    "quote_user",
    db.Column("user_id", db.Integer, db.ForeignKey("users.id")),
    db.Column("quote_id", db.Integer, db.ForeignKey("quotes.id")),
)


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(250), unique=True, nullable=False)
    email = db.Column(db.String(), unique=True, nullable=False)
    password = db.Column(db.String(), nullable=False)
    role_id = db.Column(db.Integer, db.ForeignKey("roles.id"), default=1)
    area_of_interest = db.relationship(
        "Interest",
        secondary=user_interest,  # Yardımcı tabloyu belirtin
        backref=db.backref("user_interests", lazy=True),
        lazy="subquery",
    )
    users = db.relationship(
        "User",
        secondary=quote_user,  # Yardımcı tabloyu belirtin
        backref=db.backref("user_quotes", lazy=True),
        lazy="subquery",
    )
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }


class Role(db.Model):
    __tablename__ = "roles"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)


class Interest(db.Model):
    __tablename__ = "interests"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }


class Quote(db.Model):
    __tablename__ = "quotes"
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow)
