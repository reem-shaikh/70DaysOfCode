#include<stdio.h>

int main() {
    //            0   1   2   3   4   5    6
   char ch[7] = {'e','f','e','w','w','f', '\0'};
   char me[3] = {'m', 'e', 'o'};
   char a[] = "jaipur india";

   printf("%c\n", ch[0]);
   printf("%c\n", me[3]);
   printf("%s\n", ch);
   printf("%s\n", a);

   return 0;

   }