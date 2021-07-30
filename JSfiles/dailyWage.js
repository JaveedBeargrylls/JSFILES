var empWagePerHrs = 20;
var totalEmpHrs;

var randomCheck = Math.random()*(2)+0;
randomCheck = Math.floor(randomCheck);

function empDailyWage()
{
    if (randomCheck == 1) 
    {
        totalEmpHrs = 8;    
    }
    else
    {
        totalEmpHrs = 4;
    }
    let DailyWage = totalEmpHrs * empWagePerHrs;
    return DailyWage;
}

let result = empDailyWage();
console.log("Employee Daily Wage:", result);