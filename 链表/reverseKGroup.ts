class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const hair = new ListNode(0);
  hair.next = head;
  let pre = hair;

  function myReverse(head, tail) {
    let prev = tail.next;
    let p = head;

    while (prev !== tail) {
      const nex = p.next;
      p.next = prev;
      prev = p;
      p = nex;
    }

    return [tail, head];
  }

  while (head) {
    let tail = pre;
    for (let i = 0; i < k; i++) {
      tail = tail.next!;
      if (!tail) {
        return hair.next;
      }
    }

    const nex = tail.next;
    [head, tail] = myReverse(head, tail);

    pre.next = head;
    tail.next = nex;
    pre = tail;
    head = tail.next;
  }

  return hair.next;
}
