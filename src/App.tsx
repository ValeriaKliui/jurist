import { Advantages } from "./components/Advantages";
import { Benefits } from "./components/Benefits";
import { Command } from "./components/Command";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Management } from "./components/Management";
import { MobileMenu } from "./components/MobileMenu";
import { Partners } from "./components/Partners";
import { Preview } from "./components/Preview";
import { Prognosis } from "./components/Prognosis";
import { Steps } from "./components/Steps";
import { Support } from "./components/Support";
import { Tariffs } from "./components/Tariffs";

const App = () => (
  <>
    <Header />
    <main>
      <MobileMenu />
      <Preview />
      <Command />
      <Support />
      <Benefits />
      <Tariffs />
      <Partners />
      <Advantages />
      <Steps />
      <Prognosis />
      <Management />
    </main>
    <Footer />
  </>
);

export default App;
