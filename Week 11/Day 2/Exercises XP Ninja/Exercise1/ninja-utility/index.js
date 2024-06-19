// index.js

const { program } = require('commander');
const greet = require('./commands/greet.js');
const fetchWeather = require('./commands/fetch.js');
const readFile = require('./commands/read.js');

program
    .version('1.0.0')
    .description('Ninja Utility CLI');

program
    .command('greet')
    .description('Display a colorful greeting')
    .action(() => {
        greet();
    });

program
    .command('fetch')
    .description('Fetch data from a public API')
    .action(() => {
        fetchWeather();
    });

program
    .command('read <filePath>')
    .description('Read and display file contents')
    .action((filePath) => {
        readFile(filePath);
    });

program.parse(process.argv);
