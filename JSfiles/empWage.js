var empWorkingHrs;
var empWagePerHrs = 20;
var autoCheck = Math.random()*(2)+0;

function employeeDailyWage()
{
    if (Math.floor(autoCheck) == 1) 
    {
        empWorkingHrs = 16;   
        console.log("employee fullTime wage:"); 
    } 
    else 
    {
        empWorkingHrs = 8;
        console.log("employee partTime wage:");
    }
    var empDailyWage = (empWagePerHrs * empWorkingHrs);
    return empDailyWage; 
}

let empSalary = employeeDailyWage();
console.log(empSalary);