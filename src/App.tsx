import Squares from "./components/background/Squares";
import Hero from "./components/Hero";

function App() {
  return (
    <Squares
      speed={0.5}
      squareSize={40}
      direction="diagonal"
      borderColor="#271E37"
      hoverFillColor="#222222"
    >
      <Hero />
    </Squares>
  );
}

export default App;
