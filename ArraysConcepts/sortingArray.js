var count = 1;
var arr = new Array();
var size = 0;
function RandomNumbers()
{
    while(count <= 10)
    {
        var random = Math.random()*(899)+100;
        random = Math.floor(random);
        arr[size] = random;
        console.log(arr);
        count ++;
    }


}
var temp;
function findSecondSmallest_SecondLargest()
{
    for(var i = 0; i < 10; i++)
    {
        for(var j = 1; j < i ; j ++)
        {
            if(arr[i] > arr[j])
            {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log("Array after sorting:");
    for(var x = 0; x < 10; x++)
    {
        console.log(arr);
    }
    console.log("second largest element",arr[1]);
    console.log("second smallest element",arr[8]);
}

RandomNumbers();
findSecondSmallest_SecondLargest();
