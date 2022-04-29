### C and CPP installation procedure 

#### installing C Cpp toolset (gcc g++ gdb)
- First we'l do the MINGW setup ![mingw-w64](https://www.mingw-w64.org/)
- click on **MSYS2**. Download from this link ![download link](https://www.msys2.org/)

> open zip file and complete installing. then run the MSYS2 terminal and type in this command `pacman -Syu`. and click on `y`. these command updates the package database and base packages. 

> open `MSYS2 MSYS` 
- to update rest of the base packages enter this command in the terminal `pacman -Su` 

#### Now open up the Msys MinGW terminal
> open `MIN GW64` terminal 
1. To install gcc and g++ for C and C++ 
> command to search for gcc 
```bash 
pacman -Ss gcc
# over here you will be provided with the name of the package to install mingw-w64-x86_64-gcc
```
> command to install gcc and g++ for C and C++
```bash 
# For 64 bit
pacman -S mingw-w64-x86_64-gcc
```
> to find out the versions of these gcc and g++ in these commands:
```bash 
# finding version of gcc 
gcc --version
# finding version of g++
g++ --version
```
2. To install the debugger ( gdb ) for C and C++
> command to search for gcc 
```bash 
pacman -Ss gdb
# over here you will be provided with the name of the package to install mingw-w64-x86_64-gdb
```
> command to install the debugger ( gdb ) for C and C++
```bash
# For 64 bit
pacman -S mingw-w64-x86_64-gdb
```
> to find the version of gdb 
```bash 
gdb --version 
```
#### Set path variables 
> copy this path `C:\msys64\mingw64\bin`, head over to **edit environment variable** -> system variables -> path -> edit -> new (paste the copied path here)
```bash 
# close and open cmd again for the environment variable set to take to action
gcc --version
g++ --version
gdb --version
# shows version installed 
```
### How to set up VSCODE for executing and debugging CPP programs 
> install these two extensions `C/C++` and `code runner`





















