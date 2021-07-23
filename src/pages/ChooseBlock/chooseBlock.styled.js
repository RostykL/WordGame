import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #f4f5f7;
  display: flex;
`;

export const PreviewBlock = styled.div`
  position: relative;
  width: 250px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border: 2px solid ${({ completed }) => (completed ? "lightgreen" : "coral")};
  background-color: white;
  padding: 15px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Arial, serif;
  font-size: 20px;
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
    color: gray;
  }
`;

export const AddNewBlock = styled.div`
  width: 250px;
  height: 150px;
  border-radius: 5px;
  padding: 15px;
  margin: 10px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Arial, serif;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const DeleteItem = styled.div`
  width: 30px;
  height: 30px;
  border-top-right-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  position: absolute;
  top: 0;
  right: 0;
  &:after {
    color: white;
    content: "-";
  }
  &:hover {
    background-color: coral;
    cursor: pointer;
  }
`;
