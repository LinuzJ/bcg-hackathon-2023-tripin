Agreed endpoint input

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
    <!-- distance: float, --> Add later?
}
```

Return:
Something

```
{
    trips: [
        {
            position: float[], # [long, lat]
            name: string,
            description: string,
            transportation: string,
            emission: float,
            cost: float
        },
    ]
}
```

## JSON <-> trips-client

From trips-client we need:

```
{
    trips: [
        {
            position: float[], # [long, lat]
            name: string,
            description: string
        }
    ]
}
```

## Deploy stuff

To get the flask server to work in production we need:

- nginx receives requests on port 80 to serve HTTP requests to Gunicorn
- Gunicorn forwards and translates the HTTP requests to WSGI understandable requests
- The flask application recieves WSGI requests from Gunicorn and returns through the pipeline out
