#include<stdio.h>
int add();  

int main() {
   int sum;
   sum = add(); 
   printf("%d", sum);
   return 0;
}

int add()
{
   int c, a=3, b=2;
   c = a+b;
   return c;
}