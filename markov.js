/** Textual markov chain generator. */


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
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
    // TODO: implement this!
    let chains = {};

    for (let i = 0; i < this.words.length; i++) {

      const word = this.words[i];
      const nextWord = this.words[i + 1];

      if (!(chains.hasOwnProperty(word))) {
        chains[word] = [];
      }

      if (!(chains[word].includes(chains[nextWord]))) {
        if (nextWord > this.words.length) {

          chains[word].push(nextWord);
        } else {

          chains[word].push(null);
          break;
        }
      }

    }

    console.log(chains);
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
  }
}

module.exports = {
  MarkovMachine,
};
