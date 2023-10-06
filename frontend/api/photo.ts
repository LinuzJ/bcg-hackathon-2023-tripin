import axios from 'axios';

interface UnsplashResponse {
    results: {
        urls: {
            raw: string;
        };
    }[];
}

async function imageGenerator(location: string): Promise<string | null> {
    // Your Unsplash API key
    const apiKey = '8lUqDkIz_wzBmP1humc8zMF2U76DM_P8tiJsGcAmWOE';
    // Text input for the image search
    const query = location;
    // API endpoint for searching photos
    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;

    try {
        // Send a GET request to the Unsplash API
        const response = await axios.get<UnsplashResponse>(apiUrl);
        // Get the URL of the first image from the search results
        const data = response.data;
        if (data.results && data.results.length > 0) {
            const imageUrl: string = data.results[0].urls.raw;
            return imageUrl;
        } else {
            console.error('No results found for the given location.');
            return null;
        }
    } catch (error: any) {
        console.error(`Error: ${(error as Error).message}`);
        return null;
    }
}

async function getImage(city: string) {
    const imageUrl = await imageGenerator(city);
    if (imageUrl) {
        console.log('Image URL:', imageUrl);
        // You can use imageUrl directly in your application or return it as needed
    } else {
        console.log('Image not found.');
    }
}

// Example usage
const city = 'Brussels';
getImage(city);



