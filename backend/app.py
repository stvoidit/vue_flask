from flask import Flask
from flask import render_template

from blueprint_something.view import blueprint_something
from blueprint_facts.view import blueprint_facts
app = Flask(__name__)
app.register_blueprint(blueprint_something)
app.register_blueprint(blueprint_facts)
app.config['JSON_SORT_KEYS'] = False
app.config['DEBUG'] = False

@app.route("/")
def homePage():
    return render_template("home.html")


app.run(threaded=False, port=5000)
