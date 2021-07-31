let count = 1;
while(count <= 10)
{
    var random = Math.random()*(999)+100;
    console.log(Math.floor(random));
    count ++;
}

// storing the data into the array

let count1 = 1;
let ran = new Array();
while(count <= 10)
{
    var random = Math.random()*(899)+100;
    random = Math.floor(random);
    ran = [random];
    console.log(ran);
    count1 ++;
}

// find the 2nd largest number and 2nd smallest number

var count2 = 1;
var arr = new Array();
var size = 0;
function RandomNumbers()
{
    while(count2 <= 10)
    {
        var random = Math.random()*(899)+100;
        random = Math.floor(random);
        arr[size] = random;
        size ++;
        console.log(arr);
        count2 ++;
    }


}
var temp;
function findSecondSmallest_SecondLargest()
{
    arr.sort();
    console.log("Array after sorting:");
    console.log(arr);
    console.log("second largest element",arr[8]);
    console.log("second smallest element",arr[1]);
}

RandomNumbers();
findSecondSmallest_SecondLargest();