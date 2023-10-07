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
Access the frontend and start trip'in at the following URL
http://3.77.236.93:3000/
