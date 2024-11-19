// reverse a Linked list
// fn takes in the head of a linked list and reverses the order of the nodes. also return the head of the new list
// approach is to keep track of 3 nodes - current node, previous node and next node 
// save the next node so its not lost when pointer is moved
// reverse the pointer that goes from current to next. set it to previous
// then change the view - move from previous node to current node and from current node to next node. 
// repeat the process till current node is null

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)
let d = new ListNode(4)

a.next = b
b.next = c
c.next = d

const reverse = (head) => {
  let currentNode = head
  let prevNode = null
  let nextNode
  
  while (currentNode !== null) {
    nextNode = currentNode.next        // save the next node 
    currentNode.next = prevNode        // set next pointer to previous
    prevNode = currentNode            // move previous node to current
    currentNode = nextNode            // move current node to next
  }
  return prevNode                    // since currentNode is now null
}

reverse(a)