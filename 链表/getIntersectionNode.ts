/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let ALength = 0;
  let BLength = 0;
  let tempA = headA;
  let tempB = headB;
  while (tempA) {
    tempA = tempA.next;
    ALength++;
  }
  while (tempB) {
    tempB = tempB.next;
    BLength++;
  }

  if (ALength > BLength) {
    for (let i = 0; i < ALength - BLength; i++) {
      headA = headA.next;
    }
  } else {
    for (let i = 0; i < BLength - ALength; i++) {
      headB = headB.next;
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
};
