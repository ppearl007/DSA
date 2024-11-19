// get node value in a Linked list
// fn takes in the head of a linked list containing numbers and an index value as arguments; then returns the value at that index

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

let a = new ListNode(2)
let b = new ListNode(8)
let c = new ListNode(3)
let d = new ListNode(1)

a.next = b
b.next = c
c.next = d

const nodeValue = (head, i) => {
  let currentNode = head
  let count = 0
  
  while (currentNode !== null) {
    if (count === i) {
      return currentNode.data
    }
    currentNode = currentNode.next
    count++
  } 
  return
}

nodeValue(a, 2)

//recursive solution

const valueList = (head, i) => {
  let currentNode = head
  
  if (head === null) return 
  if (i === 0) return currentNode.data
  
  return valueList(head.next, i-1)
}

// valueList(a, 3)