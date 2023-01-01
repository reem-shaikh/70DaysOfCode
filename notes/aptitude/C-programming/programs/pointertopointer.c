#include<stdio.h>
int main() {
   int a = 10; 
   int *p;
   int *pp;
   
   p = &a; 
   pp = &p; 

   printf("ADDRESS OF A: %x\n", p);
   printf("ADDRESS OF P POINTER: %x\n", pp);

   printf("VALUE AT A: %d\n", *p);
   printf("VALUE AT POINTER P: %x\n", *pp);

   return 0;
}

/*
ADDRESS OF A: b8bff954
ADDRESS OF P POINTER: b8bff948
VALUE AT A: 10
VALUE AT POINTER P: b8bff954
*/