function evalRPN(tokens: string[]): number {
  const helperStack: (string | number)[] = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!Number.isNaN(+tokens[i])) {
      helperStack.push(tokens[i]);
    } else {
      let a = helperStack.pop();
      let b = helperStack.pop();
      console.log(b + tokens[i] + a);
      const res = eval(b + tokens[i] + "(" + a + ")");
      helperStack.push(Math.trunc(res));
    }
  }
  return +helperStack.pop()!;
}


function evalRPNEXAMPLE(tokens: string[]): number {
  const helperStack: number[] = [];
  const operatorMap: Map<string, (a: number, b: number) => number> = new Map([
    ["+", (a, b) => a + b],
    ["-", (a, b) => a - b],
    ["/", (a, b) => Math.trunc(a / b)],
    ["*", (a, b) => a * b],
  ]);
  let a: number, b: number;
  for (let t of tokens) {
    if (operatorMap.has(t)) {
      b = helperStack.pop()!;
      a = helperStack.pop()!;
      console.log(operatorMap.get(t)!(a, b));
      helperStack.push(operatorMap.get(t)!(a, b));
    } else {
      helperStack.push(Number(t));
    }
  }
  return helperStack.pop()!;
}
