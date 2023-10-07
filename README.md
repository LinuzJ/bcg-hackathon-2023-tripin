![image](https://github.com/LinuzJ/bcg-hackathon-2023-tripin/assets/13162902/10925fc2-10b5-4cce-829e-e44470d4ac0b)

### OUR VISION
"At Trip'in, we envisage a future where travel transcends mere exploration, becoming a conscious, sustainable adventure that leaves a positive imprint on our planet. Our mission is to pioneer a new era of eco-conscious smart travel by harnessing cutting-edge Generative AI technology, revolutionizing the way individuals plan their journeys. We are committed to removing the burden of prompt engineering from end-users, ensuring that sustainable travel is accessible and hassle-free for all.

In our vision, every traveler, whether embarking on a local escapade or a global odyssey, effortlessly accesses our user-friendly platform. With simple interactions, users receive personalized travel recommendations that prioritize eco-friendly choices at every stage of their trip. From selecting eco-conscious transportation options to eco-certified accommodations, and from promoting low-impact activities to suggesting sustainable dining experiences, our AI-powered travel companion empowers users to make informed decisions that minimize their carbon footprint.

Our dedication extends beyond convenience. We aspire to foster a global community of responsible travelers who not only understand their environmental impact but also actively engage in reducing it. Through partnerships with environmental organizations and carbon offset initiatives, Trip'in aims to facilitate travelers in making meaningful contributions to environmental conservation while exploring the wonders of our world.

We believe that by seamlessly blending advanced technology with a steadfast commitment to sustainability, we can redefine the travel industry. Our vision is to inspire a new era of travel—one that respects our planet, nurtures cultural understanding, promotes responsible tourism, and enriches the lives of all who embark on a journey with Trip'in.

In pursuit of this vision, we are dedicated to pushing the boundaries of AI and sustainability, shaping a future where travel transcends boundaries and becomes a catalyst for positive change. Join us on our journey to create a world where travel is not just smart but also truly sustainable, leaving a legacy of environmental responsibility for generations to come."

## STARTING FE & BE ON EC2

# SSH User
Log into the EC2 instance by SSH using belows user and the EC2 .pem certificate
```
ubuntu@3.77.236.93
```

# Build FE
Build the frontend via npm 
```
npm run build
```

# Start FE
Start the frontend next.js application in the background on port 3000
```
pm2 start npm --name trippin-app -- run start -- -p 3000
```
# Start BE:
Start up the backend flask application to run in the background on port 80
```
pm2 start app.py --interpreter python3
```

# Display Logs:
Optionally display the FE & BE logs within the SSH session
```
pm2 logs
```
# App Access - TRIP'IN
![image](https://github.com/LinuzJ/bcg-hackathon-2023-tripin/assets/13162902/e2cd5524-fd26-4431-b006-14a4e2a22c01)


Access the frontend and start trip'in at the following URL
http://3.77.236.93:3000/


## SCHEMA FOR BE ENDPOINTS

```
/generate-trip
```

Body:

```
{
    starting_position: string,
    activity: string,
    climate: string,
    budget: float,
    time_of_year: string,
    single_trip: bool,
    duration: string,
}
```
