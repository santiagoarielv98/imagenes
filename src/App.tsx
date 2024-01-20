import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";
import "./App.css";

const Cell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => (
  <div style={style}>
    <img src={`images/image_1.png`} alt="placeholder" />
    Item {rowIndex},{columnIndex}
  </div>
);

const Example = () => (
  <Grid columnCount={1000} columnWidth={200} height={600} rowCount={1000} rowHeight={35} width={600}>
    {Cell}
  </Grid>
);

function App() {
  return <Example />;
}

export default App;
