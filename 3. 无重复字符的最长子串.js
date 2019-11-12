var lengthOfLongestSubstring = function (s) {
  let arr = []
  let last = []
  let map = {}
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      if (s[i - 1]) {
        last.push(s[i - 1])
        arr.push(map)
        map = {}
      }
    }
    map[s[i]] = 1
    if (i === s.length - 1) {
      arr.push(map)
    }
  }
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    let pre = last[i - 1] || ''
    let count = Object.keys(arr[i]).length
    if (pre && !arr[i][pre]) {
      count += 1
    }
    if (count > max) {
      max = count
    }
  }
  return max
}

let res = lengthOfLongestSubstring("anviaj")
console.log(res)
