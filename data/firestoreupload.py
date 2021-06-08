import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json

cred = credentials.Certificate('./credentials.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

with open('./tourney_team.json') as f:
  team_data = json.load(f)
for data in team_data:
    doc_ref = db.collection('teams').document(data['teamName'])
    doc_ref.set({
        'teamName': data['teamName'],
        'off_reb_percent': data['off_reb_percent'],
        'def_reb_percent_allow': data['def_reb_percent_allow'],
        'ft_over_fga_allow': data['ft_over_fga_allow'],
        'efg_percent': data['efg_percent'],
        'ft_rate': data['ft_rate'],
        'to_percent_allow': data['to_percent_allow'],
        'off_rtg': data['off_rtg'],
        'pace': data['pace'],
        'three_fg_trend': data['three_fg_trend'],
        'ft_over_fga': data['ft_over_fga'],
        'to_percent': data['to_percent'],
        'efg_percent_allow': data['efg_percent_allow'],
        'def_rtg': data['def_rtg'],
        'ts_percent': data['ts_percent']
    })