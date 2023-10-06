import axios from 'axios';

async function imageGenerator(location: string): Promise<string | null> {
    // Your Unsplash API key
    const apiKey = '8lUqDkIz_wzBmP1humc8zMF2U76DM_P8tiJsGcAmWOE';
    // Text input for the image search
    const query = location;
    // API endpoint for searching photos
    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;

  try {
    const response = await axios.get(searchEndpoint, { params: searchParams });

    if (response.status === 200) {
      const data = response.data;
      // Check if there are results
      if (data.results && data.results.length > 0) {
        // Extract the first result's photo_reference (you can loop through results if needed)
        const photoReference = data.results[0].photos?.[0]?.photo_reference;

        if (photoReference) {
          // Step 2: Use the photo_reference to fetch the image
          const photoEndpoint = 'https://maps.googleapis.com/maps/api/place/photo';
          const photoParams = {
            maxwidth: '400',
            photoreference: photoReference,
            key: apiKey,
          };

          const photoResponse = await axios.get(photoEndpoint, { params: photoParams });

          if (photoResponse.status === 200) {
            // Step 3: Save the image to a file
            fs.writeFileSync('photo.jpg', photoResponse.data);
            console.log('Photo downloaded successfully.');
          } else {
            console.error(`Error downloading photo: ${photoResponse.status} - ${photoResponse.statusText}`);
          }
        } else {
          console.error('No photo_reference found in the search results.');
        }
      } else {
        console.error('No results found for the search query.');
      }
    } else {
      console.error(`Error searching for places: ${response.status} - ${response.statusText}`);
    }
}

photoGenerator('Brussels');


