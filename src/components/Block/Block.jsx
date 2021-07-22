import { Wrapper } from "./block.styled";

import useBlockDrag from "./block.logic";

function Block({ color, title, droppedHere, hold, id }) {
  const {
    handleDragDrop,
    handleDragLeave,
    handleDragEnd,
    handleDragEnter,
    handleDragOver,
    handleDragStart,
  } = useBlockDrag(title, id);

  return (
    <Wrapper
      data-id={id}
      droppedHere={droppedHere}
      hold={hold}
      bgColor={color}
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDragDrop(e)}
      onDragLeave={(e) => handleDragLeave(e)}
    >
      {title}
    </Wrapper>
  );
}

export default Block;
