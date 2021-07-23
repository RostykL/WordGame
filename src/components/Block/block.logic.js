import { useDispatch, useSelector } from "react-redux";
import {
  selectItems,
  setCurrentItem,
  setDroppedHere,
  setDropToIndex,
  setHold,
  setShuffleItems,
} from "../../redux/reducers/dndReducer";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import changeKeys from "../../utils/changeObjectsKeys";

function useBlockDrag(title, id) {
  const { items } = useSelector(selectItems);
  const { word } = useParams();
  const intWord = Number(word);
  const dispatch = useDispatch();

  const findIndexById = useCallback((pId) => {
    return items[intWord].letters.findIndex((item) => item.id === (pId ?? id));
  }, []);

  const handleDragStart = useCallback(
    (e) => {
      const index = findIndexById(null);
      e.dataTransfer.setData("currentItem", index);
      dispatch(setCurrentItem(index));
      // dispatch(setHold({ id: intWord }));
    },
    [items, title]
  );

  const handleDragEnd = useCallback((e) => {
    setTimeout(() => {
      e.target.style.display = "flex";
    }, 0);
    dispatch(setCurrentItem(null));
    dispatch(setDropToIndex(null));
    // dispatch(setHold({ id, intWord }));
    // dispatch(setDroppedHere());
  }, []);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    // dispatch(setDroppedHere(Number(e.currentTarget.dataset.id)));
  }, []);

  const handleDragDrop = useCallback(
    (e) => {
      e.preventDefault();
      const put = findIndexById(Number(e.target.dataset.id));
      const take = Number(e.dataTransfer.getData("currentItem"));

      const first = items[intWord].letters[put];
      const second = items[intWord].letters[take];
      const [putEl, takeEl] = changeKeys([first, second], ["title", "bg"]);
      const newItems = [...items[intWord].letters];

      const resultItems = newItems.map((item, i) => {
        if (item.id === takeEl.id) {
          return takeEl;
        }
        if (item.id === putEl.id) {
          return putEl;
        }
        return item;
      });

      dispatch(setShuffleItems(resultItems, intWord));
      dispatch(setDropToIndex(put));
      // dispatch(setDroppedHere());
    },
    [items]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    // dispatch(setDroppedHere(Number(e.target.dataset.id)));
  }, []);

  return {
    handleDragDrop,
    handleDragLeave,
    handleDragEnd,
    handleDragEnter,
    handleDragOver,
    handleDragStart,
  };
}

export default useBlockDrag;
