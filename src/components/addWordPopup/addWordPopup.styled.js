import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  &:hover,
  &:focus {
    outline: none;
  }
`;

export const AddNewWord = styled.button`
  border: 1px solid black;
  padding: 10px;
  background-color: white;
  &:hover {
    outline: none;
    cursor: pointer;
    color: gray;
  }
`;

export const Letters = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Letter = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid black;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, serif;
  background-color: ${({ bg }) => (bg ? bg : "lightcoral")};
  margin: 10px;
`;
