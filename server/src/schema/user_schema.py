from marshmallow import Schema, fields


class UserSchema(Schema):
    username = fields.String(required=True)
    email = fields.Email()
    password = fields.String(required=True)
