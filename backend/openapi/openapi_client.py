import openai
import json

import random
import time

openai.api_key = "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"

""" agreed_input = {
    "starting_position": "Madrid",
    "activity": "cultural",
    "climate": "mountaineous",
    "budget": "3000",
    "time_of_year": "june",
    "single_trip": 1,
    "duration": 3
} """


def fetch_trips(agreed_input):
    start = time.time()
    try:
        # Get inputs
        budget = str(agreed_input["budget"])
        time_of_year = agreed_input["time_of_year"]
        starting_position = agreed_input["starting_position"]
        climate = agreed_input["climate"]
        duration = str(agreed_input["duration"])
        activity = agreed_input["activity"]
        duration_days = str(int(duration) * 7 - 1)

        prompt = f"Please output a python list with a list of 9 travel destinations according to my budget of {budget} Euros in {time_of_year} starting from {starting_position}. The trip should be to a {climate} climate and should last {duration} weeks. I want to do a mix of {activity} activities. Find activities according to my budget. \n Do this for 9 possible destinations, first 3 where we stay in the continent, then 3 to another continent, the last 3 as close as possible to our starting position(can be in the same country).\n Strict condition: the output should be exactly like this: [\"Destination 1\", \"Destination 2\", ..., \"Destination 9\"] \n\n Each destinations in the list is in the format \"Place,  Country\" \n"

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": f"{prompt}"}])

        output = response['choices'][0]['message']['content']

        # Convert the string back to a Python list
        destination_list = json.loads(output)

        # Split destinations into three groups
        first_three_destinations = destination_list[:3]
        next_three_destinations = destination_list[3:6]
        last_three_destinations = destination_list[6:]

        # Randomly choose one destination from each group
        random_first_destination = random.choice(first_three_destinations)
        random_next_destination = random.choice(next_three_destinations)
        random_last_destination = random.choice(last_three_destinations)

        # Store the randomly chosen destinations in a variable
        chosen_destinations = [random_first_destination,
                               random_next_destination, random_last_destination]
        str_chosen_destinations = str(chosen_destinations)

        # Create prompt

        output_json = [
            {
                "trips": [
                    {
                        "name": "(destination name) (string)",
                        "position": "[longitude, latitude] (float[] )",
                        "transportation": "DRIVE/PLANE/TRANSIT/TRANSIT (string)",
                        "airport": "(closest airport to the destination) (string)",
                        "description": f"Day 1: ... , Day 2: ... , Day 3: ..., Day 4: ..., ... (all remaining days, day by day) (string)",
                    }
                ]
            }
        ]

        output_json_str = json.dumps(output_json, indent=4)

        prompt = f"Please output only a JSON file describing a trip and activities according to my {budget} budget in {time_of_year} starting from {starting_position}. The trip should last {duration} weeks. I want to do a mix of {activity} activities. Find activities according to my budget. \n Do this for the following 3 destinations: {str_chosen_destinations}. \n Strict condition 1: I want activities for the complete {duration_days} days. \nStrict condition 2: Output it in exactly this JSON format:\n\n ”trips: [ {{\"name: \", \"position: \", \"transportation: \", \"airport: \",  \"Description of activities: \"}}  , ...]\n \n \"transportation\" should be only \"DRIVE\", \"PLANE\", \"TRANSIT\" \n Output Example JSON with the datatypes in brackets:\n{output_json_str} \n"

        # Call OpenAPI

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": f"{prompt}"}])

        output = json.loads(response['choices'][0]['message']['content'])

        # Get output in agreed JSON and return
        # """template_return = {
        #         "trips": [
        #             {
        #                 "position": [40.0, 60.0],
        #                 "name": "template",
        #                 "description": "template",
        #                 "transportation": "PLANE"
        #             },
        #         ]
        #     }"""
        end = time.time()
        print("OPENAPI EXECUTION TIME:", end - start)
        return output
    except json.JSONDecodeError:
        # Handle JSON decoding error, for example, by retrying the function
        print("Error decoding JSON. Retrying...")
        return fetch_trips(agreed_input)
    except Exception as e:
        # Handle other exceptions if necessary
        print(f"An error occurred: {e}")
        raise e  # Re-raise the exception after handling if required


# fetch_trips(agreed_input)
# print(fetch_trips(agreed_input))
