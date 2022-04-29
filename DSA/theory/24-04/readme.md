### Maximum subarray sum 
> using Brute Force - O(n^3)
```bash 
#include<iostream>
#include<climits>
using namespace std; 

int main(){
    int n; 
    cin>>n;
    int arr[n];

    for(int i=0;i<n; i++){
        cin >> arr[i];
    }

    int currsum[n+1];
    currsum[0] = 0;

    for(int i=1; i<=n; i++){
        currsum[i] = currsum[i-1] + arr[i-1];
    }

    int maxSum = INT_MIN;
    for(int i=1; i<=n; i++){
        int sum = 0; 
        for(int j=0; j<i; j++) {
            sum = currsum[i] - currsum[j];
            maxSum = max(sum, maxSum);
        }
    }

    cout<<maxSum;
    return 0;
}

terminal:
4
-1 4 7 2
13
```
> cumulative sum approach - O(n^2)
```bash 
#include<iostream>
#include<climits>
using namespace std; 

int main(){
    int n; 
    cin>>n;
    int arr[n];

    for(int i=0;i<n; i++){
        cin >> arr[i];
    }

    int currsum[n+1];
    currsum[0] = 0;

    for(int i=1; i<=n; i++){
        currsum[i] = currsum[i-1] + arr[i-1];
    }

    int maxSum = INT_MIN;
    for(int i=1; i<=n; i++){
        int sum = 0; 
        for(int j=0; j<i; j++) {
            sum = currsum[i] - currsum[j];
            maxSum = max(sum, maxSum);
        }
    }

    cout<<maxSum;
    return 0;
}
```
### sum greater than equal to k 
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
# the subarrays have sum = 7 
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
### Largest row / column 
For a given two-dimensional integer array/list of size (N x M), you need to find out which row or column has the largest sum(sum of all the elements in a row/column) amongst all the rows and columns.

```bash
#include <iostream>
using namespace std;

void findLargest(int **input, int nRows, int mCols)
{
  int maxSum=INT32_MIN, index=0;
  int *arr=new int[mCols], flag=0;
  # Flag -> 0 rows, Flag -> 1 cols
  
  for(int i=0; i<nRows; i++) {
    int sum=0;
    for(int j=0; j<mCols; j++) {
      sum+=input[i][j];
      arr[j]+=input[i][j];
    }
    if(sum>maxSum) {
      maxSum=sum;
      index=i;
    }
  }
  
  for(int i=0;i<mCols;i++) {
    if(arr[i]>maxSum) {
      maxSum=arr[i];
      index=i;
      flag=1;
    }
  }
  
# when you found the maxsum and flag is 1 
  flag ? cout<<"column "<<index<<" "<<maxSum<<endl :
    cout<<"row "<<index<<" "<<maxSum<<endl;
}

int main()
{
	int t;
	cin >> t;
	while (t--)
	{
		int row, col;
		cin >> row >> col;

		int **input = new int *[row];
		for (int i = 0; i < row; i++)
		{
			input[i] = new int[col];
			for (int j = 0; j < col; j++)
			{
				cin >> input[i][j];
			}
		}

		findLargest(input, row, col);
		cout << endl;
	}
}
```
### wave print 
For a given two-dimensional integer array/list of size (N x M), print the array/list in a sine wave order, i.e, print the first column top to bottom, next column bottom to top and so on.

> Input Format
First line contains two integer values, 'N' and 'M', separated by a single space. They represent the 'rows' and 'columns' respectively, for the two-dimensional array/list.

Second line onwards, the next 'N' lines or rows represent the ith row values.

Each of the ith row constitutes 'M' column values separated by a single space.
```bash 
3 4 
1  2  3  4 
5  6  7  8 
9 10 11 12
```

> Output Format
print the elements of the two-dimensional array/list in the sine wave order in a single line, separated by a single space.
```bash 
1 5 9 10 6 2 3 7 11 12 8 4
```
```bash 
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

// n x m -> rows columns 
int main() {
   int n,m;
    cin>>n>>m;
    int arr[n][m];
    for(int row=0; row<n; row++){
        for(int col=0; col<m; col++){
            cin>>arr[row][col];
        }
    }
    
     // Loop to traverse matrix
    for (int col = 0; col < m; col++) {

        if (col % 2 == 0) {
            for (int row = 0; row < n; row++) {
                cout << arr[row][col] << " ";
            }
        }

        else {
            for (int row = n- 1; row>= 0; row--) {
                cout << arr[row][col] << " ";
            }
        }
    }
    
    return 0;
}
```
## Subset sum equals to k 
```bash 
# does any subarray combine / add up to k ?

# generate all subsequences and check if any of them gives a sum of k 
# 1. power set 
# 2. recursion 

# instead of generating all subsequences we need to keep a check if it fulfills the condition 

```
### counts of subarrays having sum equal to its length
Vikas loves chocholate. He has N bars of chocolate with some sweetness a1,a2,…,an from 0 to 9. A subbar a[l],a[l+1],a[l+2],…,a[r−1],a[r] is good if the sum of sweetness of this subbar is equal to the length of this subarray.

For example, if a=[1,2,0], then there are 3 good subbars: a[1…1]=(1),a[2…3]=(2,0) and a[1…3]=(1,2,0).

Calculate the number of good subbars of the bar a.
Note:- bar is equivalent to array and subbar is equivalent to subarray.

> Input Format
The first line of each test case contains one integer n — the length of the array a.

The second line of each test case contains a string consisting of n decimal digits, where the i-th digit is equal to the value of a[i].

It is guaranteed that the sum of n over all test cases does not exceed 10^5.
```bash 
5
11011
```
> Output Format
For each test case print one integer — the number of good subbars of the bar a.
```bash 
6
```
```bash 
# Python3 program for the above approach
from collections import defaultdict
 
# Function that counts the subarrays
# with sum of its elements as its length
def countOfSubarray(arr, N):
 
    # Decrementing all the elements
    # of the array by 1
    for i in range(N):
        arr[i] -= 1
 
    # Making prefix sum array
    pref = [0] * N
    pref[0] = arr[0]
 
    for i in range(1, N):
        pref[i] = pref[i - 1] + arr[i]
 
    # Declare map to store count of
    # elements upto current element
    mp = defaultdict(lambda : 0)
    answer = 0
 
    # To count all the subarrays
    # whose prefix sum is 0
    mp[0] += 1
 
    # Iterate the array
    for i in range(N):
 
        # Increment answer by count of
        # current element of prefix array
        answer += mp[pref[i]]
        mp[pref[i]] += 1
 
    # Return the answer
    return answer
 
# Driver Code
 
# Given array arr[]
arr = [ 1, 1, 0 ]
N = len(arr)
 
# Function call
print(countOfSubarray(arr, N))
 
```