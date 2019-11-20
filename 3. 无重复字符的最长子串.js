var lengthOfLongestSubstring = function (s) {
  let num = 0;
  let str = '';
  let max = 0
  for (let item of s) {
    let index = str.indexOf(item)
    str += item
    if (index === -1) {
      num++
      max = max > num ? max : num
    } else {
      str = str.slice(index + 1)
      num = str.length
    }
  }
  return max
}

let res = lengthOfLongestSubstring("pwwkew")
console.log(res)
