import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Prognosis } from "./components/Prognosis";
import { Partners } from "./components/Partners";
import { Advantages } from "./components/Advantages";
import { Preview } from "./components/Preview";
import { Command } from "./components/Command";
import { Support } from "./components/Support";

const App = () =>
  <>
    <Header />
    <main>
      <Preview />
      <Command />
      <Support />
      <Partners />
      <Advantages />
      <Prognosis />
    </main>
    <Footer />
  </>


export default App;
