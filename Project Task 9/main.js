let registeredEarly=true;
let runnerAge=20;
let raceNumber = Math.floor(Math.random() * 1000);

if(runnerAge>18 && registeredEarly==true)
{
    raceNumber+=1000;
}

if(runnerAge>18 && registeredEarly==true)
{
    console.log(`Runner ${raceNumber}: You will race at 9:30 am`);
}
else if(runnerAge>18 && registeredEarly==false)
{
    console.log(`Runner ${raceNumber}: You will race at 11:00 am`);
}
else if(runnerAge<18)
{
    console.log(`Runner ${raceNumber}: You will race at 12:30 pm`);
}
else
{
    console.log(`See the registration desk`);
}

