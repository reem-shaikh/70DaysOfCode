#include <stdio.h>

int main()
{
   char x;
   
   printf("choose Y/N \n");
   x= getchar();

   if(x == 'y' || x== 'Y')
   {
    printf("hi");
   } else {
    printf("bye");
   }

   return (0);
}
