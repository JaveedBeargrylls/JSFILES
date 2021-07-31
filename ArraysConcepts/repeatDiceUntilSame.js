class RepeateDice
{
    rollDice()
    { 
        var flag1=0,flag2=0,flag3=0,flag4=0,flag5=0,flag6=0;
        while(true)
        {
            var dice = Math.random()*(6)+1;
            dice = Math.floor(dice);
            if(dice == 1)
            {
                flag1 ++;
            }
            else if(dice == 2)
            {
                flag2 ++;
            }      
            else if(dice == 3)
            {
                flag3 ++;
            }      
            else if(dice == 4)
            {
                flag4 ++;
            }      
            else if(dice == 5)
            {
                flag5 ++;
            }      
            else
            {
                flag6 ++;
            }       
            
            if(flag1 == 10 || flag2 == 10 || flag3 == 10 || flag4 == 10 || flag5 ==10 || flag6 == 10)
            {
                console.log("Repeating dice roll until same element found 10 times");
                break;
            }
        }

    }
            
}

let Dice = new RepeateDice();
Dice.rollDice();
