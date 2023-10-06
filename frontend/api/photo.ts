import axios from "axios";

async function photoGenerator(location: string): Promise<void> {
  // Define your API key
  const apiKey = "AIzaSyAWEPohy9CdHpz6j8-_zLDRsSWoDI9b2YU";
  // Step 1: Perform a Place Search
  const searchEndpoint =
    "https://maps.googleapis.com/maps/api/place/textsearch/json";
  const searchParams = {
    query: location,
    key: apiKey,
  };

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
          const photoEndpoint =
            "https://maps.googleapis.com/maps/api/place/photo";
          const photoParams = {
            maxwidth: "400",
            photoreference: photoReference,
            key: apiKey,
          };

          const photoResponse = await axios.get(photoEndpoint, {
            params: photoParams,
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          });

          if (photoResponse.status === 200) {
            // Step 3: Save the image to a file
            console.log(photoResponse.data);
            console.log("Photo downloaded successfully.");
          } else {
            console.error(
              `Error downloading photo: ${photoResponse.status} - ${photoResponse.statusText}`
            );
          }
        } else {
          console.error("No photo_reference found in the search results.");
        }
      } else {
        console.error("No results found for the search query.");
      }
    } else {
      console.error(
        `Error searching for places: ${response.status} - ${response.statusText}`
      );
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

export default photoGenerator;
