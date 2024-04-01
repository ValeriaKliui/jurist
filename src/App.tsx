import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Prognosis } from "./components/Prognosis";
import { Partners } from "./components/Partners";
import { Advantages } from "./components/Advantages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Partners />
        <Advantages />
        <Prognosis />
      </main>
      <Footer />
    </>
  );
}

export default App;
