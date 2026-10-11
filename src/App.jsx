import { Suspense, useState } from "react";
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import Technologies from "./Components/Technologies"


const TechnologiesFetch = async () => {
  const res = await fetch('/technologies.json');
  const data = await res.json();
  return data;
}

const TechnologiesPromise = TechnologiesFetch();

function App() {

  const name = "shanto"

  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<h3>Please wait...</h3>}>
        <Technologies TechnologiesPromise ={TechnologiesPromise} />
      </Suspense>
    </>
  )
}

export default App;

