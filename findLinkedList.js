// find a value in a Linked list
// fn takes in the head of a linked list containing numbers and a target value as arguments; then returns boolean if target value is present in linked list or not

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

const findList = (head, target) => {
  let currentNode = head
  
  while (currentNode !== null) {
    if (currentNode.data === target) {
      return true
    }
    currentNode = currentNode.next
  } 
  return false
}

// findList(a, 17)

//recursive solution

const findLinkedList = (head, target) => {
  if (head === null) return false
  if (head.data === target) return true
  
  return findLinkedList(head.next, target)
}

findLinkedList(a, 1)