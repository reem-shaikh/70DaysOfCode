#include <stdio.h>
void hello();  

int main() {
   for(int i=0; i<100; i++) {
      hello();   
   }
}

void hello() {  
   printf("hello world");
}