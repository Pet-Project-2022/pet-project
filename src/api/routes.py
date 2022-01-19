"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Pet
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
    #TODO filter by color, zipcode & species 
    all_pets = [x.serialize() for x in pets]

    return jsonify(all_pets), 200


@api.route('/pets/<int:id>', methods=['GET'])
def find_single_pet(id):
    single_pet = Pet.query.get(id)
    print('single pet')

    return jsonify(single_pet.serialize()), 200


@api.route('/pets', methods=["POST"])
def store_pet():
    content = request.get_json()
    print("", body)
    animal_id = content["animal_id"]
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

    return "", 204


@api.route('/pet/<id>', methods=['DELETE'])
def remove_pet(id):
    delete_pet = Pet.query.get(id)
    #if delete_pet is None:
    #    raise 'Pet not found', 404
    db.session.delete(delete_pet)
    db.session.commit()
    return "", 204