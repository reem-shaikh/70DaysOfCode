#include<stdio.h>
int main() {
   int a = 10; 
   int *p = NULL;
   printf("a: %u\n", &a);

    {
      int b = 20;
      printf("b: %u\n", &b);

      p = &b;
      printf("%u\n", p);
      //  p pointing to address of b 
    }

      printf("%u\n", p);
      printf("%u\n", *p);

}