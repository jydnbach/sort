// terminal: tsc index.ts … too much! => tsc --init => config: outdir: './build' rootdir: './src' =>  tsc -w (watches src automatically and builds in build)
// npm i nodemon concurrently => package.json: set up start commands

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
