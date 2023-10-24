import { DrawingTool } from "../types";

const drawWithBrush: DrawingTool["draw"] = (context, isDrawing, event) => {
  if (isDrawing) {
    context.strokeStyle = "brown";
    context.lineJoin = "round";
    context.lineWidth = 5;
    context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    context.stroke();
  }
};

export default drawWithBrush;
