import { AddWord, BlockInLine, Header, Wrapper } from "./home.styled";
import Block from "../../components/Block/Block";
import { useDispatch, useSelector } from "react-redux";
import { addNewWord, selectItems } from "../../redux/reducers/dndReducer";
import { NavLink, useParams } from "react-router-dom";
import { useCallback } from "react";

function Home() {
  const { items } = useSelector(selectItems);
  const { word } = useParams();
  const intWord = Number(word);
  const dispatch = useDispatch();

  const getFullTitle = () => {
    let title = "";
    items[intWord].letters.forEach((el) => {
      title += el.title + " ";
    });
    return title;
  };

  const addNewWordButton = useCallback(() => {
    const word = prompt("Напишіть слово", "Лисиця");
    const toArray = word.split("");
    const letters = [];
    for (let i = 0; i < toArray.length; i++) {
      letters.push({
        id: i + 1,
        title: toArray[i],
        hold: false,
        droppedHere: false,
        bg: "#a29bfe",
      });
    }
    const newWord = {
      id: new Date(),
      answer: word,
      points: 1,
      letters,
    };
    dispatch(addNewWord(newWord));
  }, [dispatch]);

  return (
    <Wrapper>
      <Header>{getFullTitle()}</Header>
      <div>
        <AddWord onClick={addNewWordButton}>add new word</AddWord>
        <NavLink to={"/2"}>2</NavLink>
      </div>
      <BlockInLine>
        {items[intWord].letters.map(({ id, title, droppedHere, hold, bg }) => (
          <Block
            key={id}
            color={bg}
            title={title}
            droppedHere={droppedHere}
            hold={hold}
            id={id}
          />
        ))}
      </BlockInLine>
    </Wrapper>
  );
}

export default Home;
