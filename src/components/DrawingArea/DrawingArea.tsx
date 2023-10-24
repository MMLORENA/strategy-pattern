interface DrawingAreaProps {
  SelectedTool: React.ReactElement;
}

const DrawingArea = ({ SelectedTool }: DrawingAreaProps) => {
  return (
    <div>
      <h3>Área de Dibujo</h3>
      {SelectedTool}
    </div>
  );
};

export default DrawingArea;
