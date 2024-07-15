"use strict";
// terminal: tsc index.ts … too much! => tsc --init => config: outdir: './build' rootdir: './src' =>  tsc -w (watches src automatically and builds in build)
// npm i nodemon concurrently => package.json: set up start commands
class Sorter {
    // collection: number[]; // can delete bc of public
    constructor(collection) {
        this.collection = collection;
        // this.collection = collection; // can delete bc of public
    }
    sort() {
        const { length } = this.collection;
        // sorting algorithm
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // all of this only works if collection is number[]
                // if collection is an array of numbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // only going to work if collection is a string
                // if collection is a string, do this logic instead:
                // compare and swap chars in string
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
