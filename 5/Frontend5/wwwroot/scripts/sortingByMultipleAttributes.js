"use strict"

// class TestingSystem
function TestingSystem() {
    this.numberOfTeams;
    this.teams;

    this.InputNumberOfTeams = function (newNumberOfTeams) {
        if (newNumberOfTeams >= 2) {
            this.numberOfTeams = newNumberOfTeams;
        }
        else {
            console.log("You need more");
        }
    }

    this.AddTeams = function (newTeams) {
        if (newTeams.length == this.numberOfTeams) {
            let teamsAreCorrect = true;

            newTeams.forEach(function (element) {
                if (element.length != 2) {
                    teamsAreCorrect = false;
                }
            });

            if (teamsAreCorrect) {
                this.teams = [];

                for (let i = 0; i < this.numberOfTeams; i++) {
                    this.teams.push(new Team(i + 1, newTeams[i][0], newTeams[i][1]));
                }
            }
        }
        else {
            console.log(`You must have exactly ${this.numberOfTeams} teams`);
        }
    }

    this.SortTeams = function () {
        for (let i = 0; i < this.numberOfTeams - 1; i++) {
            for (let j = 0; j < this.numberOfTeams - i - 1; j++) {
                if (this.teams[j].solvedTasks < this.teams[j + 1].solvedTasks) {
                    [this.teams[j], this.teams[j + 1]] = [this.teams[j + 1], this.teams[j]];
                }
                else if (this.teams[j].solvedTasks == this.teams[j + 1].solvedTasks) {
                    if (this.teams[j].timePenalty > this.teams[j + 1].timePenalty) {
                        [this.teams[j], this.teams[j + 1]] = [this.teams[j + 1], this.teams[j]];
                    }
                    else if (this.teams[j].timePenalty == this.teams[j + 1].timePenalty) {
                        if (this.teams[j].serialNumber > this.teams[j + 1].serialNumber) {
                            [this.teams[j], this.teams[j + 1]] = [this.teams[j + 1], this.teams[j]];
                        }
                    }
                }
            }
        }
    }

    this.ShowTeams = function () {
        for (let i = 0; i < this.numberOfTeams; i++) {
            console.log(this.teams[i].serialNumber);
        }
    }
}

// class Team
function Team(serialNumber, solvedTasks, timePenalty) {
    this.serialNumber = serialNumber;
    this.timePenalty = timePenalty;
    this.solvedTasks = solvedTasks;
}