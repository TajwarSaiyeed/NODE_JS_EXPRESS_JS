const EventEmitter = require("events");

// const emitter = new EventEmitter();

const School = require("./school");

// register a listener for bellRing event

// emitter.on("bellRing", ({ period, text }) => {
//   console.log(`we need to run because ${period} ${text}`);
// });

// raise an event
// emitter.emit("bellRing");

// setTimeout(() => {
//   emitter.emit("bellRing", {
//     period: "First",
//     text: "period ended",
//   });
// }, 2000);

const school = new School();

school.on("bellRing", ({ period, text }) => {
  console.log(`we need to run because ${period} ${text}`);
});

school.startPeriod();
