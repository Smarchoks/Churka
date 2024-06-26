import ScrollElem from "../src/slader/slider";
import Card from "../src/Card/card";
import Header from "./Header_first_page/Header";
import Trending from "./Trending_food/trending";
import Basement from "./Basement/basement";
import History from "./History/history";
import Preview_gus from "./Preview_gus/preview_gus";


import "./App.css";

function App() {
  return (
    <div className="App _content">
      
      <Header />
      <Preview_gus />
      <ScrollElem/>
      <Trending/>
      <Card/>
      <History/>
      <Basement/>

    </div>
  );
}

export default App;
