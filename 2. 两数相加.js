function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  l1 = l1 || {}
  l2 = l2 || {}
  let l3 = null
  let first = null
  let pre = null
  let add = 0

  while(((l1.val != null) || (l2.val != null))) {
    let cur = (l1.val || 0) + (l2.val || 0)  + add
    add = 0
    if (cur >= 10) {
      let rest = cur % 10
      l3 = new ListNode(rest)
      add = 1
    } else {
      l3 = new ListNode(cur)
    }
    if (!first) {
      first = l3
    } else {
      pre.next = l3
    }
    pre = l3
    l1 = l1.next || {}
    l2 = l2.next || {}
  }
  if (add === 1) {
    pre.next = new ListNode(1)
  }
  return first
}


/**
 * 测试
 */
function genListNode (str) {
  let arr = str.split('->').map(item => parseInt(item.replace(/\s/g, '')))
  let first = null
  let cur = null
  for (let i = 0; i < arr.length; i++) {
    if (!first) {
      first = new ListNode(arr[i])
      cur = first
    } else {
      cur.next = new ListNode(arr[i])
      cur = cur.next
    }
  }
  return first
}


let res = addTwoNumbers(genListNode('5'), genListNode('5'))
console.log(res)