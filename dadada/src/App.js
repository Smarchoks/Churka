import ScrollElem from "../src/slader/slider";
import Card from "../src/Card/card";
import Header from "./Header_first_page/Header";
import Trending from "./Trending_food/trending";
import "./App.css";

function App() {
  return (
    <div className="App _content">
      <Header />
      <ScrollElem/>
      <Trending/>
      <Card/>
    </div>
  );
}

export default App;
