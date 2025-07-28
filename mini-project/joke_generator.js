import chalk from "chalk";
import https from "https";

const getJokes = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  https.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      const joke = JSON.parse(data);
      console.log(`Here is a random ${joke.type} joke`);
      console.log(chalk.red(`${joke.setup}`));
      console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
    });
    res.on("error", (err) => {
      console.log(`Error fetching a joke , ${err.message}`);
    });
  });
};

getJokes();
