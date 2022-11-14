#include <stdio.h>

int main()
{
   int a = 10;
   float b = 2.4;
    b = a;
    //now b=10

   printf("%.2f", b); //10.00
   // compiler converts int to float (smaller -> bigger datatype) implicitly 

   return (0);
}