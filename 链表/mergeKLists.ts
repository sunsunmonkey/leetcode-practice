class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null;
  let head: ListNode | null = new ListNode();
  let cur: ListNode | null = head;
  while (cur) {
    let temp = Infinity;
    let index = 0;
    for (let i = 0; i < lists.length; i++) {
      if (!lists[i]) {
        continue;
      } else if (lists[i]!.val < temp) {
        temp = lists[i]!.val;
        index = i;
      }
    }

    cur.next = lists[index];
    lists[index] = lists[index]?.next!;
    cur = cur.next;
  }

  return head.next;
}
