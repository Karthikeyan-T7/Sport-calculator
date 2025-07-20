from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React frontend to connect to Flask backend

# Example basic route
@app.route('/')
def home():
    return 'Cricket Calculator Backend is running!'

# Later we will add your actual calculation routes here (batting stats, bowling stats, DLS, etc.)

if __name__ == '__main__':
    app.run(debug=True)