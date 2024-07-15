// terminal: tsc index.ts … too much! => tsc --init => config: outdir: './build' rootdir: './src' =>  tsc -w (watches src automatically and builds in build)
// npm i nodemon concurrently => package.json: set up start commands
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
