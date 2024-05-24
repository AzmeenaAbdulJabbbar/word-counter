#!/usr/bin/env node
import inquirer from "inquirer";
const userAns = await inquirer.prompt([
    {
        name: 'sentence',
        type: 'input',
        message :'Enter your sentenceto count the word'

    }   
])

const word = userAns.sentence.trim().split(' ')
console.log(word)
console.log(`your sentence word count is ${word.length}`)