import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ hide }) => (hide ? "none" : "flex")};
  align-items: center;
  justify-content: center;
`;

export const PopupWindow = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding: 10px;
  animation: scale 0.2s ease-in;

  @keyframes scale {
    66% {
      transform: scale(1.03);
    }
    100% {
      transform: scale(1);
    }
  }
`;
