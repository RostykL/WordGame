import {
  AddNewBlock,
  DeleteItem,
  PreviewBlock,
  Wrapper,
} from "./chooseBlock.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, selectItems } from "../../redux/reducers/dndReducer";
import { NavLink } from "react-router-dom";
import { getFullTitle } from "../../utils/getFullTitle";
import Popup from "../../components/Popup/Popup";
import { useCallback, useState } from "react";
import AddWordPopup from "../../components/addWordPopup/AddWordPopup";

function ChooseBlock() {
  const { items } = useSelector(selectItems);
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const toggleShow = useCallback(() => {
    setShow((p) => !p);
  }, []);

  const handleDeleteItem = useCallback(
    (id) => {
      dispatch(deleteItem(id));
    },
    [dispatch]
  );

  return (
    <Wrapper>
      <Popup hide={show} setShow={toggleShow}>
        <AddWordPopup />
      </Popup>
      {items.map((item, i) => {
        const completed =
          item.answer.toLowerCase() ===
          getFullTitle(i, items).toLowerCase().trim();
        return (
          <PreviewBlock to={`/${i}`} key={item.id} completed={completed}>
            <NavLink to={`/${i}`}>
              {completed ? item.answer : getFullTitle(i, items)}
            </NavLink>
            {/*deleteItem*/}
            <DeleteItem onClick={() => handleDeleteItem(item.id)} />
          </PreviewBlock>
        );
      })}
      <AddNewBlock onClick={toggleShow}>add new block</AddNewBlock>
    </Wrapper>
  );
}

export default ChooseBlock;
