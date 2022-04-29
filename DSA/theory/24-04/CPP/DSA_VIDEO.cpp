#include<iostream>
using namespace std;
void input(int arr[100][100], int r, int c)
{
    // taking inputs fo
    for(int i=0; i<r; i++){
        for(int j=0; j<c; j++){
            cin>>arr[i][j];
        }
    }
}

void wavePrint(int arr[100][100], int r, int c){
    // these 2 are pointers 
    int i = 0;
    int j= 0; 

    // while your on even column index 
    while(j<c){
        if(j%2==0){
            i=0;
            // till the r pointer reaches the end of the row 
            while(i<r){
                cout<<arr[i][j]<<" ";
                i++;
            }
        // while your on odd column index 
        } else {
            // row pointer started from the last row index
            i=r-1;
            while(i>1){
                cout<<arr[i][j]<<" ";
                i--;
            }
        }

        j++;
        // move to the next column 
    }
}

int main(){
    int arr[100][100];
    int r, c;
    cin>>r>>c;
    input(arr, r, c);
    wavePrint(arr, r, c);

    return 0;
}