import Image from "next/image";
import WhatWeOffer from "./components/WhatWeOffer";
import WhatOurClientSay from "./components/WhatOurClientSay";
import WhyChoosen from "./components/WhyChoosen";

export default function Home() {
  return (
    <div>
      <WhatWeOffer/>
      <WhatOurClientSay/>
      <WhyChoosen/>

    </div>
  );
}
