from audio.audio_client import audio_generation
from flask import Flask, request, jsonify, send_file, send_from_directory
from trips.trips import generate_trips
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/generate-trips', methods=['POST'])
@cross_origin()
def trips():
    try:
        data = request.json

        # Generate trips
        trips = generate_trips(data)

        response = {
            'message': 'Trip generated successfully!',
            'data': trips
        }

        return jsonify(response), 200
    except:
        response = {
            'message': 'Something went wrong! Plase try again',
        }
    
    return jsonify(response), 501

@app.route('/generate-summary-audio', methods=['POST'])
@cross_origin()
def generate():
    data = request.json 

    try:
        audiofile = audio_generation(data)
        return send_file(audiofile, as_attachment=True, mimetype='audio/mpeg', download_name='output.mp3')
    except Exception as e:
        print("ERROR WHILE GENERATING AUDIO!!", e)
        return jsonify({"error": e}), 501

if __name__ == '__main__':
    app.run(port=8000, debug=True)
