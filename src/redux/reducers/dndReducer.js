const initialState = {
  items: [
    {
      id: 1,
      answer: "ростик",
      points: 1,
      letters: [
        { id: 1, title: "Р", hold: false, droppedHere: false, bg: "#a29bfe" },
        { id: 2, title: "Т", hold: false, droppedHere: false, bg: "#0984e3" },
        { id: 3, title: "О", hold: false, droppedHere: false, bg: "#2d3436" },
        { id: 4, title: "И", hold: false, droppedHere: false, bg: "#e84393" },
        { id: 5, title: "С", hold: false, droppedHere: false, bg: "#ff7675" },
        { id: 6, title: "К", hold: false, droppedHere: false, bg: "#e17055" },
      ],
    },
    {
      id: 2,
      answer: "мар'ян",
      points: 1,
      letters: [
        { id: 2, title: "а", hold: false, droppedHere: false, bg: "#0984e3" },
        { id: 1, title: "м", hold: false, droppedHere: false, bg: "#a29bfe" },
        { id: 3, title: "р", hold: false, droppedHere: false, bg: "#2d3436" },
        { id: 4, title: "я", hold: false, droppedHere: false, bg: "#e84393" },
        { id: 6, title: "н", hold: false, droppedHere: false, bg: "#e17055" },
        { id: 5, title: "'", hold: false, droppedHere: false, bg: "#ff7675" },
      ],
    },
  ],
  currentItem: null,
  dropToIndex: null,
};

export const SET_CURRENT_ITEM = "SET_CURRENT_ITEM";
export const SET_DROP_TO_INDEX = "SET_DROP_TO_INDEX";
export const SHUFFLE_ITEMS = "SHUFFLE_ITEMS";
export const SET_HOLD = "SET_HOLD";
export const SET_DROPPED_HERE = "SET_DROPPED_HERE";
export const SET_NEW_WORD = "SET_NEW_WORD";
export const DELETE_ITEM = "DELETE_ITEM";

export const setCurrentItem = (payload) => ({
  type: SET_CURRENT_ITEM,
  payload,
});
export const setDropToIndex = (payload) => ({
  type: SET_DROP_TO_INDEX,
  payload,
});
export const setShuffleItems = (payload, wordIndex) => ({
  type: SHUFFLE_ITEMS,
  payload: { payload, wordIndex },
});

export const setHold = (payload) => ({
  type: SET_HOLD,
  payload: { id: payload.id, intWord: payload.intWord },
});
export const setDroppedHere = (payload) => ({
  type: SET_DROPPED_HERE,
  payload,
});

export const addNewWord = (payload) => ({
  type: SET_NEW_WORD,
  payload,
});

export const deleteItem = (payload) => ({ type: DELETE_ITEM, payload });

export const selectItems = (state) => state.dnd;

function dndReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_NEW_WORD:
      return {
        ...state,
        items: [...state.items, payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload),
      };
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: payload,
      };
    case SET_DROP_TO_INDEX:
      return {
        ...state,
        dropToIndex: payload,
      };
    case SHUFFLE_ITEMS:
      return {
        ...state,
        items: [
          ...state.items.map((el, i) => {
            if (i === payload.wordIndex) {
              el.letters = payload.payload;
            }
            return el;
          }),
        ],
      };
    case SET_HOLD:
      return {};
    case SET_DROPPED_HERE:
      return {};
    default:
      return state;
  }
}

export default dndReducer;
