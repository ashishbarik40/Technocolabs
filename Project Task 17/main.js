class School{
    constructor(name,level,numberOfStudents)
    {
        this._name=name;
        this._level=level;
        this._numberOfStudents=numberOfStudents;
    }

    get name(){
        return this._name;
    }

    get level(){
        return this._level;
    }

    get numberOfStudents(){
        return this._numberOfStudents;
    }

    quickFacts(){
        console.log(`${this.name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeacher){
        let x=Math.floor(substituteTeacher.length()*Math.random());
        return substituteTeacher[x];
    }

    set numberOfStudents(newNumberOfStudents){
        if(isNaN(newNumberOfStudents))
        {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
        else
        {
            this._numberOfStudents=newNumberOfStudents;
        }
    }
}

class PrimarySchool extends School{
    constructor(name,numberOfStudents,pickupPolicy)
    {
        super(name,'primary',numberOfStudents);
        this._pickupPolicy=pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

class HighSchool extends School{
    constructor(name,numberOfStudents,sportsTeams)
    {
        super(name,'high',numberOfStudents);
        this._sportsTeams=sportsTeams;
    }

    get sportsTeams(){
        for(let i=0;i<this.sportsTeams.length;i++)
        {
            console.log(this._sportsTeams[i]);
        }
    }
}

const lorraineHansbury=new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
lorraineHansbury.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith=new HighSchool('Al E Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams();