var twoSum = function(nums, target) {

  // 转换为 map
  const obj = nums.reduce((obj, item, index) => {
    obj[item] = index
    return obj
  }, {})

  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i]
    if (obj[key] && obj[key] !== i) {
      return [i, obj[key]]
    }
  }

}
