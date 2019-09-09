from flask import Flask, blueprints
from flask import render_template

from blueprint_something.view import blueprint_something
from blueprint_todo.view import blueprint_facts
app = Flask(__name__)
app.register_blueprint(blueprint_something)
app.register_blueprint(blueprint_facts)
app.config['JSON_SORT_KEYS'] = False
app.config['DEBUG'] = True
app.run(threaded=False, port=5000)
