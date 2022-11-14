#include <stdio.h>

int main()
{
    int x = 60, y = 17;
    float res;

  res = x/y;
    printf("(Without typecasting the expression) 60/17 = %.3f\n", res );  

    res = (float)x/y;

    printf("(With typecasting the expression) 60/17 = %.3f\n", res ); 

    return 0;
}