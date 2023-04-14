import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {" "}
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-repeat-y bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="bg-hero-pattern bg-cover  bg-repeat-y bg-center">
          {" "}
          <About />
          <Experience />
        </div>

        <div className=" bg-hero-pattern   bg-cover bg-repeat-y bg-center realtive z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
