### Peak element 
> linear scan (O(n) time complexity)
```bash 
<script>
    var findPeakElement = function(nums){
        let n = nums.length - 1
        for(let i=0; i<n; i++){
            # if current element is greater than the next index 
            if(nums[i] > nums[i+1]){
                return i 
            }
        }
        # peak has to be at the last position if it hasnt met the above criteria 
        return n 
    }
    let nums = [1,2,3,1]
    console.log(findPeakElement(nums))
</script>

console:
2 
# the peak element is at 2nd index 
```
> binary search approach (OlogN)
```bash 
# narrow down the search space 
# 0  1  2  3  4
#[1, 2, 3, 1, 5]
<script>
    var findPeakElement = function(nums){
        let left = 0 
        let right = nums.length - 1 
        # binary search is for the sorted arrays 
        while(left < right){
            let mid = Math.floor((left+right)/2)
            # check if the number at mid is greater than next number or not 
            if(nums[mid] > nums[mid+1]){
                right = mid 
                # when data > mid then data must be present to the right of the mid 
            } 
            # mid element is less than next element 
            else {
                # when data is less than mid then it must be present to the left of the mid 
                left = mid+1 
            }
        }
        return left 
        # returning the position of the peak element 
    }
    let nums = [1,2,3,1]
    console.log(findPeakElement(nums))
</script>

console:
2
```
### Sort Array without inbuilt function 
> ascending order
```bash 
    <script>
        let array = [29, 3, 4, 80]
        # array[i]: 29, 3, 4, 80
        # array[j]: 29, 3, 4, 80
        for(let i=0; i<array.length; i++){
            for(let j=i+1; j<array.length; j++){
                if(array[i]>array[j]){
                    temp = array[i]
                    array[i] = array[j]
                    array[j] = temp 
                }
            }
        }
        console.log(array)
    </script>

console:
Array(4)
0: 3
1: 4
2: 29
3: 80
length: 4
[[Prototype]]: Array(0)
```
> descending order 
```bash 
    <script>
        let array = [29, 3, 4, 80]
        for(let i=0; i<array.length; i++){
            for(let j=0; j<array.length; j++){
                if(array[i]>array[j]){
                    temp = array[i]
                    array[i] = array[j]
                    array[j] = temp 
                }
            }
        }
        console.log(array)
    </script>

console:
Array(4)
0: 80
1: 29
2: 4
3: 3
length: 4
[[Prototype]]: Array(0)
```
### Reverse a number array 
> reverse integer number 
```bash 
# toString() - to convert to a string 
# split() - convert string to array 
# eg: -123 = ["-","1","2","3"]

# reverse() - reverse this new created array 
# ["3","2","1","-"]

# join() - join all the elemnets of the array into a string 
 <script>
        const revInt = (num) => {
            let myRevNum = num.toString().split("")
            # ['1','2','3'] - split("")
            # "123" - split()
            console.log(myRevNum)
            let rev = myRevNum.reverse()
            # ['3','2','1']
            let join = rev.join("")
            console.log(join)
            # 3,2,1 - join()
            # 321 - join("")

            # handling negative values 
            if(join.endsWith("-")){
                join= "-" + join
                return parseInt(join)
            } else {
                return parseInt(join)
            }
        }
        console.log(revInt(-123))
        # usually -123 will return 321-
        # to remove negative from rhs we parseint it and we add - before the string 
    </script>

console:
Array(4)
0: "3"
1: "2"
2: "1"
3: "-"
length: 4[[Prototype]]: Array(0)

revnum.html:19 321-
revnum.html:31 -321
```
### Find min and max element in array 
```bash 
    <script>
        arr = [2, 3, 4, 7]
        var max = arr[0]
        var min = arr[0]
        for(var i=0; i<arr.length; i++){
            if(arr[i] >= max){
                max = arr[i]
            } 

            if(arr[i] <= min){
                min = arr[i]
            } 
        }
        console.log('max',max)
        console.log('min',min)
    </script>

console:
max 7
min 2
```
> min max GFG solution 
```bash 
function getMinMax(arr, n){
 minmax = new  Array();
        var i;
        var min;
        var max;
 
        /*If there is only one element then return it as min and max both*/
        if (n == 1) {
            minmax.max = arr[0];
            minmax.min = arr[0];
            return minmax;
        }
 
        /* If there are more than one elements, then initialize min
    and max*/
        if (arr[0] > arr[1]) {
            minmax.max = arr[0];
            minmax.min = arr[1];
        } else {
            minmax.max = arr[1];
            minmax.min = arr[0];
        }
 
        for (i = 2; i < n; i++) {
            if (arr[i] > minmax.max) {
                minmax.max = arr[i];
            } else if (arr[i] < minmax.min) {
                minmax.min = arr[i];
            }
        }
 
        return minmax;
    }
 
    /* Driver program to test above function */
     
        var arr = [1000, 11, 445, 1, 330, 3000];
        var arr_size = 6;
        minmax = getMinMax(arr, arr_size);
        document.write("\nMinimum element is " ,minmax.min +"<br>");
        document.write("\nMaximum element is " , minmax.max);
```
