#include <bits/stdc++.h>
using namespace std;

/* Standard Binary Search function*/
int binarySearch(int arr[], int n, int key)
{
    int mid;
    int low = 0;
    int high = n - 1;
    int index = -1;
    while (low < high)
    {
        int mid = (low + high / 2);

        if (arr[mid] == key)
        {
            index = mid;
            return mid;
        }

        else if(arr[low] < arr[mid])
        {
            if (key >= arr[low] && key < arr[mid])
            {
                high = mid - 1;
            }
            else
            {
                low = mid + 1;
            }
        }
        else
        {
            if (key > arr[mid] && key <= arr[high])
            {
                low = mid + 1;
            }
            else
            {
                high = mid - 1;
            }
        }
    }
}

/* Driver program */
int main()
{
    // Let us search 3 in below array
    int arr1[] = {5, 6, 7, 8, 9, 10, 1, 2, 3};
    int n = sizeof(arr1) / sizeof(arr1[0]);
    int key = 8;

    // Function calling
    cout << "Index of the element is : "
         << binarySearch(arr1, n, key);

    return 0;
}