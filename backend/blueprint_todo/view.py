from flask import Blueprint
from flask import render_template, jsonify
import requests

blueprint_facts = Blueprint('blueprint_facts', __name__,
                            template_folder='templates_facts',
                            url_prefix="/facts")


@blueprint_facts.route("/table-facts")
def VUE_todo():
    return render_template("todo.html")

@blueprint_facts.route("/getFacts")
def get_facts():
    urlCats = "https://some-random-api.ml/facts/cat"
    urlFoxs = "https://some-random-api.ml/facts/fox"
    factsData = {
        "cat": [],
        "fox": []
    }
    for _ in range(5):
        factCat = requests.get(urlCats).json()
        factFox = requests.get(urlFoxs).json()
        factsData["cat"].append(factCat)
        factsData["fox"].append(factFox)
    return jsonify(factsData)
