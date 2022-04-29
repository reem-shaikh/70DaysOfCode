#include<iostream>
// we add climits header file because were using INT_MIN
#include<climits>
using namespace std; 

int main(){
    int n;
    // how many elements you want to add in the array 
    cin>>n;
    int arr[n];
    // taking inputs in array 
    for(int i=0;i<n; i++){
        cin >> arr[i];
    }  

    int maxSum = INT_MIN;

// printing subarrays from here 
    for(int i=0; i<n; i++){
        for(int j=i; j<n; j++){
            int sum = 0;
            for(int k=i; k<=j; k++){
                // printing all possible subarrays 
                // cout<<arr[k]<<" ";
                sum = sum + arr[k];
            }
            // cout<<endl;
            maxSum = max(maxSum, sum);
        }
    }
    cout<<maxSum;

}