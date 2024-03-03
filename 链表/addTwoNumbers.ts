class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let l3: ListNode | null = new ListNode();
  let curNode: ListNode | null = l3;
  let carry = 0;
  while (l1 || l2) {
    let val1 = l1 === null ? 0 : l1.val;
    let val2 = l2 === null ? 0 : l2.val;
    let sum = val1 + val2 + carry;
    curNode.next = new ListNode(sum % 10);
    curNode = curNode.next;

    carry = Math.floor(sum / 10);
    l1 = l1?.next || null;
    l2 = l2?.next || null;

    if (carry > 0) {
      curNode.next = new ListNode(carry);
    }
  }
  return l3.next;
}
