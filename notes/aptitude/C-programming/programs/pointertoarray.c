#include<stdio.h>
int main() {
   int a[5] = {1,2,3,4,5}; 
   int *p;

   //pointer pointing to address of the base address of the array 
   p = &a[0]; 

   for(int i=0; i<5; i++){
      printf("ADDRESS OF A: %x\n", p);
      printf("VALUE AT A: %d\n", *p);
      p++;
   }

   return 0;
}

/*
ADDRESS OF A: f5ffbf0
VALUE AT A: 1
ADDRESS OF A: f5ffbf4
VALUE AT A: 2
ADDRESS OF A: f5ffbf8
VALUE AT A: 3
ADDRESS OF A: f5ffbfc
VALUE AT A: 4
ADDRESS OF A: f5ffc00
VALUE AT A: 5

*/