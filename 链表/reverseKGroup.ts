class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const hair = new ListNode();
  hair.next = head;
  let prev = hair;

  function myReverse(head: ListNode | null, tail: ListNode) {
    let prev = tail.next;
    let cur: ListNode | null = head;
    while (prev !== tail) {
      const temp = cur?.next;
      cur!.next = prev;
      prev = cur;
      cur = temp!;
    }

    return [head, tail];
  }
  while (head) {
    let tail: ListNode | null = prev;

    for (let i = 0; i < k; i++) {
      tail = tail.next!;
      if (!tail) {
        return hair.next;
      }
    }
    [tail, head] = myReverse(head, tail);

    prev.next = head;
    prev = tail!;
    head = tail?.next!;
  }
  return hair.next;
}
