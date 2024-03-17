class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function sortList(head: ListNode | null): ListNode | null {
  function toSortList(head: ListNode | null, tail: ListNode | null) {
    if (head === null) return head;

    if (head.next === tail) {
      head.next = null;
      return head;
    }

    let slow: ListNode = head,
      fast: ListNode = head;

    while (fast !== tail) {
      slow = slow.next!;
      fast = fast.next!;
      if (fast !== tail) {
        fast = fast.next!;
      }
    }
    const mid = slow;
    return merge(toSortList(head, mid), toSortList(mid, tail));
  }

  function merge(head1: ListNode | null, head2: ListNode | null) {
    const dummyHead = new ListNode(0);
    let temp: ListNode | null = dummyHead;
    let temp1 = head1;
    let temp2 = head2;

    while (temp1 !== null && temp2 !== null) {
      if (temp1.val <= temp2.val) {
        temp!.next = temp1;
        temp1 = temp1.next;
      } else {
        temp!.next = temp2;
        temp2 = temp2.next;
      }
      temp = temp!.next;
    }

    temp!.next = temp1 ?? temp2;
    return dummyHead.next;
  }

  return toSortList(head, null);
}

function toSortList(head: ListNode | null, tail: ListNode | null) {
  if (head === null) return head;

  if (head.next === tail) {
    head.next = null;
    return head;
  }

  let slow: ListNode = head,
    fast: ListNode = head;

  while (fast !== tail) {
    slow = slow.next!;
    fast = fast.next!;
    if (fast !== tail) {
      fast = fast.next!;
    }
  }
  return slow.val;
}
