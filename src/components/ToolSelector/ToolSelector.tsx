import { DrawingTool } from "../../draw/types";
import "./ToolSelector.css";
import Button from "../Button/Button";

interface ToolSelectorProps {
  onSelectTool: (tool: DrawingTool) => void;
  tools: DrawingTool[];
  selectedTool: DrawingTool;
}

const ToolSelector = ({
  onSelectTool,
  tools,
  selectedTool,
}: ToolSelectorProps): React.ReactElement => {
  return (
    <div className="container-tools">
      {tools.map((tool) => (
        <Button
          key={tool.name}
          actionOnClick={() => onSelectTool(tool)}
          text={tool.name}
          className={selectedTool.name === tool.name ? "selected" : ""}
        />
      ))}
    </div>
  );
};

export default ToolSelector;
