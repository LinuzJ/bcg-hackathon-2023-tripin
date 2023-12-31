from flask import Flask, request, jsonify 
from trips.trips import generate_trips
from flask_cors import CORS, cross_origin
import tempfile
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/generate-trips', methods=['POST'])
@cross_origin()
def trips():
    try:
        data = request.json

        print("----NEW TRIP REQUEST----")
        pretty_data = json.dumps(data, indent=4)
        print(pretty_data)
        # Generate trips
        trips = generate_trips(data)

        response = {
            'message': 'Trip generated successfully!',
            'data': trips
        }

        print("----NEW TRIP RESPONSE----")
        pretty_response = json.dumps(response, indent=4)
        print(pretty_response)

        return jsonify(response), 200
    except:
        response = {
            'message': 'Something went wrong! Plase try again',
        }
    
    return jsonify(response), 501

# @app.route('/generate-summVary-audio', methods=['POST'])
# @cross_origin()
# def generate():
#     data = request.json 

#     try:
#         audiofile = audio_generation(data)
        
#         # Send the temporary file as a response
#         # return send_file(audiofile, as_attachment=True, mimetype='audio/mpeg', download_name='output.mp3')
#         return audiofile
#     except Exception as e:
#         print("ERROR WHILE GENERATING AUDIO!!", e)
#         return jsonify({"error": e}), 501

if __name__ == '__main__':
    app.run(port=8000, debug=True)
