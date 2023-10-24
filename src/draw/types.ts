export interface DrawingTool {
  name: string;
  draw: (
    context: CanvasRenderingContext2D,
    isDrawing: boolean,
    event: React.MouseEvent
  ) => void;
}
