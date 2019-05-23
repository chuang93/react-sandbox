export default class Observable {
  constructor() {
    this.observers = new Map();
  }

  subscribe(func) {
    if (!this.observers.has(func.name)) {
      this.observers.set(func.name, func);
    }
  }

  unsubscribe(func) {
    if (!this.observers.has(func.name)) {
      console.log(
        typeof Observable +
          " does not have observer to unsubscribe:" +
          func.name
      );
    } else {
      this.observers.delete(func.name);
      console.log("successfully unsubscribed: " + func.name);
    }
  }

  notify(data) {
    for (let func of this.observers.values) {
      console.log("observer notified: " + func.name);
      func(data);
    }
  }
}
