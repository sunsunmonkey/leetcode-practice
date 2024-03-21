function allPathsSourceTarget(graph: number[][]): number[][] {
  let res: number[][] = [];
  let path: number[] = [];

  function dfs(graph: number[][], start: number) {
    if (start === graph.length - 1) {
      res.push([...path]);
    }

    for (let i = 0; i < graph[start].length; i++) {
      path.push(graph[start][i]);
      dfs(graph, graph[start][i]);
      path.pop();
    }
  }
  path.push(0);
  dfs(graph, 0);
  return res;
}
