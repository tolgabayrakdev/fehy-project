from model import db
from model import User
from util.helper import Helper
from werkzeug.exceptions import NotFound, InternalServerError
from sqlalchemy.exc import SQLAlchemyError


class UserAuthService:
    @staticmethod
    def login(email: str, password: str):
        user = User.query.filter_by(email=email).first()
        check_password = Helper.matchHashedText(user.password, password)

        if user and check_password:
            access_token = Helper.generate_access_token(
                {"id": user.id, "email": user.email}
            )
            refresh_token = Helper.generate_refresh_token(
                {"id": user.id, "email": user.email}
            )
            return {"access_token": access_token, "refresh_token": refresh_token}
        else:
            return NotFound(description="User or password wrong!")

    @staticmethod
    def register(username, email, password):
        try:
            hash_password = Helper.generate_hash_password(password)
            user = User(username=username, email=email, password=hash_password)
            db.session.add(user)
            db.session.commit()
            return user
        except SQLAlchemyError as e:
            print(e)
            db.session.rollback()
            raise InternalServerError(
                description="Database error",
            )

    @staticmethod
    def change_password(email: str, current_password: str, new_password: str):
        user = User.query.filter_by(email=email).first()
        check_password = Helper.matchHashedText(current_password)
        try:
            if user and check_password:
                hashed_password = Helper.generate_hash_password(new_password)
                user.password = hashed_password
                db.session.commit()
            return {"success": True, "message": "Password changed."}
        except SQLAlchemyError:
            db.session.rollback(description="Database Error")
