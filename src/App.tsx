import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Renderer/Header/Header";
import Footer from "./Renderer/Footer/Footer";
import { useData } from "./hooks/useData";
import { url1, url2 } from "./constants/constants";
import { useTopoData } from "./hooks/useTopoData";
import Renderer from "./Renderer/Renderer";

const App = () => {
  // Fetch the education data.
  const initEDU = useData(url1);
  const [eduData, setEduData] = useState(initEDU);

  // Fetch the topography data and convert it to GeoJSON.
  const initCOUNTY = useTopoData(url2);
  const [countyData, setCountyData] = useState(initCOUNTY);
  console.log(countyData);

  useEffect(() => {
    if (!eduData) {
      console.error("eduData is invalid.");
    } else if (!countyData) {
      console.error("countyData is invalid.");
    } else {
      setEduData(useData(url1));
      setCountyData(useTopoData(url2));
    }
  }, [url1, url2]);

  return (
    <div className="app">
      <Header />
      <div>
        {!eduData || !countyData ? (
          <pre className="loading">Loading...</pre>
        ) : (
          <Renderer eduData={eduData} countyData={countyData} />
        )}
        {/* Tooltip goes here */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
