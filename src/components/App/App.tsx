import { useState } from "react";
import "./App.css";
import ToolSelector from "../ToolSelector/ToolSelector";
import DrawingArea from "../DrawingArea/DrawingArea";
import tools from "../../draw/tools";
import { DrawingTool } from "../../draw/types";

const App = () => {
  const [selectedTool, setSelectedTool] = useState<DrawingTool>(tools[2]);

  return (
    <div className="container">
      <h1 className="title">Demo Strategy Pattern</h1>
      <ToolSelector
        onSelectTool={(tool) => setSelectedTool(tool)}
        tools={tools}
        selectedTool={selectedTool}
      />
      <DrawingArea selectedTool={selectedTool} />
    </div>
  );
};

export default App;
