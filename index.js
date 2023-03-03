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
      name: 'engName',
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
      name: 'engId',
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
      name: 'engEmail',
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
      name: 'engNumber',
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

function createEng() {
  console.log('\n');
  inquirer
  .prompt([
  {
    type: 'input',
    name: 'engName',
    message: 'Please input the full name of the engineer you are adding.',
    validate: (answer) => {
      if (answer !== '') {
        return true;
      }
      return 'Please enter the engineer\'s full name!';
    },
  },
  {
    type: 'input',
    name: 'engId',
    message: 'Please input the engineer\'s ID.',
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
    name: 'engEmail',
    message: 'Please input the engineer\'s email address?',
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
    name: 'engGithub',
    message: 'Please input the engineer\'s GitHub username?',
    validate: (answer) => {
      if (answer !== '') {
        return true;
      }
      return 'Please specify the GitHub username.';
    },
  },
])

.then(answers => {
  console.log(answers);
});
}

function createInt() {
  console.log('\n');
  inquirer
  .prompt([
  {
    type: 'input',
    name: 'intName',
    message: 'Please input the full name of the intern you are adding.',
    validate: (answer) => {
      if (answer !== '') {
        return true;
      }
      return 'Please enter the intern\'s full name!';
    },
  },
  {
    type: 'input',
    name: 'intId',
    message: 'Please input the intern\'s ID.',
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
    name: 'intEmail',
    message: 'Please input the intern\'s email address?',
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
    name: 'intSchool',
    message: 'Please input the interns\'s School?',
    validate: (answer) => {
      if (answer !== '') {
        return true;
      }
      return 'Please specify the intern\'s school.';
    },
  },
])

.then(answers => {
  console.log(answers);
});
}





createMngr();
createEng();
createInt();
