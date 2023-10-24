class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyHead = new ListNode(0, head);
  let fast: ListNode | null = dummyHead;
  let slow: ListNode | null = dummyHead;
  //n+1更易进行删除操作
  for (let i = 0; i < n + 1; i++) {
    fast = fast!.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow!.next;
  }

  slow!.next = slow?.next!.next!;
  return dummyHead.next;
}
