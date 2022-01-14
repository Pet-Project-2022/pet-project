"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pets
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from argon2 import PasswordHasher

ph = PasswordHasher()

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
@jwt_required()
def handle_hello():
    current_user_id = get_jwt_identity()

    user = User.query.filter(User.id == current_user_id).first()

    response_body = {
        "message": f"Hello I Am {user.email}"        
    }
    return jsonify(response_body), 200


@api.route('/register', methods=["POST"])
def register_user():
    data = request.get_json()

    # Check if User exists
    if User.query.filter(User.email == data['email']).count() > 0:
        return 'user-exists', 400

    # Create the User
    user = User(
        name=data['name'],
        email=data['email'], 
        password=ph.hash(data['password']), 
        is_active=True
    )
    db.session.add(user)
    db.session.commit()

    return '', 204


@api.route('/login', methods=['POST'])
def login():
    data = request.get_json(force=True)
    name = data['name']
    email = data['email']
    password = data['password']


    user = User.query.filter(User.email == data['email']).first()
    if user is None:
        return '', 404
    
    try:
        ph.verify(user.password, data['password'])
    except: 
        return 'wrong-password', 400

    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route('/pets', methods=['GET'])
def get_pets():
    pets = Pets.query.all()
    all_pets = list(map(lambda pet: pet.serialize(), pets))

    return jsonify(all_pets), 200


@api.route('/pet', methods=["POST"])
def find_pet():
    body = request.get_json()
    print("", body)
    id = body["id"]
    gender = body["gender"]
    michrochip = body["michrochip"]
    found_date = body["found_date"]
    injured = body["injured"]
    possible_name = body["possible_name"]
    color = body["color"]
    size = body["size"]
    weight = body["weight"]
    picture = body["picture"]
    found_location = body["found_location"]
