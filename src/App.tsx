import { Suspense } from "react";
import Footer from "./Components/footer"
import Hero from "./Components/hero"
import Nav from "./Components/Nav"
import Technologies from "./TechComponents/Technologies";
import type { TechnologyType } from "./TechComponents/TechnologyType";


const technologiesDataPromise = async () : Promise<TechnologyType[]> => {
  const res =await fetch('/data/data.json');
  const data: TechnologyType[] = await res.json();
  return data;
}


function App() {

  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
      <Technologies technologiesDataPromise={technologiesDataPromise()}></Technologies>
    </Suspense>
     <Nav></Nav>
     <Hero></Hero>
     <Footer></Footer>
    </>
  )
}

export default App
