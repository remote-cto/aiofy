import Image from "next/image";
import WhatWeOffer from "./components/WhatWeOffer";
import WhatOurClientSay from "./components/WhatOurClientSay";
import WhyChoosen from "./components/WhyChoosen";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <WhatWeOffer/>
      <WhatOurClientSay/>
      <WhyChoosen/>

    </div>
  );
}
