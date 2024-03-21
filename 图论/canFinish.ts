function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const edge: Map<number, number[]> = new Map();
  const visited: number[] = new Array(numCourses).fill(0);
  let valid: boolean = true;

  function dfs(u: number) {
    const neighbor = edge.get(u) || [];
    visited[u] = 1;
    for (let v of neighbor) {
      if (visited[v] === 0) {
        dfs(v);
        if (!valid) {
          return;
        }
      } else if (visited[v] === 1) {
        valid = false;
        return;
      }
    }

    visited[u] = 2;
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const [course, prerequisite] = prerequisites[i];
    if (!edge.has(prerequisite)) {
      edge.set(prerequisite, []);
    }

    edge.get(prerequisite)?.push(course);
  }

  for (let i = 0; i < numCourses; i++) {
    if (visited[i] === 0 && valid) {
      dfs(i);
    }
  }

  return valid;
}
