#!/usr/bin/env node

const { program } = require('commander');
const { description, version } = require('../package.json');
const { lookup } = require('./main.js');

program
  .name('ipinfo-cli')
  .description(description)
  .version(version);

program
  .command('lookup')
  .description('Find info about an IP address')
  .argument('<ip>', 'IP to lookup')
  .option('-d, --debug', 'output extra debugging')
  .option('-f, --format <type>', 'Output format: json, table, city, location', null,  'json')
  .action((ip, options) => lookup(ip, options));

program.parse();
