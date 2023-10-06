from flask import Flask, request, jsonify
from trips.trips import generate_trips
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/generate-trips', methods=['POST'])
@cross_origin()
def trips():
    data = request.json

    # Generate trips
    trips = generate_trips(data)

    response = {
        'message': 'Trip generated successfully!',
        'data': trips
    }

    return jsonify(response), 200


if __name__ == '__main__':
    app.run(port=8000, debug=True)
