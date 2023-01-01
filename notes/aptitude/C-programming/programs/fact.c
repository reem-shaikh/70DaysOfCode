int fact(int n);   
#include <stdio.h>

int main () {
   int a = 3, f;
   f = fact(a);   
   printf("%d", f);
   return 0;
}

int fact(int a) {  
   if(a > 1) {
      return a * fact(a-1);
   } else {
      return 1;
   }
}