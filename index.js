import chalk from 'chalk'

let myUnusedVariable = 10;  // Trigger 'no-unused-vars' error

if (myUnusedVariable == 10) {  // Trigger 'eqeqeq' error
    console.log(chalk.bgBlue("it works"))
}
