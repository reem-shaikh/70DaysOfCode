### Sum of individual rows and columns of a matrix 
```bash 
# 0   1   2
  1   2   1  #0
  2   3   5  #1
  0   5  -1  #2

#include<stdio.h>
int main()
{
int[3][3], i, j, sumrow, sumcol;

printf('enter matrix \n');

for(int i=0; i<3; i++){
    for(j=0; j<3; j++){
        # takes input from i and j 
        # 3 x 3 times 
        scanf('%d', &a[i][j]);
    }
}
printf('matrix is \n');

for(int i=0; i<3; i++){
    for(j=0; j<3; j++){
        # prints the matrix 
        printf('%d', &a[i][j]);
    }
    printf('\n')
}

for(int i=0; i<3; i++){
        sumrow = sumcol = 0;
        for(int j=0; j<3; j++){
            # adds every row and every column 
            sumrow = sumrow + a[i][j];
            sumcol = sumcol + a[j][i];
        }
        printf('sumrow=%d, sumcol=%d', sumrow, sumcol);
    }
}
```

### Sort an array of 0's, 1's and 2's 
Approaches:
1. sorting (O(nlogn))
- merge sort 
2. trying to solve it in O(n)
```bash 
# l - 0
# m - 0
# h - n-1

# 0  1  2  0  1  2
# l              h 

# were increementing m pointer until it reaches h (i.e the last index)
while(m<=h){
    if(a[m] == 0){
        # we add 0 to a[l]
        swap(a[l], a[m])
        l++
        m++
    }
    # the 1 element will orient itself 
    if(a[m] == 1){
        m++
    }
    if(a[m] == 2){
        # we add 2 to the last pointer 
        swap(a[m], a[h])
        h--
    }
}
```

### Subarray sum equals k 
```bash 
# 0  1  2  3  4   5  6  7
  3  4  7  2  -3  1  4  2

# subarrays 
i     |    subarrays:
0     |     3
            3,4
            3,4,7
            3,4,7,2
            3,4,7,2,-3
            3,4,7,2,-3,1
            3,4,7,2,-3,1,4
            3,4,7,2,-3,1,4,2
1     |     4
            4,7
            4,7,2
            4,7,2,-3
            4,7,2,-3,1
            4,7,2,-3,1,4
            4,7,2,-3,1,4,2
and so on...

when k=7
we need to find number of subarrays with sum=k
3,4
7
7,2,-3,1
1,4,2
```
- produce all possible subarrays which will be of O(n^2)
- for each subarray calculate sum value and check if its equal to k, keep a count variable and keep increementing it when sum = k - this will take O(n) time
- precalculate the cumulative sum of the entire array (prefix sum) so we dont have to find it again and again
```bash 
a[]        -> 3  4  7    2    -3   1    4   2
prefix sum -> 3  7  14   16   13   14   18  20
```
```bash 
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
    int n = (int)nums.size();
        
    int count = 0;
    for(int i=0; i<n; i++){
        int sum = 0;
        for(int j=i; j<n; j++){
            sum = sum + nums[j];

            if(sum == k)
               count++;
        
        }
    }
        return count;
    }
};

i     |    a[i]   |  sum     
0     |     3     |   3
1     |     4     |   7 ✅sum = k 
2     |     7     |   14
3     |     2     |   16
4     |    -3     |   13
5     |     1     |   14
6     |     4     |   18
7     |     2     |   20
```

#### Single Traversal Technique 
```bash 
# k=7
# keep increementing to the RHS until we reach the prefix sum 
#             0  1  2    3     4   5    6  7
a[]        -> 3  4  7    2    -3   1    4   2
prefix sum -> 3  7  14   16   13   14   18  20
 
# prefix sum is an array, not a variable 
# when prefix sum != k, move to the next sum 

# lets assume currsum - k is present in our prefix sum array
# currsum - k = val 
# currsum = k + val 
```





