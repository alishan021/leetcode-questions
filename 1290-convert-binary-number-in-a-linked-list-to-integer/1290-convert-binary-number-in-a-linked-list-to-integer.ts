/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getDecimalValue(head: ListNode | null): number {
    
    let binaryNum = '';
    while(head !== null) {
        binaryNum += head.val;
        head = head.next;
    }

    let res = 0;
    for(let i = binaryNum.length - 1; i >= 0; i--) {
        let num = parseInt(binaryNum[i]);
        res += 2 ** (binaryNum.length - 1 - i) * num;
    }
    return res;
};