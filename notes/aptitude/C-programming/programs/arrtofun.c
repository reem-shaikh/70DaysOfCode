#include<stdio.h>
int Sum(int []); //function declaration 
//passing array as a parameter 

int main() {
   int a[4] = {1, 3, 4, 15};
   printf("%d", Sum(a)); //function call 
}

//function defination 
int Sum(int a[]) {
   int sum = 0;
   for(int i=0; i<4; i++) {
      sum = sum + a[i];
   }
   return sum;

}