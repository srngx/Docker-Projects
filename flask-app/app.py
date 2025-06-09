from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World, This is Python Flask App'

@app.route('/health')
def health():
    return 'Server is up and running'
