class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  
  function InsertSortList(head: ListNode | null): ListNode | null {
    if (head === null) return head;
  
    const dummyHead = new ListNode(0, head);
    let LastSorted: ListNode | null = head;
    let cur = head.next;
    while (cur !== null) {
      if (LastSorted!.val <= cur.val) {
        LastSorted = LastSorted!.next;
      } else {
        let prev = dummyHead;
        while (prev.next!.val <= cur.val) {
          prev = prev.next!;
        }
        LastSorted!.next = cur.next;
        cur.next = prev.next;
        prev.next = cur;
      }
  
      cur = LastSorted!.next;
    }
  
    return dummyHead.next;
  }
  