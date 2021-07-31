function repeateDigit()
{
    var arr = new Array();
    var size = 0;
    for(var i = 0; i < 100; i++)
    {
        if(i % 10 == 1 || i % 10 == 2 || i % 10 == 3 || i % 10 == 4 || i % 10 == 5 || i % 10 == 6 || i % 10 == 7 || i % 10 == 8 || i % 10 == 9 )
        {
            arr[size] = i;
            size ++;
        }
    }

    console.log("0-100 Repeated elements in array:");
    for(var i = 0; i < 9; i++)
    {
        console.log(arr[i]);
    }
}

repeateDigit();