function maxSlidingWindow(nums: number[], k: number): number[] {
  class MonoQueue {
    private queue: number[];

    constructor() {
      this.queue = [];
    }

    enqueue(value: number) {
      let rear = this.queue[this.queue.length - 1];

      while (rear !== undefined && value > rear) {
        this.queue.pop();
        rear = this.queue[this.queue.length - 1];
      }

      this.queue.push(value);
    }

    dequeue(value: number) {
      if (value === this.font()) {
        this.queue.shift();
      }
    }

    font() {
      return this.queue[0];
    }
  }

  const helperQueue: MonoQueue = new MonoQueue();
  let i = 0;
  let j = 0;

  const resArr: number[] = [];

  while (j < k) {
    helperQueue.enqueue(nums[j++]);
  }

  resArr.push(helperQueue.font());

  while (j < nums.length) {
    helperQueue.enqueue(nums[j]);
    helperQueue.dequeue(nums[i]);

    resArr.push(helperQueue.font());

    j++;
    i++;
  }

  return resArr;
}
