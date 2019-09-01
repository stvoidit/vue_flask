from flask import Flask
from flask import render_template

app = Flask(__name__,
            template_folder="../frontend/frontend/templates",
            static_folder='../frontend/frontend/static')


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/table')
def table():
    return render_template('table.html')


if __name__ == '__main__':
    app.run(
        debug=True,
        threaded=False
    )
