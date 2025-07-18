//here we are seeing how to use the os module in node.js

const os = require("os");

// console.log("os module is :", os);
console.log("platform :", os.platform());
console.log("User Info :", os.userInfo());

console.log("CPU Info :", os.arch());
console.log("memory Info :", os.freemem(), "bytes");
console.log("Total Memory :", os.totalmem(), "bytes");
console.log("free Memory :", os.freemem(), "bytes");
console.log("Home Directory :", os.homedir());
console.log("Uptime :", os.uptime());
console.log("Network Interfaces :", os.networkInterfaces());
console.log("os type :", os.type());
console.log("host name :", os.hostname());
console.log("Release :", os.release());
console.log("OS Version :", os.version());
