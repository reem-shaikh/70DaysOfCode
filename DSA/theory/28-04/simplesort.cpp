
#include <iostream>
#define MAX 100
#include <cstdlib>
using namespace std;

int main(){
    int n;
    int arr[MAX];
    cout<<"enter a number N"<<endl;
    cin>>n;


    for(int i=0; i<n; i++){
        arr[i] = rand();
    }

    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;

    for(int i=0; i<n; i++){
        for(int j=i+1; j<n; j++){

            if(arr[j]<arr[i]){
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp; 
            }
        }
    }

    for(int i =0; i<n; i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;

    return 0;
}
