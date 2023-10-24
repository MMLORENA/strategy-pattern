import { DrawingTool } from "../types";

const drawWithPen: DrawingTool["draw"] = (context, isDrawing, e) => {
  if (isDrawing) {
    context.strokeStyle = "black";
    context.lineJoin = "round";
    context.lineWidth = 2;
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
  }
};

export default drawWithPen;
