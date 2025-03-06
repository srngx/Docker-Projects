from flask import Flask
import random

app = Flask(__name__)

def calculate_lucky_numbers():
    numbers = random.sample(range(1,53),5)
    return str(numbers)[1:-1]

@app.route("/")
def hello():

    message = "<h1 style=\"color: #001cff;\">Hello world from intel cloud.</h1>"
    message += "<h3>Version 2.0</h3>"
    message += "<p> Your lucky numbers are <b>" 
    message += calculate_lucky_numbers() + "</b></p>"
    return (message)

app.run(host='0.0.0.0', port=8080, debug=True)
