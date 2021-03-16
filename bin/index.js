#!/usr/bin/env node

const yargs = require("yargs");
const _ = require('lodash')

const jokes = require('./jokes')

const options = yargs
  .usage("Usage: chuck -n <name>")
  .option("n", {
    alias: "name",
    describe: "Your name (used to greet you)",
    type: "string",
    demandOption: true
  })
  .argv;

console.log(`Here's a random Chuck Norris joke for you ${options.name}:`);

console.log(_.sample(jokes))  

// Potential extra challenge to rewrite functionality in vanilla JS, like:
// console.log(jokes[Math.floor(Math.random()*(jokes.length-1))])

