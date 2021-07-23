import { useCallback, useEffect, useState } from "react";
import {
  AddNewWord,
  Input,
  Letter,
  Letters,
  Wrapper,
} from "./addWordPopup.styled";
import getRandomColor from "../../utils/randomColor";
import debounce from "lodash";
import uuidv4 from "../../utils/uuidv4";

function AddWordPopup() {
  const [title, setTitle] = useState(null);
  const [colors, setColors] = useState([]);

  const handleWriteTitle = useCallback((e) => {
    const key = e.keyCode || e.charCode;
    if (!(key >= 65 && key <= 120) && key !== 32 && key !== 0) return false;
    const letter = e.target.value;
    const lastLetter = letter[letter.length - 1];
    setTitle(letter.toLowerCase());
    setColors((prev) => [
      ...prev,
      {
        bg: getRandomColor(),
        title: lastLetter,
        id: uuidv4(),
        hold: false,
        droppedHere: false,
      },
    ]);
  }, []);

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
      console.log(colors);
    },
    [colors]
  );

  return (
    <Wrapper>
      <div>
        <Input
          placeholder={"Лисиця"}
          onKeyUp={(e) => handleWriteTitle(e)}
          maxLength={10}
        />
        <AddNewWord type={"submit"}>add new word</AddNewWord>
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
