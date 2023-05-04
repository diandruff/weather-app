const OPENWEATHER_URL = process.env.REACT_APP_OPENWEATHER_BASE_URL;
const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

/**
 * Gets the entity
 * @param endpoint - the Endpoint
 * @returns the entity object.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
 */
export async function GetAsync<ResponseType>(endpoint: string): Promise<any> {
  let url = `${OPENWEATHER_URL}/${endpoint}&appid=${OPENWEATHER_API_KEY}`;

  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        alert("Failed fetching weather data.");
      }
      // The response is a Response instance.
      // You parse the data into a useable format using `.json()`
      return response.json();
    })
    .then(function (data) {
      return data;
    });
}
