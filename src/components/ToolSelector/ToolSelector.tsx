import BrushTool from "../../BrushTool/BrushTool";
import EraserTool from "../EraserTool/EraserTool";
import PenTool from "../PenTool/PenTool";

interface ToolSelectorProps {
  onSelectTool: (tool: React.ReactElement) => void;
}

const ToolSelector = ({
  onSelectTool,
}: ToolSelectorProps): React.ReactElement => {
  return (
    <div>
      <button onClick={() => onSelectTool(<PenTool />)}>Lápiz</button>
      <button onClick={() => onSelectTool(<BrushTool />)}>Pincel</button>
      <button onClick={() => onSelectTool(<EraserTool />)}>Borrador</button>
    </div>
  );
};

export default ToolSelector;
