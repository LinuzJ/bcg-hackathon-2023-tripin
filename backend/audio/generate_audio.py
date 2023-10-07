import tempfile
import boto3
import pyaudio
from pydub import AudioSegment

import wave
import io

# Initialize Polly client
polly_client = boto3.client('polly')


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
    return audio_stream.getvalue()