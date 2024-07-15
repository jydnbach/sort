export class Sorter {
  // collection: number[]; // can delete bc of public

  constructor(public collection: /* TODO fix me*/ ) {
    // this.collection = collection; // can delete bc of public
  }

  sort(): void {
    const { length } = this.collection;

    // sorting algorithm
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }


      }
    }
  }
}
