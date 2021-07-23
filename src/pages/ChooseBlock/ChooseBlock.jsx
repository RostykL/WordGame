import { AddNewBlock, PreviewBlock, Wrapper } from "./chooseBlock.styled";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/reducers/dndReducer";
import { NavLink } from "react-router-dom";
import { getFullTitle } from "../../utils/getFullTitle";
import Popup from "../../components/Popup/Popup";
import { useCallback, useState } from "react";
import AddWordPopup from "../../components/addWordPopup/AddWordPopup";

function ChooseBlock() {
  const { items } = useSelector(selectItems);
  const [show, setShow] = useState(false);

  const toggleShow = useCallback(() => {
    setShow((p) => !p);
  }, []);

  return (
    <Wrapper>
      <Popup hide={show} setShow={toggleShow}>
        <AddWordPopup />
      </Popup>
      {items.map((item, i) => (
        <PreviewBlock to={`/${i}`} key={item.id}>
          <NavLink to={`/${i}`}>
            {i % 2 === 0 ? item.answer : getFullTitle(i, items)}
          </NavLink>
        </PreviewBlock>
      ))}
      <AddNewBlock onClick={toggleShow}>add new block</AddNewBlock>
    </Wrapper>
  );
}

export default ChooseBlock;
