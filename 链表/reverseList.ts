class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let cur = head;
  let prev: ListNode | null = null;
  while (cur) {
    let tmp = cur?.next || null;
    cur!.next = prev;
    prev = cur;
    cur = tmp;
  }
  return prev;
}
