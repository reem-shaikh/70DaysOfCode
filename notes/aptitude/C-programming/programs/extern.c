#include<stdio.h>
void fun();
int x=10;

int main() {
   extern int x;
   printf("%d\n", x); //10
   fun();
   return 0;
}

void fun() {
   ++x;
   printf("%d\n", x); //11
}