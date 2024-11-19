// Sum the values in a Linked list
// fn takes in the head of a linked list containing numbers as an argument and returns the sum of all the values in the linked list

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

const sumList = (head) => {
  let currentNode = head
  let sum = 0
  
  while (currentNode !== null) {
    sum += currentNode.data
    currentNode = currentNode.next
  } 
  
  return sum
}

// sumList(a)

//recursive solution

const sumLinkedList = (head) => {
  let sum = 0
  if (head === null) return 0
  
  return head.data + sumLinkedList(head.next)
}

sumLinkedList(a)