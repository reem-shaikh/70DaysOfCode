#include<stdio.h>
int main() {
   register int a=3;
   int c; 
   c = a++;
   //assign then increement 
   //c=3, a=4
   a--;
   //3
   c=a+8;
   printf("%d", c);
}