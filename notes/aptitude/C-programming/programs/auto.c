#include<stdio.h>
// int main() {
//     auto int a = 20;
//     printf("%d\n", a);
//     {
//         printf("%d\n", a);
//     }
//     return 0;
// }

int main() {
    auto int a = 20;
    
    printf("%d\n", a);
    {
        a = 10;
        printf("%d\n", a);
    }
    return 0;
}