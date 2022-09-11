import BigCard from "./big-card/BigCard";
import Footer from "./footer/Footer";
import LongCard from "./long-card/LongCard";
import SmallCard from "./small-card/SmallCard";
import Topbar from "./topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <BigCard></BigCard>
      <LongCard></LongCard>
      <SmallCard></SmallCard>
      <Footer></Footer>
    </div>
  );
}

export default App;
