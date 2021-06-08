from flask import Flask, request, jsonify
import json
from flask_cors import CORS, cross_origin
from flask_sslify import SSLify
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from config import Config

app = Flask(__name__)

cors = CORS(app)

sslify = SSLify(app)

cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
  'projectId': Config.credentials['project_id'],
})

db = firestore.client()

@app.route('/names')
@cross_origin()
def get_team_names():
    teams = []
    teams_ref = db.collection('teams')
    data = teams_ref.stream()
    for name in data:
        teams.append({'teamName': name.id})
    return jsonify(teams)

@app.route('/team/<string:name>')
@cross_origin()
def get_team_by_name(name):
    team_ref = db.collection('teams').document(name)
    team = team_ref.get()
    if team.exists:
        return jsonify(team.to_dict())
    else:
        return jsonify({})
