import json
def get_emission_factors():
    with open("static/emissions.json") as emission_file:
        emission_factor = json.load(emission_file)
    return emission_factor