from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/generate-trip', methods=['POST'])
def generate_trip():
    # You can access the request data using request.json or request.form
    data = request.json  # Assuming the data is in JSON format

    # Generate trips
    # trips = trips_(data)

    # Calculate emossions based on trips
    # emissions = calculate_emission(trips)

    # Calculate cost based on trips
    # cost = calculate_cost(trips)

    # Aggregate data into return
    # return_data = {
    # }

    response = {
        'message': 'Trip generated successfully!',
        'data': data
    }

    return jsonify(response), 200


if __name__ == '__main__':
    app.run(debug=True)
