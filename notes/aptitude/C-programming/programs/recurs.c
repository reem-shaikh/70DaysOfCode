void hello(int x); 

#include <stdio.h>
int main() {
   int x = 1; 
   hello(x);        
   return 0;
}

void hello(int x)  
{
   if(x <= 3) {
      printf("hello world");
      x++;
      hello(x);     
   }
}