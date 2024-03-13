function maxSlidingWindow(nums: number[], k: number): number[] {
  class MonoQueue {
    private queue: number[];
    constructor() {
      this.queue = [];
    }

    enqueue(val: number) {
      let rear = this.queue[this.queue.length - 1];
      while (rear !== undefined && val > rear) {
        this.queue.pop();
        rear = this.queue[this.queue.length - 1];
      }

      this.queue.push(val);
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

  const queue = new MonoQueue();
  let j = 0;
  let i = 0;
  const resArr: number[] = [];
  while (j < k) {
    queue.enqueue(nums[j]);
    j++;
  }
  resArr.push(queue.font());

  while (j < nums.length) {
    queue.dequeue(nums[i]);
    queue.enqueue(nums[j]);
    resArr.push(queue.font());
    i++;
    j++;
  }
  return resArr;
}
