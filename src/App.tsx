import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Choropleth from "./Choropleth/Choropleth";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Choropleth />
      <Footer />
    </div>
  );
};

export default App;
