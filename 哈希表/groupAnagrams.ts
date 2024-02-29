function groupAnagrams(strs: string[]): string[][] {
  const sortMap: Map<string, string[]> = new Map();

  strs.map((item) => {
    const sort = item.split("").sort().join("");
    if (sortMap.get(sort)) {
      sortMap.get(sort)!.push(item);
    } else {
      sortMap.set(sort, [item]);
    }
  });

  return [...sortMap.values()];
}
