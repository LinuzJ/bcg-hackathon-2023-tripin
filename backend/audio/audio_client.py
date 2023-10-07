from audio.generate_audio import generate_audio


def audio_generation(inputs: dict): 
    binary_audio = generate_audio(inputs, False)

    return binary_audio