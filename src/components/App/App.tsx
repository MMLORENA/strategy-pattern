import { useState } from "react";
import PenTool from "../PenTool/PenTool";
import ToolSelector from "../ToolSelector/ToolSelector";
import DrawingArea from "../DrawingArea/DrawingArea";

const App = () => {
  const [selectedTool, setSelectedTool] = useState(PenTool);

  return (
    <div className="app">
      <h1>Aplicación de Pintura con Patrón Strategy</h1>
      <ToolSelector onSelectTool={setSelectedTool} />
      <DrawingArea SelectedTool={selectedTool} />
    </div>
  );
};

export default App;
