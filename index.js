import chalk from 'chalk';

const myUnusedVariable = 10;

if (myUnusedVariable === 10) {
  console.log(chalk.bgBlue('it works'));
}

function calculate(a, b, operation) {
    if (operation === 'add') {
      return a + b;
    } else if (operation === 'subtract') {
      return a - b;
    } else {
      throw new Error('Invalid operation');
    }
  }  
  
  module.exports = calculate;
  