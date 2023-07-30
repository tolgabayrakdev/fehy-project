from flask import Blueprint, jsonify, request
from service.user_auth_service import UserAuthService

user_auth_controller = Blueprint("user_auth_controller", __name__)


@user_auth_controller.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data["email"]
    password = data["password"]
    try:
        result = UserAuthService.login(email=email, password=password)
        if result:
            response = jsonify(
                {
                    "access_token": result["access_token"],
                    "refresh_token": result["refresh_token"],
                }
            )
        response.set_cookie("access_token", result["access_token"], httponly=True)
        response.set_cookie("refresh_token", result["refresh_token"], httponly=True)
        return response, 200
    except:
        return jsonify({"message": "Internal server error"})


@user_auth_controller.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data["username"]
    email = data["email"]
    password = data["password"]

    if not all([username, email, password]):
        return jsonify({"message": "Parameters is not correct"}), 400
    UserAuthService.register(username=username, email=email, password=password)
    return jsonify({"messgae": "Account created is succesfull"}), 201


@user_auth_controller.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"Message": "You are logged out"})
    response.delete_cookie("access_token")
    response.delete_cookie("refresh_token")
    return response, 200
