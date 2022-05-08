### plus one 
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
```bash
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
```
> algorithm.
```bash 
# work digits array from rhs to lhs 
var plusOne = function(digits){
    # digits = [2, 2, 9]
     for(let i=digits.length-1; i>=0; i--){
         if(digits[i] < 9){
             digits[i] = digits[i] + 1
             return digits 
         } 
        #  if digit is >= 9 then do the arithmetic carry operation
         else {
             digits[i] = 0 
         }
     }

    # CORNER CASE:  
    # if digits = [9, 9]
    # then the array returned after all operations is [0,0]
    # we want to add 1 at the beginning of the array [1,0,0] in this case
    # digits.splice(0, 0, "1")
    digits.unshift(1)
    return digits 

}

# expalnation:
i    |   digits[i]  |  if(digits[i] < 9)  |  if(digits[i]>9) |  new array
2    |   9          |                     |  digit[2] = 0    |  [2, 2, 0]
1    |   2          |  2+1=3              |                  |  [2, 3, 0]
0    |   2          |   
```

### Search Insert position 
```bash 
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
```
```bash 
# example 1
Input: nums = [1,3,5,6], target = 5
Output: 2

# example 2
Input: nums = [1,3,5,6], target = 7
Output: 4
```
> normal method 
```bash 
var searchInsert = function(nums, target) {
let result = 0;
        # if there is only 1 element in the array 
        # and the value of tagrte > nums[0]
        # then return the first index 
        # for example, target = 2
        # arr = [1]
        # after insertion this will be the array -> arr[1, 2]
        # 2 will be present on 1st index 
        if(nums.length==1 && target>nums[0]){
            return 1;
        }
        
        for(let i=0;i<nums.length-1;i++){
            # when target == the element in the array 
            # then simply return its index 
            if(target == nums[i]){
                result =  i;
                break;
            # lets take an example to understand this case 
            # target = 6 
            # arr = [1, 2, 5, 8]
            # 6>5 and 6<8 
            # after insertion arr -> [1, 2, 5, 6, 8]
            # 6 is present is i+1 index, and thats what were returning
            }else if(target>nums[i] && target<=nums[i+1]){
                result = i+1;
                break;
            # when target element is not inside the array 
            # and its supposed to be placed at the end of the array 
            # target = 9 
            # arr = [1, 2, 5, 8]
            # 9>5 and 9<8 
            # after insertion arr -> [1, 2, 5, 8, 9]
            }else if(target>nums[i+1] && (nums.length-1==i+1)){
                result= nums.length;
                break;
            # when target element is not inside the array 
            # and its supposed to be placed at the beginning of the array 
            # target = 1
            # arr = [2, 3, 5, 8]
            # 1<2 
            # after insertion arr -> [1, 2, 5, 8]
            }else if(target<nums[i] && i==0){
                result =  0;
                break;
            }
        }
        
        return result;
        
    }
```
> binary search method 
```bash 
let low = 0 
let high = nums - 1
while(low <= high){
    mid = low + (high-low)/2
    if(num[mid] == target){
        return mid 
    } else if (num[mid] < target){
        low = mid + 1
    } else 
    {
        high = mid - 1
    }
    return low 
}
```
### Union of two arrays
Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays.
```bash 
Input:
5 3
1 2 3 4 5
1 2 3

# union would be 1 2 3 4 5 
Output: 
5

Explanation: 
1, 2, 3, 4 and 5 are the
elements which comes in the union set
of both arrays. So count is 5.
```
> ans. 
```bash 
const num1 = [1, 2, 3]
const num2 = [3, 4, 5]
const getUnion = () => {
    let oneArr = [...num1, ...nums2]
    return [...new Set(oneArr)]
}
console.log(getUnion())
```

#### Move negative elements to rhs of array
> Approach 
```bash 
# consider the array 
#   0   1  2   3  4  5
let a= [3, -2, 5, -4, 1, 6]
let i=-1 

j      |     a[j] <0      |   i   |   i++    | a[i] <-> a[j]
0      |      3<0❌       |  -1   |          | no changes made here 
1      |     -2<0✅       |  -1   |  -1+1=0  | [-2, 3, 5, -4, 1, 6] #swap a[0] and a[1]
2      |      5<0❌       |   0   |          | no changes made here 
3      |     -4<0✅       |   0   |  0+1=1   | [-2, -4, 5, 3, 1, 6] #swap a[3] and a[1]
4      |      1<0❌       |        
5      |      6<0❌       |
```
> parition algorithm using quick sort 
```bash 
let i = -1 
let pivot = 0 

for(let j=0; j<n; j++){
# if element in the array is less than pivot then swap the element at a[i] with a[j]
    if(a[j]< pivot){
        i++
        temp = a[i]
        a[i] = a[j]
        a[j] = temp 
    }
}

for(let i=0; i<n; i++){
    console.log(a[i] + " ")
}
```
#### Count pair with given sum 
Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.
```bash 
Input:
N = 4, K = 6
# find pair from array whos sum would be 6 
# return the count of the number of pairs whos sum would be 6
arr[] = {1, 5, 7, 1}

Output: 2
Explanation: 
arr[0] + arr[1] = 1 + 5 = 6 
and arr[1] + arr[3] = 5 + 1 = 6.
```
> algorithm
```bash 
# when all the elements of the array contain different elements
# sum/ elem user enetered = 6

#  0  1  2  3
# [1, 5, 7, 1]
# a=1
# b=5
# a+b = sum 

# were going to iterate over the array and check if sum-a=b
i     |    arr[i] /a  |   sum-a=b     | count++
0     |      1        |   6-1= 5  ✅  |  insert (1,5) in map
1     |      1        |   6-1= 5  ✅  |  1
2     |      5        |   6-7=-1  ❌  |
3     |      7        |   6-1= 5  ✅  |  2
# Note that: b is any value present inside the array 


# when all the elements of the array contain the same element 
# elem user entered = 2
# arr = [1, 1, 1, 1]
# a=1
# b=1
# a+b = sum 

i     |    arr[i] /a  |   sum-a=b     | count++
0     |      1        |   2-1=1  ✅   |  insert (1,1) in map 
1     |      1        |   2-1=1  ✅   |  1
# 2 forms pair with 1 at 0th index and 1 at 1st index 
2     |      1        |   2-1=1  ✅   |  2
             1        |   2-1=1  ✅   |  3
# 3 forms pair with 1 at 1st index and 1 at 2nd index and 1 at 3rd index 
3     |      1        |   2-1=1  ✅   |  4
             1        |   2-1=1  ✅   |  5
             1        |   2-1=1  ✅   |  6

# O(n) approach 
unordered_map m 
let count = 0 
for(let i=0; i<n; i++){
    let b = sum - arr[i]
    # if b is present in the array add its count to the unordered map
    if(m[b]){
        count = count + m[b]
    }
    # after adding the count check the next element in the arr
    m[arr[i]]++
}
return ans 
```
> O(n^2) approach
```bash 
let sum = 6
arr = [1, 5, 7, 1]

let count = 0 

for(let i=0; i<n; i++){
   for(let j=i+1; j<n; j++){
       if(arr[i] + arr[j] == sum){
           count++
       }
   } 
   console.log(count)
}
```
### Intersection of 2 unsorted arrays 
```bash
import java.util.HashMap;
import java.util.Scanner;  

public class IntersectionOfTwoArrays {
    private static void printIntersection(int[] arr1, int[] arr2) {
        HashMap<Integer, Integer> map = new HashMap<>();
        // Build the frequency map for arr1
        for (int i = 0; i < arr1.length; i++) {
            if (map.containsKey(arr1[i])) {
                map.put(arr1[i], map.get(arr1[i]) + 1);
            } else {
                map.put(arr1[i], 1);
            }
        }
        // Traverse the elements of arr2 one by one
        for (int i = 0; i < arr2.length; i++) {
            // If the map contains current element
            if (map.containsKey(arr2[i])) {
                // Reduce the frequency by 1
                int freq = map.get(arr2[i]);
                freq--;
                // If freq becomes 0, remove the element from the map
                if (freq == 0) {
                    map.remove(arr2[i]);
                } else {
                    map.put(arr2[i], freq);
                }
                // Print the element
                System.out.print(arr2[i] + " ");
            }
        }
        System.out.println();
    }
    public static void main(String[] args) {
        int n, m;
        Scanner sc=new Scanner(System.in);  
        
        // int[] arr3 = new int[n];  
        // int[] arr4 = new int[m]; 
        
        n=sc.nextInt(); 
        int[] arr3 = new int[n]; 
        for(int i=0; i<n; i++)  
        {    
        arr3[i]=sc.nextInt();  
        }  
        
        m=sc.nextInt(); 
        int[] arr4 = new int[m]; 
        for(int j=0; j<m; j++)  
        {    
        arr4[j]=sc.nextInt();  
        }  
        
        // Example 2
        // int arr3[] = new int[] {4, 9, 5};
        // int arr4[] = new int[] {9, 4, 9, 8, 4};
        printIntersection(arr3, arr4);
    }
}
```
> another solution
```bash
#include <bits/stdc++.h>
using namespace std;
vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
    if(nums1.size()>nums2.size()){
        swap(nums1,nums2);
    }
    unordered_map< int , int >  m;
    for(auto val:nums1){
        m[val]++;
    }
    int k=0;
    for(auto val:nums2){
        if(m[val]>0){
            nums1[k++]=val;
            --m[val];
        }
    }
    // return vector<int>(nums1.begin()+k, nums1.begin());
    return vector<int>(nums1.begin(),nums1.begin()+k);
}
int main() 
{
    // vector<int> nums1={1,2,2,1};
    // vector<int> nums2={2,2};
    int n,a,b, m;
    cin>>n;
    vector<int> nums1;
    for(int i=0;i<n;i++)
    {
      cin>>a;
      nums1.push_back(a);
    }

    cin>>m;
    vector<int> nums2;
    for(int j=0;j<m;j++)
    {
      cin>>b;
      nums2.push_back(b);
    }
    
    vector<int> ans=intersect(nums1, nums2);
    // for(int x:ans)
    //     cout<<x<<" ";
       for (auto it =  ans.rbegin(); it != ans.rend(); ++it)
           cout << *it << " ";
   return 0; 
}
```








