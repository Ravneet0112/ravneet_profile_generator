const inquirer = require('inquirer');
const html = require('http');
const fs = require('fs');
const path = require('path');

const employee = require('./lib/employee.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const team = [];

const DIST_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(DIST_DIR, "index.html");

const teamHTML = require('./src/team.js');

function addMember() {
    inquirer.
        prompt([
            {
                type: 'list',
                name: 'Roles',
                message: 'Select a role',
                choices: ['Engineer', 'Intern', 'Manager', 'Build team'],
            },])
        .then((value) => {
            if (value.Roles === 'Engineer') {
                addEngineer();
            } else if (value.Roles === 'Intern') {
                addIntern();
            }
            else if (value.Roles === 'Manager') {
                addManager();
            }
            else {
                createTeam();
            };
        });

}

function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the employee?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the employee?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the employee?',
            },
            {
                type: 'input',
                name: 'OfficeNumber',
                message: 'What is the office number of the employee?',
            },
        ])
        .then((value) => {
            const manager = new Manager(value.name, value.id, value.email, value.OfficeNumber);
            team.push(manager);
            addMember();
        });

}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the employee?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the employee?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the employee?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the github of the employee?',
            },
        ])
        .then((value) => {
            const engineer = new Engineer(value.name, value.id, value.email, value.github);
            team.push(engineer);
            addMember();
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the employee?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the id of the employee?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the employee?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the school of the employee?',
            }
        ])
        .then((value) => {
            const intern = new Intern(value.name, value.id, value.email, value.school);
            team.push(intern);
            addMember();
        });
}

function createTeam() {
    
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    } else {
        fs.writeFileSync(outputPath, teamHTML(team), "utf-8");
        console.log('HTML file created!');

    }
}

addMember();



