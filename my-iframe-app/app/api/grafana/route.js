export async function GET(request) {
  const bearerToken = 'bearer token'; // Set your Bearer token here
  const url = 'http://localhost:80/grafana/login'; // Update URL to match NGINX proxy setup

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'text/html', // Expect HTML content
      },
    });

    // Log the response status
    console.log('Response status:', response.status);

    // If the response is not OK, throw an error
    if (!response.ok) {
      // Log the response text for debugging
      const errorText = await response.text();
      console.error(`Error fetching data: ${errorText}`);
      return new Response(
        JSON.stringify({ message: 'Failed to fetch dashboard', status: response.status }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get the text response directly (HTML)
    const htmlResponse = await response.text(); // Read the response as text

    // Return the HTML response with a status of 200
    return new Response(htmlResponse, { status: 200, headers: { 'Content-Type': 'text/html' } });

  } catch (error) {
    // Log the error for debugging
    console.error('Error occurred:', error);
    
    // Ensure a response is always returned
    return new Response(
      JSON.stringify({ message: 'Internal Server Error', error: error.toString() }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
