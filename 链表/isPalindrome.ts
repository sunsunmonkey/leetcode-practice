class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  let tail: ListNode | null = null;
  let cur = head;
  let preVal: number[] = [];
  while (cur) {
    preVal.push(cur.val);
    let temp = cur.next;
    cur.next = tail;
    tail = cur;
    cur = temp;
  }

  let i = 0;
  while ( tail) {
    if (preVal[i] !== tail.val) {
      return false;
    }
    tail = tail.next;
    i++;
  }
  return true;
}
