import { FixedSizeGrid as Grid, GridChildComponentProps } from "react-window";
import "./App.css";

const Cell = ({ style, columnIndex, rowIndex }: GridChildComponentProps) => (
  <div style={{ ...style }}>
    <img
      src={`https://raw.githubusercontent.com/santiagoarielv98/imagenes/main/src/assets/images/image_${
        rowIndex * 3 + columnIndex + 1
      }.webp`}
      alt="placeholder"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "invert(1)",
      }}
      loading="lazy"
    />
  </div>
);
// 61 imagenes de 200x200
const Example = () => (
  <Grid columnCount={3} rowCount={20} columnWidth={200} height={600} rowHeight={200} width={600}>
    {Cell}
  </Grid>
);

function App() {
  return <Example />;
}

export default App;
