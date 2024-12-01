import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Choropleth from "./Choropleth/Choropleth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header />
        <Choropleth />
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
