JS **multi paradigm language**
  can be used in different programming 
  structures.
> multiple programming approaches can be 
  implemented through:

- object oriented approach 
- procedural programming
- functional programming

✅Js is **Dyanamically Typed Language** 
   it doesnt care what datatype is in the array


# Loosely typed Language/ Dyanamically typed
  programming language that does not require a variable to be defined. For example, Perl is a loosely typed language, you can declare a variable, but it doesn't require you to classify the type of variable.

>> JS is dyanamically typed
>> loosely typed programming language
>> lineant 
>> not strongly typed 

        //if you say 

        console.log(arr[10]);

        it only says undefined in console 

Any Loosely typed language like:
JavaScript
ActionScript
Clojure
Lisp
Lua
Perl
Python
Ruby
Smalltalk

you can do this:-

1. Function stored in a variable.
2. Function as a value in an object 

# Ways to call a function and its differences

1. saves only  a, b *parameter value in a function*

       
        function sum(a, b)
        {
            c = a+b;
            console.log(c);
        }
        sum(10,14);
        

        var addition = sum(10,20);
        console.log(addition);

## Function as a variable reference 
2. function can be assigned to a variable
    - saves *entire function in the variable "sum"* 
    
        
        var sum = function (a, b)
        {
            c = a+b;
            console.log(c);
        }
        sum(11,14);
       
        var addition= sum(10,20);
        console.log(addition);

3. we can also save function as an object property 

       
        var obj = {
            'key1' : 'something',

            'key2' : function(a, b) 
            //key can also store a function
            {
                var sum = a+b;
                return sum;
            },
            'sum' : sum, 
            //function as a value in an object 
        }
        
        var object = obj.key2(10,20)
        console.log(key2)

        var addition = obj.sum(10,20)
        console.log(addition)

# Function as a value in an object 
**you can also map an external defined function to a key in the object**

> to call the function in the object
       
        var s = obj.key2(10, 20);
        console.log("sum of function",s);
        

> calling the function mapped to the key
       
        console.log(obj.sum(40,50));
      
    
# Talking about Json again:
1. we started off by writing a js object named "single_qs"
   we defined a Json object container named "question_list"

     
         var question_list = [{}]
         var single_qs = {
        'text': 'which subject we are studying?',

        'options': ['html', 'css', 'js', 'react'],
        //we can create array inside object

        'correct_answer': 'js',
        'price_amount': 1000,
      }
   

       question_list.push(single_qs)
    //pushing single_qs array into question_list 
    console.log('single_qs list', single_qs)

    {text: 'which subject we are studying?', options: Array(4), correct_answer: 'js', price_amount: 1000}
    correct_answer: "js"
    options: (4) ['html', 'css', 'js', 'react']
    price_amount: 1000
    text: "which subject we are studying?"
    [[Prototype]]: Object
  

       console.log('qs list', question_list)

   
    (2) [{…}, {…}]
    0: {}
    1: {text: 'which subject we are studying?', options: Array(4), correct_answer: 'js', price_amount: 1000}
    length: 2
    [[Prototype]]: Array(0)

   
      
2. Instead of pushing the object "single_qs" into the object "question_list" we place single_qs inside question_list 

    
    //Object inside Object is called Object Notation 
    var question_list = [{
  
        "text" : "which subject we are studying?",

        "options": ['html', 'css', 'js', 'react'],
        //we have Array inside object 

        "correct_answer" : 'js',
        "price_amount" : 1000,
    }];

  

        console.log(question_list);

    
    Array(1)
    0: {text: 'which subject we are studying?', options: Array(4), correct_answer: 'js', price_amount: 1000}
    length: 1
    [[Prototype]]: Array(0)



>> Javascript Object Notation contains 
1. Object inside object 
2. Arrays inside object 
  

# Now coming to the assignment 
> we take an object kbc and define other objects inside it 


  var kbc =
        {};
  

>> we define question_list as an object inside kbc

   
     var kbc =
          {

          'question_list' : [
          {
          text: 'which subject we are studying?',

          options: ['html', 'css', 'js', 'react'],
          //we can create array inside object

          correct_answer: 'js',
          price_amount: 1000,
          }
      ],

        }; 

>>we add more objects inside it 

    var kbc =
          {
            'current_question_no' : 0,

            'print_question' : function ()
            {
              //print next question on console
              
            },

            'select_answer': function(answer)
            {
              //checks whether answer is right or not
              //correct- increement counter
              //incorrect- show message showing you have lost and end the game
            },

        'question_list' : [
          {
          text: 'which subject we are studying?',

          options: ['html', 'css', 'js', 'react'],
          //we can create array inside object

          correct_answer: 'js',
          price_amount: 1000,
          }
      ],

        'winning_prize' : 0,

        };

        console.log(kbc);

 
   {current_question_no: 0, question_list: Array(1), winning_prize: 0, print_question: ƒ, select_answer: ƒ}
   current_question_no: 0
   print_question: ƒ ()

   question_list: Array(1)
   0: {text: 'which subject we are studying?', options: Array(4), correct_answer: 'js', price_amount: 1000}
   length: 1
   [[Prototype]]: Array(0)

   select_answer: ƒ (answer)
   winning_prize: 0
   [[Prototype]]: Object 


     


