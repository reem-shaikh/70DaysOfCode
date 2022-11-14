#include <stdio.h>

int main()
{
   char name[20], names[20];
   printf("enter first name \n");
   scanf("%s", name);

   // note printf() uses format specifiers, puts doesnt
   // printf prints both the outputs on the same line
   printf("%s", name);
   printf("%s \n", name);

   printf("enter surname \n");
   scanf("%s", names);

   // puts sends the output to the next line
   puts(names);
   puts(names);

   return 0;
}
