#include<stdio.h>

int main()
{
int a[3][3];
int i;
int j; 
int sumrow, sumcol;

printf("enter matrix \n");

for(int i=0; i<3; i++){
    for(int j=0; j<3; j++){
        scanf("%d\t", &a[i][j]);
    }
}
printf("matrix is \n");

for(int i=0; i<3; i++){
    for(int j=0; j<3; j++){
        printf("%d\t", a[i][j]);
    }
    printf("\n");
}

for(int i=0; i<3; i++){
        int sumrow = sumcol = 0;
        for(int j=0; j<3; j++){
            sumrow = sumrow + a[i][j];
            sumcol = sumcol + a[j][i];
        }
        printf("sumrow=%d, sumcol=%d", sumrow, sumcol);
    }
}