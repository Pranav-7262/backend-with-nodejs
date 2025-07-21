const EventEmitter = require("events"); //here we are importing the events module

const emitter = new EventEmitter(); //creating an instance of EventEmitter

const eventCounts = {
  "user-login": 0,
  "user-purchase": 0,
  "profile-update": 0,
  "user-logout": 0,
}; //object to keep track of event counts

//1. define an event listener
emitter.on("user-login", (username) => {
  eventCounts["user-login"]++;

  console.log(`${username} logged in`);
});
//2. emit or call the "greet" event with an argument
emitter.emit("user-login", "pranav");

emitter.on("user-purchase", (username, item) => {
  eventCounts["user-purchase"]++; //increment the count for user-purchase event
  console.log(`${username} purchased ${item}`);
});
emitter.emit("user-purchase", "pranav", "Laptop");

emitter.on("profile-update", (username, field) => {
  eventCounts["profile-update"]++; //increment the count for profile-update event
  console.log(`${username} updates ${field}`);
});
emitter.emit("profile-update", "pranav", "Email");

emitter.on("user-logout", (username) => {
  eventCounts["user-logout"]++; //increment the count for user-logout event
  console.log(`${username} logged out`);
});
emitter.emit("user-logout", "pranav");

emitter.on("summary", () => {
  console.log(eventCounts);
});

emitter.emit("summary");
