'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('             Karey Higuera'),
  handle: chalk.white('kbravh'),
  work: chalk.white('Associate Consultant at Fenway Group'),
  twitter: chalk.green('https://twitter.com/') + chalk.cyan('kbravh'),
  npm: chalk.green('https://npmjs.com/') + chalk.grey('~kbravh'),
  github: chalk.green('https://github.com/') + chalk.yellow('kbravh'),
  linkedin: chalk.green('https://linkedin.com/in/') + chalk.magenta('kbravh'),
  npx: chalk.red('npx') + ' ' + chalk.white('kbravh'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelnpm: chalk.white.bold('       npm:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
                newline + newline + // Add one whole blank line
                working + newline + newline +// data.labelWork + data.work
                twittering + newline + // data.labelTwitter + data.twitter
                npming + newline + // data.labelnpm + data.npm
                githubing + newline + // data.labelGitHub + data.github
                linkedining + newline + // data.labelLinkedIn + data.linkedin
                carding // data.labelCard + data.npx


fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
