class Wrestling {
    constructor(competition) {
        this.wrestlersList = [];
        this.competition = competition
    }

    registerWrestlers(name, strenght, expercience, medals) {
        this.wrestlersList.push({ name, strenght, expercience, medals });
    };

    strenghtComparison(strenght) {
        const str = this.wrestlersList.filter((wrestler) => {
            if (wrestler.strenght < strenght) {
                console.log(`${wrestler.name} is not strong enough`);
            }

            console.log(`${wrestler.name} can compete`);
        });

    }

    expercienceComparison(expercience) {
        const exp = this.wrestlersList.filter((wrestler) => {
            if (wrestler.expercience < expercience) {
                console.log(`${wrestler.name} is not experienced enough`);
            }

            console.log(`${wrestler.name} can be professional`);
        })
    }


    medalComparison(medals) {
        const medal = this.wrestlersList.filter((wrestler) => {
            if (wrestler.medals == medals) {
                console.log(`${wrestler.name} does not have any medals`);
                return;
            }

            console.log(`${wrestler.name} has ${wrestler.medals}`);
        })
    }

    matches(competitor1, competitor2) {
        const first = this.wrestlersList.find((competitor) => {
            return competitor.name == competitor1;
        });

        const second = this.wrestlersList.find((competitor) => {
            return competitor.name == competitor2;
        });

        const exists = first != undefined && second != undefined;

        if (exists == false) {
            console.log("The match is not happening")
        }

        if (first.strenght * first.expercience > second.strenght * second.expercience) {
            console.log(`${first.name} is better than ${second.name} in wrestling!`);
        } else {
            console.log(`${second.name} is better than ${first.name} in wrestling!`);
        }

    }


    toString() {
        const output = this.wrestlersList.filter((wrestler) => {
            console.log(`name:${wrestler.name}
             strength:${wrestler.strenght}
             experience:${wrestler.expercience}
             medals:${wrestler.medals}`);
        })
    }


}

const wrestling = new Wrestling("Nationals");
console.log(wrestling.registerWrestlers("Georgi", 10, 6, 4));
console.log(wrestling.registerWrestlers("Petar", 7, 8, 0));
console.log(wrestling.registerWrestlers("Ivan", 8, 7, 10));
console.log(wrestling.registerWrestlers("Darin", 4, 3, 0));
console.log(wrestling.registerWrestlers("Stefan", 5, 2, 1));
console.log(wrestling.registerWrestlers("Filip", 2, 1, 0));
//console.log(wrestling.strenghtComparison(6));
//console.log(wrestling.expercienceComparison(5));
//console.log(wrestling.medalComparison(0));
//console.log(wrestling.toString());
console.log(wrestling.matches("Ivan", "Georgi"));
//console.log(wrestling.wrestlersList);