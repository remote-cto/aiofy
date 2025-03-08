import WhatWeOffer from "./components/WhatWeOffer";
import WhatOurClientSay from "./components/WhatOurClientSay";
import WhyChoosen from "./components/WhyChoosen";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Knowmore from "./components/Knowmore";
import ScrollToTop from "./components/ScrollToTop";
import LoadingAnimation from "./components/LoadingAnimation";

export default function Home() {
  return (
    <div>
      <LoadingAnimation/>
      <Navbar/>
      <About/>
      <WhatWeOffer/>
      <WhatOurClientSay/>
      <WhyChoosen/>
      <Knowmore/>
      <ContactForm/>
      <ScrollToTop/>
    </div>
  );
}