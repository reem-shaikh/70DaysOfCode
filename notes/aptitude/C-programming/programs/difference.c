#include <stdio.h>
    int main() 
    {
        int a = 1, b;
        b = ++a;
        // //a=2, b=2

        b = a++;
        //a=2, b=1

        b = --a;
        //a=0, b=0

        b = a--;
        //a=0 , b=1
        printf("%d %d\n", a, b);

        return (0);
    }

 
