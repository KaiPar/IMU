from flask import Flask, render_template
from flask_socketio import SocketIO
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

socketio = SocketIO(app)

@socketio.on('message')
def handle_message():
    print("Message")

if __name__ == '__main__':
    socketio.run(app)