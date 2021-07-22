import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #00ffff;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  position: absolute;
  top: 50px;
  font-family: Arial, serif;
  font-size: 2em;
`;

export const BlockInLine = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const AddWord = styled.button`
  padding: 10px;
  border: 2px solid black;
  background-color: white;
  border-radius: 6px;
  text-transform: uppercase;
  font-family: Arial, serif;
`;
