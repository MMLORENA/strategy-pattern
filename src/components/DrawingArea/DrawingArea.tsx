import { useRef, useState, useEffect } from "react";
import "./DrawingArea.css";
import Button from "../Button/Button";
import { DrawingTool } from "../../draw/types";

interface DrawingAreaProps {
  selectedTool: DrawingTool;
}

const DrawingArea = ({ selectedTool }: DrawingAreaProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    setContext(context);
  }, []);

  const draw = (event: React.MouseEvent) => {
    if (!context) {
      return;
    }

    selectedTool.draw(context, isDrawing, event);
  };

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (!context) {
      return;
    }

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  return (
    <div className="container-canvas">
      <canvas
        ref={canvasRef}
        width="700"
        height="500"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        className="canvas"
      />
      <Button actionOnClick={clearCanvas} text="Clear" className="accent" />
    </div>
  );
};

export default DrawingArea;
