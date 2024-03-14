class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let temA = headA;
  let temB = headB;
  let ALength = 0;
  let BLength = 0;

  while (temA) {
    temA = temA.next;
    ALength++;
  }

  while (temB) {
    temB = temB.next;
    BLength++;
  }

  if (ALength > BLength) {
    for (let i = 0; i < ALength - BLength; i++) {
      headA = headA?.next!;
    }
  } else {
    for (let i = 0; i < BLength - ALength; i++) {
      headB = headB?.next!;
    }
  }

  while (headA && headB) {
    if (headA === headB) {
      return headA;
    }

    headA = headA.next;
    headB = headB.next;
  }

  return null;
}
