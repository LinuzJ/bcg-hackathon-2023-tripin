import boto3
import pyaudio

import wave
import io

# Initialize Polly client
polly_client = boto3.client('polly')


budget = "1000"
time_of_year = "december"
starting_position = "dusseldorf"
climate = "mediterrenean"
duration = "2"


chosen_destinations = ["Palma de Maiorca","Istanbul", "Rome"]
# Text to speech
text = f"You asked for a trip from {starting_position}, to a {climate} climate, lasting {duration} weeks and you would like to travel in {time_of_year}. I'll see what I can do... According to my calculations three possible destinations with a budget of {budget} euros are {chosen_destinations[0]}, {chosen_destinations[1]} and {chosen_destinations[2]}"
response = polly_client.synthesize_speech(Text=text, OutputFormat='pcm', VoiceId='Joanna')

# Create a PyAudio stream
audio_stream = io.BytesIO(response['AudioStream'].read())
audio_player = pyaudio.PyAudio()
stream = audio_player.open(format=pyaudio.paInt16,
                          channels=1,
                          rate=16000,
                          output=True)

# Play the audio data
chunk_size = 1024
data = audio_stream.read(chunk_size)
while data:
    stream.write(data)
    data = audio_stream.read(chunk_size)

# Stop and close the audio stream
stream.stop_stream()
stream.close()
audio_player.terminate()
