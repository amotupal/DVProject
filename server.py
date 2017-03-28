from flask import Flask
from flask import request


app = Flask(__name__)


@app.route('/todo/api/v1.0/filter', methods=['POST'])
def create_task():
    # if(((not request.json) or (not 'title')) in request.json):
    #     abort(400)

    task = {
        'id': tasks[-1]['id'] + 1,
        'title': request.json['title'],
        'description': request.json.get('description', ""),
        'done': False
    }
    tasks.append(task)
    return jsonify({'task': task}), 201


@app.route("/")
def hello():
    return("Hello World!")


if __name__ == "__main__":
    app.run()
