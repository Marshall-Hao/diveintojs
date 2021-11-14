class PubSub {
  constructor() {
    this.events = {};
  }
  publish(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((cb) => {
        cb.apply(this, data);
      });
    }
  }
  subscribe(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }
  unSubscribe(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (cb) => cb !== callback
      );
    }
  }
}
