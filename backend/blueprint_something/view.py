from flask import Blueprint
from flask import render_template, jsonify
import requests

blueprint_something = Blueprint('blueprint_something', __name__,
                             template_folder='templates_something',
                             url_prefix="/something")

@blueprint_something.route("/cats")
def VUE_something():
    return render_template("something.html")

@blueprint_something.route("/get_pussy")
def XHR_simulation():
    url = "http://aws.random.cat/meow"
    catsCollections = []
    for _ in range(12):
        img_url = requests.get(url).json()
        catsCollections.append(img_url)
    return jsonify(catsCollections)
