  
var empWagePerHrs = 20;
var empWorkingHrs;
var autoCheck = Math.random()*(2)+0;
autoCheck = Math.floor(autoCheck);
function empWage()
{
    switch (autoCheck)
    {
        case 1:
            empWorkingHrs = 16;
            console.log("Salary of fullTime employee:");
            break;
        default:
            empWorkingHrs = 8;
            console.log("Salary of partTime employee:");
            break;
    }
    var empDailyWage = (empWagePerHrs * empWorkingHrs);
    return empDailyWage;
}

let result = empWage();
console.log(result);