
import WhatWeOffer from "./components/WhatWeOffer";
import WhatOurClientSay from "./components/WhatOurClientSay";
import WhyChoosen from "./components/WhyChoosen";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Knowmore from "./components/Knowmore";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
      <WhatWeOffer/>
      <WhatOurClientSay/>
      <WhyChoosen/>
      <Knowmore/>
      <ContactForm/>

    </div>
  );
}
