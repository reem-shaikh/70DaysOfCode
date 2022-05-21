 > I'm tryna run this, idk wass wrong 
 ```bash
 var clumsy = function(n) {
    let sign = 1
    let ans = 0 
    for(let i=n; i>0; i=i-4){
        let temp = i 
        if(i-1 >  0){
            temp = temp * i-1;

        }else if(i-2 > 0){
            temp = parseInt(temp / i-2);
            ans = ans + sign * temp;
        }
        else if(i-3 > 0){
            ans = ans + i-3
            sign = -1
        }
        return ans 
    }
    
};
```

> this code runs 
```bash
var clumsy = function(n) {  
    if(n<=2){ return n; }

    if(n===3 || n===4){ return n+3; } 

    let mod=n%4;
    if(mod===0){ return n+1; }
    if(mod===1 || mod===2){ return n+2; }
    if(mod===3){ return n-1; }
};

when n = 10 
(10 * 9 / 8) + (7) - (6 * 5 / 4 + 3) - (2 * 1)

# This is the priorty order in which the operations must be carried out (/ then x then + then -) for all n greater than 4 
# DMAS - DIVISION, MULTIPLICATION, ADDITION, SUBTRACTION 

n   |    n<=2   |  n+3          | mod=n%4   |   mod==0  |   mod==1  |   mod==2  |  mod==3
#if n=2 -> 2*1 = 2
2   |     2     |
#if n=3 -> 3*2 /1 = 6/1 = 6
3   |           |  6
#if n=4 -> 4*3 /2 +1 = 12/2 +1 = 7
4   |           |  7
#if n=5 -> 5*4 /3 +2 - 1= 20/3 +2 -1 = 6.7 + 1 = 
5   |           |              | mod=5%4    |           |  5+2=7    |           |
#if n=6 -> 6*5 /4 +3 -2 *1 = 30/4 = 7.5 = ~8
6   |           |              | mod=6%4    |           |           |  6+2= 8   |
#if n=7 -> 7*6 /5 +4 -3*2 / 1 = 42/5 +4 - 6/1 = 8.4 + 4 - 6 = 12-6= 6
7   |           |              | mod=7%4    |           |           |           | 7-1=6
#if n=8 -> (8*7/6) +5 - (4*3/2 +1) = 56/6 + 5 - 4*1.5 + 1 = 9.3 + 5 - 4*1 + 1 = 9+5-4+1 = 9  
8   |           |              | mod=8%4    |   8+1=9   |           |           |
#if n=9 -> 9*8/7 + (6) - (5*4/3+2) -1 = 9*1.1 + 6 - 5*1.3 +2 -1 = 9+6-5+2-1 = 15-5+1=11
9   |           |              | mod=9%4    |           | 9+2=11
#if n=10 -> (10 * 9 / 8) + (7) - (6 * 5 / 4 + 3) - (2 * 1) = 90/8 +7 - 30/7 - 2 = 11.25+7 - 4.28 - 2 = 18.25 -6.28 = ~(18-6) = 12
10  |           |               | mod=10%4  |           |           |   10+2=12 |
```










