import openai
import json



openai.api_key = "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"

agreed_input= {
    "starting_position": "Dusseldorf",
    "activity": "sporty",
    "climate": "average",
    "budget": 5000,
    "time_of_year": "september",
    "single_trip": 1,
    "duration": 2
}


def fetch_trips(agreed_input):

    # Get inputs
    budget = str(agreed_input["budget"])
    time_of_year = agreed_input["time_of_year"]
    starting_position = agreed_input["starting_position"]
    climate = agreed_input["climate"]
    duration = str(agreed_input["duration"])
    activity = agreed_input["activity"]


    # Create prompt

    output_json = [
        {
            "Destination": "xxx (string)",
            "Position": "[longitude, latitude] (float [])",
            "Transportation": "CAR/PLANE/TRAIN/BUS (string)",
            "Description of activities": "Day 1: ... , Day 2: ..., ... (string)", # Add more days and activities as needed
        }
    ]
    output_json_str = json.dumps(output_json, indent=4)

    prompt = f"Please output a JSON file describing a trip and activities according to my budget of {budget} Euro in {time_of_year} starting from {starting_position}. The trip should be to a {climate} climate and should last {duration} weeks. I want to do a mix of {activity} activities. Find activities according to my budget.\nDo this for 9 possible destinations, first 3 where we stay in the continent, then 3 to another continent, the last 3 as close as possible(can be in the same country).\nStrict condition: Output it in exactly this JSON format:\n\n[{{\"Destination\", \"Position\", \"Transportation\", \"Description of activities\"}} , ...]\n, \"transportation\" should be only \"CAR\", \"PLANE\", \"TRAIN\", \"BUS\" \n Output Example JSON with the datatypes in brackets:\n{output_json_str} \n"

    # Call OpenAPI

    response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": f"{prompt}"}
                ])

    output = response['choices'][0]['message']['content']

    # Get output in agreed JSON and return

    """template_return = {
        "trips": [
            {
                "position": [40.0, 60.0],
                "name": "template",
                "description": "template",
                "transportation": "PLANE"
            },
        ]
    }"""

    return output

print(fetch_trips(agreed_input))
