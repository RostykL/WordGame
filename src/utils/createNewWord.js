import shuffleArray from "./shuffleArray";

class CreateNewWord {
  constructor(id, title, hold, droppedHere, bg, letters) {
    this.id = id;
    this.answer = title;
    this.hold = hold;
    this.droppedHere = droppedHere;
    this.bg = bg;
    this.letters = shuffleArray(letters);
  }
}

export default CreateNewWord;
