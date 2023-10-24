import { DrawingTool } from "./types";
import drawWithBrush from "./strategies/drawWithBrush";
import drawWithPen from "./strategies/drawWithPen";
import erase from "./strategies/erase";

const tools: DrawingTool[] = [
  { name: "Pencil", draw: drawWithPen },
  { name: "Brush", draw: drawWithBrush },
  { name: "Eraser", draw: erase },
];

export default tools;
