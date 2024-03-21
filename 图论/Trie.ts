interface TrieNode {
  end?: boolean;
  [key: string]: any;
}

class Trie {
  children: TrieNode;
  constructor() {
    this.children = {};
  }

  insert(word: string): void {
    let node = this.children;

    for (let ch of word) {
      if (!node[ch]) {
        node[ch] = {};
      }

      node = node[ch];
    }

    node.end = true;
  }
  prefix(word: string): any {
    let node = this.children;
    for (let w of word) {
      if (!node[w]) return false;
      node = node[w];
    }
    return node;
  }

  search(word: string): boolean {
    let node = this.prefix(word);
    return node && !!node.end;
  }
  startsWith(prefix: string): boolean {
    return !!this.prefix(prefix);
  }
}
