// Linked list
// similar to arrays but uses pointers to link one node to another while arrays stores data contiguously in memory
// all the nodes in a linked list can be accessed via the head. By accessing the current node property and the next property, you can access every subsequent node.
// print out all the nodes in the linked list

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

let a = new ListNode("a")
let b = new ListNode("b")
let c = new ListNode("c")
let d = new ListNode("d")

a.next = b
b.next = c
c.next = d

const printList = (head) => {
    let current = head

    while (current !== null) {
        console.log(current.data)
        current = current.next
    }
}

// printList(a)

//recursive solution

const linkedList = (head) => {
    if (head === null) return
    console.log(head.data)
    linkedList(head.next)
}

linkedList(a)