import styled from "styled-components";

const startAnimation = (start, IF, ELSE) => (start ? IF : ELSE);

export const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 20px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-family: Arial, serif;
  color: white;

  transition: 0.7s;

  transform: ${({ hold }) => startAnimation(hold, "scale(0.9)", "scale(1)")};
  border: ${({ droppedHere }) =>
    startAnimation(droppedHere, "3px dashed black", "3px solid black")};
  transform: ${({ droppedHere }) =>
    startAnimation(droppedHere, "rotate(15deg)", "rotate(0deg)")};

  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
`;
