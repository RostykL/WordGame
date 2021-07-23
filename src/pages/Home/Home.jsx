import { BlockInLine, Header, Wrapper } from "./home.styled";
import Block from "../../components/Block/Block";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/reducers/dndReducer";
import { useParams } from "react-router-dom";
import { getFullTitle } from "../../utils/getFullTitle";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { useCallback, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const { items } = useSelector(selectItems);
  const { word } = useParams();
  const intWord = Number(word);
  const { width, height } = useWindowSize();

  const completed = useMemo(() => {
    return getFullTitle(intWord, items) === items[intWord].answer;
  }, [items]);

  useEffect(() => {
    console.log(completed);
  }, []);

  return (
    <Wrapper>
      {completed && <Confetti width={width} height={height} />}
      {completed && (
        <NavLink to={"/"}>
          Вітаємо, ви вгадали слово! Повернутися на головну?
        </NavLink>
      )}
      {!completed && <NavLink to={"/"}>Хочете повернутися на головну?</NavLink>}
      <Header>{getFullTitle(intWord, items)}</Header>
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
