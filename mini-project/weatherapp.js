import readline from "readline/promises";

const rl = readline.createInterface({
  //creating set-up for deals with CLI

  input: process.stdin,
  output: process.stdout,
});

const API_KEY = "de7011380f1292a859c8a44839407b7e";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

const getWeather = async (city) => {
  const URL = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const weatherData = await response.json();
    // console.log(weatherData);

    console.log("\nWeather information -->");
    console.log(`City : ${weatherData?.name}`);
    console.log(`Country : ${weatherData?.sys?.country}`);
    console.log(`Temperature : ${weatherData?.main?.temp} C`);
    console.log(`Description : ${weatherData?.weather[0]?.description}`);
    console.log(`Humidity : ${weatherData?.main?.humidity}%`);
    console.log(`Wind Spedd : ${weatherData?.wind?.speed}m/s\n`);
  } catch (error) {
    console.error(error);
  }
};
const city = await rl.question("Enter a city name to get its weather :");
await getWeather(city);
rl.close();
