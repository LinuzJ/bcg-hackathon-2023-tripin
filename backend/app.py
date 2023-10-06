from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/generate-trip', methods=['POST'])
def generate_trip():
    # You can access the request data using request.json or request.form
    data = request.json  # Assuming the data is in JSON format

    # Process the data and generate the trip here
    # Replace this with your actual trip generation logic

    # Example response
    response = {
        'message': 'Trip generated successfully!',
        'data': data
    }

    return jsonify(response), 200


if __name__ == '__main__':
    app.run(debug=True)
