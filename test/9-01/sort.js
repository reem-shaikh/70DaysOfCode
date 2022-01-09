let arraySize = 40 
let array = [arraySize]
let sortedArray = [arraySize]

let min = 3
//min value to generate 

let max = 25 
//max value to generate 

generateArray()

function generateArray(){
    for (var i=0; i<arraySize; i++){
    //since were starting counter form 0
    //i<arraySize = 0-39
    array[i] = generateArrayValue(min, max)
    //generate random numbers from min:3 to max:250 upto 40 number values

    //using measures to prevent duplicates while generating a number between the given value range 
    if(array[i] == array[i-1]){
        //the number generated shouldnt be the same in adjacent places
        array[i] = generateArrayValue(min, max)
    }
    } 
}

function generateArrayValue(){
    //generate a random num within specified number between min and max 
    //between 3 and 250 
    return Math.floor(Math.random()* (max - min) + min)
    //it returns a decimal value 
}

console.log(array)

//bubble sort algorithm 
bubbleSort(array)

//get value from generated array and add it in bubble sort array
function bubbleSort(array) {
    sortedArray = Array.from(array)

//nested for loop
    //first loop iterates over array again and again until its sorted 
    //second loop test element after it 
    //3   1   2  4 

    for(var i=0; i<arraySize; i++){
        for(var j=0; j<arraySize-1; j++){
            //swap if next element greater than current element
            if(sortedArray[j] > sortedArray[j+1]){
                let x = sortedArray[j]
                sortedArray[j] = sortedArray[j+1]
                sortedArray[j+1] = x
            }
        }
    }
}

console.log(sortedArray)