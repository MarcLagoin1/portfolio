import { Contact } from "./components/Contact";
import { Expertise } from "./components/Expertise";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Expertise />
      <Timeline />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
