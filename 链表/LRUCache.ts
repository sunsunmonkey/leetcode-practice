class DLinkList {
  key: number;
  value: number;
  prev: DLinkList | null;
  next: DLinkList | null;

  constructor(key: number = 0, value: number = 0) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCacheI {
  cache: { [key: number]: DLinkList };
  head: DLinkList;
  tail: DLinkList;
  capacity: number;
  size: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = {};
    this.head = new DLinkList();
    this.tail = new DLinkList();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  get(key: number): number {
    if (!(key in this.cache)) {
      return -1;
    } else {
      const node = this.cache[key];
      this.moveToHead(node);
      return node.value;
    }
  }

  put(key: number, value: number) {
    if (!(key in this.cache)) {
      const node = new DLinkList(key, value);
      this.cache[key] = node;
      this.size++;
      this.addToHead(node);
      if (this.size > this.capacity) {
        const removed = this.removeTail();
        delete this.cache[removed.key];
        this.size--;
      }
    } else {
      const node = this.cache[key];
      node.value = value;
      this.moveToHead(node);
    }
  }

  moveToHead(node: DLinkList) {
    this.removeNode(node);
    this.addToHead(node);
  }

  removeNode(node: DLinkList) {
    node.next!.prev = node.prev;
    node.prev!.next = node.next;
  }

  addToHead(node: DLinkList) {
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;
    node.prev = this.head;
  }

  removeTail() {
    const node = this.tail.prev!;
    this.removeNode(node);
    return node;
  }
}

class LRUCache {
  capacity: number;
  map: Map<number, number> = new Map();

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    if (this.map.has(key)) {
      const value: number = this.map.get(key)!;
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number) {
    if (this.map.has(key)) {
      this.map.delete(key);
      this.map.set(key, value);
    } else {
      this.map.set(key, value);
      if (this.map.size > this.capacity) {
        const keys = this.map.keys();
        this.map.delete(keys.next().value);
      }
    }
  }
}
