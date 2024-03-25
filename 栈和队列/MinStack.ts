class MinStack {
  helperStack: number[];
  stack: number[];
  constructor() {
    this.helperStack = [Infinity];
    this.stack = [];
  }

  push(val: number): void {
    if (val < this.helperStack[this.helperStack.length - 1]) {
      this.helperStack.push(val);
    } else {
      this.helperStack.push(this.helperStack[this.helperStack.length - 1]);
    }

    this.stack.push(val);
  }

  pop(): void {
    this.helperStack.pop();
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.helperStack[this.helperStack.length - 1];
  }
}
