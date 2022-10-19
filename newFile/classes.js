class SummerCamp {
    constructor(organizer, location,) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];

    }

    registerParticipant(name, condition, money) {

        if (this.priceForTheCamp.hasOwnProperty(condition) === false) {
            console.log("Unsuccessful registration at the camp.");
            return;
        }

        if (condition == "child" && money < Number(this.priceForTheCamp.child)) {
            console.log("The money is not enough");
            return;

        }

        if (condition == "student" && money < Number(this.priceForTheCamp.student)) {
            console.log("The money is not enough");
            return;

        }

        if (condition == "collegian" && money < Number(this.priceForTheCamp.collegian)) {
            console.log("The money is not enough");
            return;

        }



        if (JSON.stringify(this.listOfParticipants).includes(name)) {

            console.log(`The ${name} is already registered at the camp.`)

            return;

        }

        this.listOfParticipants.push({ "name": name, condition, power: 100, wins: 0 })
        console.log(`The ${name} was successfully registered.`)




    }

    unregisterParticipant(name) {

        let carName = this.listOfParticipants.filter(car => {
            if (car.name == name) {
                console.log(`The ${name} removed successfully.`)
            } else {
                console.log(`The ${name} is not registered in the camp.`)
            }
        })


    }

    timeToPlay(typeOfGame, participant1, participant2) {


        const first = this.listOfParticipants.find((participant) => {
            return participant.name == participant1;
        });

        const second = this.listOfParticipants.find((participant) => {
            return participant.name == participant2;
        });

        const exists = first != undefined && (second != undefined || typeOfGame == 'Battleship');


        //... nqma gi
        if (exists == false) {
            console.log("Invalid entered name")
            return;
        }

        if (typeOfGame != 'Battleship' && first.condition != second.condition) {
            console.log("Choose players with equal conditionan");
            return;
        }



        if (typeOfGame == "WaterBalloonFights") {
            let JSONpowerSort = JSON.stringify(this.listOfParticipants);
            if (this.listOfParticipants[0].power > this.listOfParticipants[1].power) {
                console.log(`The ${participant1} is winner in the game ${typeOfGame}.`)
                this.listOfParticipants[0].wins++
            } else if (this.listOfParticipants[0].power < this.listOfParticipants[1].power) {
                console.log(`The ${participant2} is winner in the game ${typeOfGame}.`);
                this.listOfParticipants[1].wins++
            } else {
                console.log(`There is no winner.`)
            }

        } else if (typeOfGame == "Battleship") {
            let carName = this.listOfParticipants.filter(car => {
                car.power += 20;
                console.log(`The ${car.name} successfully completed the game ${typeOfGame}.`);
            })
        }
    }

}




const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));




console.log(summerCamp.listOfParticipants);
