class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(0, head);
  let cur: ListNode | null = dummyHead;
  while (cur?.next !== null && cur?.next.next !== null && cur) {
    const temp =  cur.next;
    const temp2 = cur.next.next.next;
    cur.next = cur.next.next;
    cur.next.next = temp;
    temp.next = temp2;
    cur = cur.next.next;
  }
  return  dummyHead.next;
}
