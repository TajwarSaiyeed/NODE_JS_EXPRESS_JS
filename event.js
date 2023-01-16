const EventEmitter = require("events");

const emitter = new EventEmitter();

// register a listener for bellRing event

emitter.on("bellRing", () => {
  console.log("a student entered the class");
});

// raise an event
emitter.emit("bellRing");
