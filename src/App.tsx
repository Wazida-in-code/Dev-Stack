import { Suspense } from "react";
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
// import Technologies from "./components/Technologies/Technologies";
import type { techType } from "./technoType";
import TechAllCard from "./components/Technologies/TechAllCard";
import Footer from "./components/Footer";


const techApiFetch = async(): Promise<techType[]> => {
  const res = await fetch('/data.json');
  const data = await res.json()
  return data
}



function App() {
const techPromise = techApiFetch()

console.log(techPromise);
  return (
    <div className="relative">
      <Navbar />
      <Banner />

    <Suspense fallback={<h2 className="text-2xl text-black">Loading...</h2>}>
    <TechAllCard techPromise={techPromise} />
    </Suspense>

    <Footer />
    </div>
  )
}

export default App
