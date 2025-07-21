const EventEmitter = require("events");

const emitter = new EventEmitter();

//1 . define an event listner
// emitter.on("greet", () => {
//   console.log("Hello pranav Bhai!!");
// });

// //2 . emit or call the "greet" event
// emitter.emit("greet");

//pass an arguement -------->

emitter.on("greet", (args) => {
  console.log(`hello ${args.username} , you are a ${args.prof}`);
});
emitter.emit("greet", { username: "Pranav Varpe", prof: "coder" });
