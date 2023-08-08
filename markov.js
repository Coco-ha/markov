"use strict";

/** Textual markov chain generator. */

class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
    this.text = this.getText();
  }

  /** Get markov chain: returns object of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    let chains = {};

    for (let i = 0; i < this.words.length; i++) {

      const currWord = this.words[i];
      const nextIdx = i + 1;
      const nextWord = this.words[nextIdx];
      //forEach?
      //TODO: can just check for undefined
      if (!(chains.hasOwnProperty(currWord))) {
        chains[currWord] = [];
      }

      if (nextWord !== undefined) {
        chains[currWord].push(nextWord);
      } else {
        chains[currWord].push(null);
      }
    }

    return chains;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    //TODO: slice/remove null
    // console.log("Story so far:", story);
    //start with The
    //iterate through values assigned to chains[The] and choose one
    //iterate through values assigned to that key in chains and choose one etc.
    //once null is reached, break and return story
    // chains = {
    //   The: [ 'cat', 'hat' ],
    //   cat: [ 'is' ],
    //   is: [ 'in', 'the', 'a' ],
    //   in: [ 'the' ],
    //   the: [ 'hat.', 'cat.' ],
    //   'hat.': [ 'The' ],
    //   'cat.': [ 'The', null ],
    //   hat: [ 'is' ],
    //   a: [ 'cat.' ]
    // }
    let text = "" + this.words[0];
    //TODO: text as array -> join without null
    let word = this.words[0];
    while (word !== null) {
      let randIdx = Math.floor((Math.random()) * this.chains[word].length);
      // console.log("word: ", word, "randIdx: ", randIdx);
      text += (` ${this.chains[word][randIdx]}`);
      word = this.chains[word][randIdx];
    }
    // console.log(story);
    return text;
  }
}

module.exports = {
  MarkovMachine,
};
