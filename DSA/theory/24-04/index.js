const maxSubArray = (nums) => {
    for(let i = 0; i < nums.length; i++){ 
        // currentSum = Math.max(nums[i], currentSum + nums[i])
        // maxSum = Math.max(currentSum, maxSum)
        let sum = 0 
        let arr1 = []
        let count = 0 

        for(let j=i; j<nums.length; j++){
            arr1.push(nums[i], nums[j])
            console.log('arr1',arr1)
            let k = arr1.length
            console.log('k', k)
            sum = nums[i] + nums[j]

            if(sum == k){
                count++
            }
        }
      return count 
    }
    
}

let nums = [2, 3, 4, 5]
console.log(maxSubArray(nums))