import { AddWord, BlockInLine, Header, Wrapper } from "./home.styled";
import Block from "../../components/Block/Block";
import { useDispatch, useSelector } from "react-redux";
import { addNewWord, selectItems } from "../../redux/reducers/dndReducer";
import { NavLink, useParams } from "react-router-dom";
import { useCallback } from "react";
import { getFullTitle } from "../../utils/getFullTitle";
import CreateNewWord from "../../utils/createNewWord";

function Home() {
  const { items } = useSelector(selectItems);
  const { word } = useParams();
  const intWord = Number(word);
  const dispatch = useDispatch();

  const addNewWordButton = useCallback(() => {
    const word = prompt("Напишіть слово", "Лисиця");
    const newWord = new CreateNewWord(new Date(), word, false, false, "red");
    dispatch(addNewWord(newWord));
  }, [dispatch]);

  return (
    <Wrapper>
      <Header>{getFullTitle(intWord, items)}</Header>
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
