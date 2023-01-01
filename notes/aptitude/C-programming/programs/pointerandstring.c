#include<stdio.h>
int main() {
   char str[6] = "hello"; 
   char *ptr;
   int i; 

   //pointer pointing to address of the entire string 
   ptr = &str[0]; 

   //PRINTING STRING ELEMENTS 
   for(int i=0; *ptr != '\0'; ptr++){
      printf("VALUE AT A STRING: %c\n", *ptr);
   }

   return 0;
}

/*
VALUE AT A STRING: h
VALUE AT A STRING: e
VALUE AT A STRING: l
VALUE AT A STRING: l
VALUE AT A STRING: o
*/