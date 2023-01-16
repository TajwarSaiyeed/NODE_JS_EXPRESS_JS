const EventEmitter = require("events");

class School extends EventEmitter {
  startPeriod() {
    console.log("period started");

    // raise an event when bell ring

    setTimeout(() => {
      this.emit("bellRing", {
        period: "First",
        text: "period ended",
      });
    }, 2000);
  }
}

module.exports = School;
