 
#include <stdio.h>

int main()
{
   int x, y= 10;
   char z = 'a'; //97
   // by doing this calculation were implicitly converting ch to int 
   x = y+z;

   printf("z:%d y:%d x:%d", z, y, x);

   return 0;
}

// z:97 y:10 x:107
