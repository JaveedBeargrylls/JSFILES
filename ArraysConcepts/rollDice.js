class rollDice
{
    diceRoll()
    {
        var dice = Math.random() * (6) + 1;
        dice = Math.floor(dice);
        console.log(dice);
    }
}

var dice = new rollDice();
dice.diceRoll();