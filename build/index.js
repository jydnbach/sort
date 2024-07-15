"use strict";
console.log('hi there'); // terminal: tsc index.ts … too much! => tsc --init => config: outdir: './build' rootdir: './src' =>  tsc -w (watches src automatically and builds in build)
// npm i nodemon concurrently => package.json: set up start commands
const log = () => {
    console.log('something');
};
