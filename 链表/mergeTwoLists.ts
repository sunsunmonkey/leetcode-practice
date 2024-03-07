class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const head = new ListNode();
  let curNode = head;
  while (list1 && list2) {
    const val1 = list1.val;
    const val2 = list2.val;

    if (val1 <= val2) {
      curNode.next = list1;
      list1 = list1.next;
    } else {
      curNode.next = list2;
      list2 = list2.next;
    }
    curNode = curNode.next;
  }

  curNode.next = list1 ?? list2;
  return head.next;
}
