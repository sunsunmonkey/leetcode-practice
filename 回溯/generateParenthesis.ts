function generateParenthesis(n: number): string[] {
  const res: string[] = [];

  function backTrace(S: string[], left: number, right: number) {
    if (S.length === 2 * n) {
      res.push(S.join(""));
    }

    if (left < n) {
      S.push("(");
      backTrace(S, left + 1, right);
      S.pop();
    }

    if (right < left) {
      S.push(")");
      backTrace(S, left, right + 1);
      S.pop();
    }
  }

  backTrace([], 0, 0);

  return res;
}
