import tempfile
import boto3
import pyaudio
from pydub import AudioSegment

import wave
import io

# Initialize Polly client
polly_client = boto3.client('polly')


# budget = "1000"
# time_of_year = "december"
# starting_position = "dusseldorf"
# climate = "mediterrenean"
# duration = "2"

schema = {
    "budget": "1000",
    "time_of_year": "december",
    "starting_position": "dusseldorf",
    "climate": "mediterrenean",
    "duration": "2",
    "destinations": ["Palma de Maiorca","Istanbul", "Rome"]
}

def generate_audio(inputs = schema, stream_audio = True):
    starting_position = inputs["starting_position"] 
    climate = inputs["climate"] 
    duration = inputs["duration"] 
    time_of_year = inputs["time_of_year"] 
    budget = inputs["budget"] 
    chosen_destinations = inputs["destinations"]

    # Text to speech
    text = f"You asked for a trip from {starting_position}, to a {climate} climate, lasting {duration} weeks and you would like to travel in {time_of_year}. I'll see what I can do... According to my calculations three possible destinations with a budget of {budget} euros are {chosen_destinations[0]}, {chosen_destinations[1]} and {chosen_destinations[2]}"
    response = polly_client.synthesize_speech(Text=text, OutputFormat='pcm', VoiceId='Joanna')

    rate = 16000
    # Create a PyAudio stream
    audio_stream = io.BytesIO(response['AudioStream'].read())
    audio_player = pyaudio.PyAudio()
    stream = audio_player.open(format=pyaudio.paInt16,
                            channels=1,
                            rate=rate,
                            output=True)

    # Play the audio data
    chunk_size = 1024
    data = audio_stream.read(chunk_size)
    
    if stream_audio:
        while data:
            stream.write(data)
            data = audio_stream.read(chunk_size)

        # Stop and close the audio stream
        stream.stop_stream()
        stream.close()
        audio_player.terminate()
    else:
        # while data:
        #     stream.write(data)
        #     data = audio_stream.read(chunk_size)

        # # Stop and close the audio stream
        # stream.stop_stream()
        # stream.close()
        # audio_player.terminate()

        return data
        # # Save to a temporary WAV file
        # temp_wav_file = tempfile.NamedTemporaryFile(delete=False, suffix=".wav")
        # with open(temp_wav_file.name, 'wb') as temp_file:
        #     temp_file.write(audio_stream.getvalue())

        # # Convert the WAV file to MP3
        # filename = tempfile.mktemp(suffix=".mp3")
        # pcm_audio = AudioSegment.from_wav(temp_wav_file.name)
        # pcm_audio.export(filename, format="mp3")

        # # Clean up temporary files
        # temp_wav_file.close()
        # return filename

# generate_audio({"1":1}, False)