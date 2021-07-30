var empWorkingHrs;
var empSalaryPerHrs = 20;
var autoCheck = Math.random()*(2)+0;
var empWage = 0;

function empMonthlyWage()
{
    if (Math.random(autoCheck) ) 
    {
        empWorkingHrs = 8;    
    } 
    else 
    {
        empWorkingHrs = 4;
    }
    for(var empSalary = 1; empSalary <=30; empSalary++)
    {
        empWage += + (empWorkingHrs * empSalaryPerHrs);
    }
    return empWage;
}

let result = empMonthlyWage();
console.log("MonthlyWage = "+result);