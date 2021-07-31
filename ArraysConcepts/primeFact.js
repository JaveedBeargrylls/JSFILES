var num = 20;
var arr = new Array();
var size = 0;
function primeNumbers()
{
    for(var i = 1; i < num; i++)
    {
        for(var j = 2; j < i; j++)
        {
            if(i % j == 0)
            {
                break;
            }
        }
        if(i == j)
        {
            if (num % i == 0) 
            {
                arr[size] = i;
                size ++;
            }
            
        }
    }

    console.log("Prime factors:");
    for(var i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
    }


}
primeNumbers();