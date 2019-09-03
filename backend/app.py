from flask import Flask
from flask import render_template

app = Flask(__name__,
            template_folder="../frontend/frontend/templates",
            static_folder='../frontend/frontend/static')


@app.route('/', defaults={'p': ''})
@app.route('/index/', defaults={'p': ''})
@app.route('/index/<path:p>')
def index(p):
    return render_template('index.html')


@app.route('/table')
def table():
    return render_template('table.html')


if __name__ == '__main__':
    app.run(
        debug=True,
        threaded=False
    )
