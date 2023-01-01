#include<stdio.h>
int main() {
int a = 10; 

//normal variable cannot hold address of another variable 
//only a pointer variable can hold address of another variable 
//int b = &a; //assign address of a to the variable b

int *b;
//pointer variable holds address of normal variable 
b=&a;

printf("ADDRESS OF A: %x\n", &a);
// b holds the address of a
printf("ADDRESS OF A: %x\n", b);
printf("VALUE AT A: %d\n", *b);
return 0;
}


/*
a
---
10
---
1000 #address of a 


*b
----
1000  #holds address of a 
----
2000


CONSOLE:
ADDRESS OF A: 841ffb64
ADDRESS OF A: 841ffb64
VALUE AT A: 10

*/
