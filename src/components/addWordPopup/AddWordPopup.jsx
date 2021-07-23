import { useCallback, useState } from "react";
import {
  AddNewWord,
  Input,
  Letter,
  Letters,
  Wrapper,
} from "./addWordPopup.styled";
import getRandomColor from "../../utils/randomColor";
import uuidv4 from "../../utils/uuidv4";
import CreateNewWord from "../../utils/createNewWord";
import { addNewWord } from "../../redux/reducers/dndReducer";
import { useDispatch } from "react-redux";

function AddWordPopup() {
  const [title, setTitle] = useState("");
  const [colors, setColors] = useState([]);

  const dispatch = useDispatch();

  const findColor = useCallback(
    (id) => {
      return colors.find((color) => color.id === id)?.bg;
    },
    [colors]
  );

  const changeBlockColor = useCallback(
    (id) => {
      const updatedColors = colors.map((color) => {
        if (id === color.id) {
          color.bg = getRandomColor();
        }
        return color;
      });
      setColors(updatedColors);
    },
    [colors]
  );

  const lettersToObj = (letters) => {
    const result = [];
    for (let i = 0; i < letters.length; i++) {
      result.push({
        bg: getRandomColor(),
        title: letters[i],
        id: i + 1,
        hold: false,
        droppedHere: false,
      });
    }
    return result;
  };

  const handleTitle = useCallback(
    (e) => {
      const letter = e.target.value.trim().toLowerCase();
      if (letter?.length + 1 >= 10) return false;
      const changedLetters = lettersToObj(letter);
      setColors(changedLetters);
      setTitle(letter);
    },
    [setTitle]
  );

  const handleAddNewWord = () => {
    const newWord = new CreateNewWord(
      uuidv4(),
      title,
      false,
      false,
      getRandomColor(),
      colors
    );
    dispatch(addNewWord(newWord));
  };

  return (
    <Wrapper>
      <div>
        <Input
          placeholder={"Лисиця"}
          onChange={(e) => handleTitle(e)}
          maxLength={10}
        />
        <AddNewWord type={"submit"} onClick={handleAddNewWord}>
          add new word
        </AddNewWord>
      </div>

      <Letters>
        {colors.map(({ title, id }) => (
          <Letter
            key={id}
            bg={findColor(id)}
            onClick={() => changeBlockColor(id)}
          >
            {title}
          </Letter>
        ))}
      </Letters>
    </Wrapper>
  );
}

export default AddWordPopup;
