// Camelize, function that takes a string and separates on the dash
function capFirstLetter(word){
    return word[0].toUpperCase() + word.slice(1);
}
function camelize (text){
    //separate string on dash
    const tempArr = text.split("-");
    console.log(tempArr);

    //capitalize every word that isnt the first
    //store the first word
    const firstWord = tempArr[0];

    //capitalize the rest
    const capArr = tempArr.slice(1).map(capFirstLetter);
    console.log(capArr);

    //add first word back
    capArr.unshift(firstWord);
    console.log(capArr);

    //join them to a string
    const camelizedString = capArr.join("");
    console.log(camelizedString);
}

//Function named filterRange(arr, a, b)that gets an array, loos for elements with values higher or equal to a and lower or equal to be and return a result as an array
function filterRange(arr, a ,b){
    //iterate over array
    //if its higher than or equal to a or lower than or equal to be add to new arr
    return arr.filter(item => (a <= item && item <= b))
}


camelize("turtles-are-so-cool");
const filterMe = [42, 7, 19, 3, 88, 25, 61, 14, 50, 9];

const filtered = filterRange(filterMe, 5, 50);
console.log(filtered);

//Function named filterRangeInPlace(arr, a, b) that gets an array and removes from it all values except those that are between a and b, it should modify the array not return anything.
function filterRangeInPlace(arr, a, b){
    //iterate over the array and check if the element is greater than a AND less than b, if it isnt remove it
    for (let i = 0; i < arr.length; i++){
        //store the current element in a value
        let val = arr[i];
        //check if it is greater than a AND less than b
        if (val < a || val > b){
            arr.splice(i, 1);
            i--;
        }
    }
}

filterRangeInPlace(filterMe, 20, 70);
console.log(filterMe);

//Function that sorts elements in decreasing order
function sortBigToSmall(arr){
    arr.sort((a, b) => b - a)
    
}

sortBigToSmall(filterMe);
console.log(filterMe);

//Function named copySorted(arr) that takes an array, copies it into a new array and then sorts it.
function copySorted(arr){
    return arr.slice().sort()
}
const copySortMe = ["HTML", "JavaScript", "CSS"];
const copiedSorted = copySorted(copySortMe);
console.log(copiedSorted);

