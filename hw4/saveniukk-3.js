class Warrior {
    #level = 1;
    #achievements = [];
    #rank = "Pushover";
    #experience = 100;

    constructor() {
        this.experience = function () {
            return this.#experience;
        };
        this.level = function () {
            return this.#level;
        }
        this.achievements = function () {
            return this.#achievements;
        }
        this.rank = function () {
            return this.#rank;
        }
    }

    upRank() {
        if (this.#level >= 1 && this.#level < 10) {
            this.#rank = "Pushover";
        } else if (this.#level >= 10 && this.#level < 20) {
            this.#rank = "Novice";
        } else if (this.#level >= 20 && this.#level < 30) {
            this.#rank = "Fighter";
        } else if (this.#level >= 30 && this.#level < 40) {
            this.#rank = "Warrior";
        } else if (this.#level >= 40 && this.#level < 50) {
            this.#rank = "Veteran";
        } else if (this.#level >= 50 && this.#level < 60) {
            this.#rank = "Sage";
        } else if (this.#level >= 60 && this.#level < 70) {
            this.#rank = "Elite";
        } else if (this.#level >= 70 && this.#level < 80) {
            this.#rank = "Conqueror";
        } else if (this.#level >= 80 && this.#level < 90) {
            this.#rank = "Champion";
        } else if (this.#level >= 90 && this.#level < 100) {
            this.#rank = "Master";
        } else if (this.#level === 100) {
            this.#rank = "Greatest";
        }
    }

    training(event) {
        if (this.#level >= event[2]) {
            this.#experience += event[1];
            this.#level = Math.floor(this.#experience / 100);
            this.#achievements.push(event[0]);
            this.updateLevel();
            this.upRank();
            return event[0];
        } else {
            return "Not strong enough";
        }
    }

    battle(enemy_level) {
        if (enemy_level < 1 || enemy_level > 100) return "Invalid level";
        let diff = enemy_level - this.#level;
        if (diff === 0) {
            this.#experience += 10;
            this.updateLevel();
            this.upRank();
            return "A good fight";
        }
        else if(diff <= -2){
            return "Easy fight";
        }
        else if (diff === -1) {
            this.#experience += 5;
            this.updateLevel();
            this.upRank();
            return "A good fight";
        }
        else if (diff >= 5 && Math.floor(enemy_level / 10) > Math.floor(this.#level / 10)) {
            return "You've been defeated";
        }
        else if (diff >= 1) {
            this.#experience += 20 * Math.pow(diff, 2);
            this.updateLevel();
            this.upRank();
            return "An intense fight";
        }

        this.#level = Math.floor(this.#experience / 100);
        this.upRank();
    }

    updateLevel() {
        this.#level = Math.floor(this.#experience / 100);

        if (this.#level > 100) {
            this.#level = 100;
            this.#experience = 10000;
        }
    }
}