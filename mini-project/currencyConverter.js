import chalk from "chalk";
import https from "https";
import readline from "readline";

const rl = readline.createInterface({
  //creating set-up for deals with CLI

  input: process.stdin,
  output: process.stdout,
});
const API_KEY = "43e0b76e2f4a358d62721368";
const URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

const convertCurrency = (amount, rate) => {
  return (amount * rate).toFixed(2);
};

https.get(URL, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;

    ///Let start to ask user --->
    rl.question("Enter a amount in USD :", (amount) => {
      rl.question(
        "Enter the target currency (e.g INR,EUR,NPR) : ",
        (currency) => {
          const rate = rates[currency.toUpperCase()];
          if (rate) {
            console.log(
              `${amount} USD approxiamately ${convertCurrency(
                amount,
                rate
              )} ${currency.toUpperCase()}`
            );
          } else {
            console.log("Invalid currency code");
          }
          rl.close();
        }
      );
    });
  });
});
