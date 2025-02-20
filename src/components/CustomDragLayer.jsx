
import React from "react";
import { useDragLayer } from "react-dnd";

const CustomDragLayer = () => {
  const { item, isDragging, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging || !currentOffset) {
    return null;
  }

  const layerStyles = {
    position: "fixed",
    pointerEvents: "none",
    left: currentOffset.x,
    top: currentOffset.y,
    opacity: 0.7, // Opacity for drag preview
    transform: "translate(-50%, -50%)",
    width:"280px",
    zIndex: 1000,
  };

  return (
    <div style={layerStyles}>
      <div className="flex items-center justify-between bg-white text-black px-2 py-2 rounded-md mt-2 cursor-pointer w-full">
        {item.task}
      </div>
    </div>
  );
};

export default CustomDragLayer;
