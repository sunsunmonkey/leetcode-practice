function findItinerary(tickets: string[][]): string[] {
  type TicketsMap = {
    [index: string]: Map<string, number>;
  };

  tickets.sort((a, b) => {
    return a[1] > b[1] ? 1 : -1;
  });

  const ticketMap: TicketsMap = {};

  for (const [from, to] of tickets) {
    if (ticketMap[from]) {
      let before = ticketMap[from].get(to);
      ticketMap[from].set(to, (before || 0) + 1);
    } else {
      ticketMap[from] = new Map();
      ticketMap[from].set(to, 1);
    }
  }

  const resRoute = ["JFK"];

  function backTrace() {
    if (resRoute.length === tickets.length + 1) return true;
    const targetMap = ticketMap[resRoute[resRoute.length - 1]];

    if (targetMap) {
      for (const [to, count] of targetMap.entries()) {
        if (count > 0) {
          resRoute.push(to);
          targetMap.set(to, count - 1);
          if (backTrace()) return true;
          targetMap.set(to, count);
          resRoute.pop();
        }
      }
    } else {
      return false;
    }
  }
  backTrace();
  return resRoute;
}

