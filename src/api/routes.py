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
    content = request.get_json()
    print("", body)
    id = content["id"]
    gender = content["gender"]
    michrochip = content["michrochip"]
    found_date = content["found_date"]
    injured = content["injured"]
    possible_name = content["possible_name"]
    color = content["color"]
    size = content["size"]
    weight = content["weight"]
    picture = content["picture"]
    found_location = content["found_location"]

    return jsonify(pet.serialize()), 200


@api.route('/user', methods=["POST"])
def create_user():
    content = request.get_json()
    print("", content)
    name = content["name"]
    email = content["email"]
    password = content["password"]
    user_exists = User.query.filter_by(email=email).first()
    print("", user_exists)
    if user_exists is not None:
        raise APIException("user already exists", 400)

    user = User(name=name,
    email=email,
    password=password)

    db.session.add(user)
    db.session.commit()

    return jsonify(user.serialize()), 200

