class CreateNewWord {
  constructor(id, title, hold, droppedHere, bg, letters) {
    this.id = id;
    this.title = title;
    this.hold = hold;
    this.droppedHere = droppedHere;
    this.bg = bg;
    this.letters = this.getLetter(title);
  }

  getLetter(word) {
    let letters = [];
    for (let i = 0; i < word.length; i++) {
      letters.push({
        id: i + 1,
        title: word[i],
        hold: false,
        droppedHere: false,
        bg: "#a29bfe",
      });
    }
    return letters;
  }
}

export default CreateNewWord;
