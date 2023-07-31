from flask import Flask
from flask_cors import CORS
from model import db
from controller.user_auth_controller import user_auth_controller

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://root:root@localhost/postgres"

db.init_app(app)
with app.app_context():
    db.create_all()

CORS(app, supports_credentials=True)

app.register_blueprint(user_auth_controller, url_prefix="/api/v1/auth")

if __name__ == "__main__":
    app.run(port=5000)
