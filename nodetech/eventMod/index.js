// Event module
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("Your name is Prahlad");
});

event.on("sayMyName", () => {
    console.log("Your name is Nayak");
});

event.on("sayMyName", () => {
    console.log("Your name is G");
});

event.on("checkPage", (sc, msg)=>{
    console.log(`Status code is ${sc} and the page is ${msg}`);
});

event.emit("sayMyName");
event.emit("checkPage", 200, "ok");