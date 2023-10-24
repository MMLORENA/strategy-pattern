import { DrawingTool } from "../types";

const erase: DrawingTool["draw"] = (context, isDrawing, event) => {
  if (isDrawing) {
    context.strokeStyle = "white";
    context.lineJoin = "round";
    context.lineWidth = 10;
    context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    context.stroke();
  }
};

export default erase;
