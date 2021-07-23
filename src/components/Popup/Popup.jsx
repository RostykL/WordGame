import { Overlay, PopupWindow } from "./popup.styled";

function Popup({ children, hide, setShow }) {
  return (
    <Overlay hide={hide} onClick={setShow}>
      <PopupWindow onClick={(e) => e.stopPropagation()}>{children}</PopupWindow>
    </Overlay>
  );
}

export default Popup;
