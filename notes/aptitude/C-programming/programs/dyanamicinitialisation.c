#include<stdio.h>
int main() {
   int arr[5], i;
  
   for(i=0; i<5; i++) {
      scanf("%d\n", &arr[i]);
   }

      for(i=0; i<5; i++) {
      printf("%d\n", arr[i]);
   }
   return 0;
}