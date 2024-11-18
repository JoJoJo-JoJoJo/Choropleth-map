import { useEffect } from "react";
import "./App.css";
import Header from "./Renderer/Header/Header";
import Footer from "./Renderer/Footer/Footer";
import { height, initState1, initState2, url1, url2, width } from "./constants/constants";
import Renderer from "./Renderer/Renderer";
import { url1Data, url2Data } from "./constants/types";
import { useAwaitData } from "./hooks/useAwaitData";

const App = () => {
  // Fetch the education data.
  const [loading1, eduData, error1] = useAwaitData<url1Data[]>(url1, initState1);
  
  // Fetch the topography data and convert it to GeoJSON.
  const [loading2, countyData, error2] = useAwaitData<url2Data>(url2, initState2);

  useEffect(() => {
    console.log(eduData)
    if (eduData === undefined || countyData === undefined) {
      console.error(error1);
      console.error(error2);
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="main" style={{ width: width, height: height }}>
        {loading1 || loading2 ? (
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
