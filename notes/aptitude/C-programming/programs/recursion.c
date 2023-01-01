void hello(int x);  //function declaration

#include <stdio.h>

int main() {
   int x = 1; 
   hello(x);        //function call
   return 0;
}

void hello(int x)   //function defination
{
   if(x <= 3) {
      printf("hello world");
      x++;
      hello(x);     //function calling itself 
   }
}