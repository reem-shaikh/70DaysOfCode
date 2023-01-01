// #include<stdio.h>
// #include<string.h>

// int main() {
//    int len;
//    char ch[] = "jaipur is the capital of rajasthan";
//    len = strlen(ch);
//    printf("%d\n", len);
//    return 0; 
// }

// #include<stdio.h>
// #include<string.h>

// int main() {
//    char Str1[] = "India";
//    char Str2[] = "India";

//    int res = strcmp(Str1, Str2);

//    if(res==0) {
//       printf("strings equal");

//    } else {
//       printf("strings unequal");
//    }

//    return 0;
// }

// #include<stdio.h>
// #include<string.h>

// int main() {
//    char Str1[] = "India";
//    char Str2[] = "uae";

//    strcat(Str1, Str2);

//    puts(Str1);
//    puts(Str2);

//    return 0;
// }


#include<stdio.h>
#include<string.h>

int main() {
   char Str1[] = "India";
   char Str2[] = "uae";

   strcpy(Str1, Str2);

   puts(Str1); 
   puts(Str2);

   return 0;
}