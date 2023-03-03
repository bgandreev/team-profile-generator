const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');


console.log(
    '\n================== TEAM BUILDER WIZARD =================='
);


function createMngr() {
    console.log('\nStart building your team by creating a manager!');
    console.log('\n');
    inquirer
    .prompt([
    {
      type: 'input',
      name: 'mngrName',
      message: '\nPlease input the full name of the team\'s manager?',
      validate: (answer) => {
        if (answer !== '') {
          return true;
        }
        return 'Please enter the manager\'s full name!';
      },
    },
    {
      type: 'input',
      name: 'mngrId',
      message: 'Please input the manager\'s ID.',
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
        return 'Please use numeric characters only!';
      },
    },
    {
      type: 'input',
      name: 'mngrEmail',
      message: 'Please input the manager\'s email?',
      validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return 'Please enter a valid email address.';
      },
    },
    {
      type: 'input',
      name: 'mngrNumber',
      message: 'Please input the manager\'s contact phone number?',
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
        return 'Please use numeric characters only!';
      },
    },
  ])

  .then(answers => {
    console.log(answers);
  });
}
  

createMngr();