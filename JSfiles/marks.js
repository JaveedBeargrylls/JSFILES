var physics,Maths,Biology;

function getData()
{
    const readline = require('require').createInterface({
    
        input : Process.stdin,
        output: Process.stdout
    });

    readline.question('Enter a number?',num1,num2 =>{
        console.log(`${num1}`);
        console.log(`${num2}`);
        readline.close();
    });
}