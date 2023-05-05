/* ========================= 4.7 Static in Class =========================  */
// Static is use to make the value static no matter how many instances are being created.
// Practical use-case: 'static' can be use for keep tracking the id whenever new instance is being created
class Counter {
  static count: number = 0;

  static increment() {
    Counter.count++;
  }

  static decrement() {
    Counter.count--;
  }
}

Counter.increment();
Counter.increment();
Counter.increment();

const count = Counter.count; // 3
