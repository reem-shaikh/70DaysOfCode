#include<stdio.h>
void swap(int, int);

int main() {
   int a=10, b=20; //actual parameters 
   printf("before swapping the value of a, b: %d %d \n", a, b);
   swap(a, b);
   printf("value of a, b remains the same: %d %d \n", a, b);
   return 0; 
}

void swap(int x, int y) //formal parameters 
{
   int temp = x; //temp = 10
   x = y;        //x = 20
   y = temp;     //y = 10 
   printf("\n after swapping the value %d %d \n", x, y);
}


// console:
// before swapping the value of a, b: 10 20 
//  after swapping the value 20 10

// value of a, b remains the same: 10 20
