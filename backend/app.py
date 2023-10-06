from flask import Flask, request, jsonify
from trips.trips import generate_trips

app = Flask(__name__)


@app.route('/generate-trips', methods=['POST'])
def test():
    # You can access the request data using request.json or request.form
    data = request.json  # Assuming the data is in JSON format

    # Generate trips
    trips = generate_trips(data)

    response = {
        'message': 'Trip generated successfully!',
        'data': trips
    }

    return jsonify(response), 200


if __name__ == '__main__':
    app.run(debug=True)
