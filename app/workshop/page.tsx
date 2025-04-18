import React from "react";
import WorkshopHeading from "../components/WorkshopHeading";
import Navbar from "../components/Navbar";
import WhatYouWillLearn from "../components/WhatYouWillLearn";
import WhyAttend from "../components/WhyAttend";
import ForWhomIsMeant from "../components/ForWhomIsMeant";
import CourseFormat from "../components/CourseFormat";
import GetInTouch from "../components/GetInTouch";

const Page = () => {
  return (
    <div>
      <Navbar />
      <WorkshopHeading />
      <GetInTouch />
      <WhatYouWillLearn />
      <WhyAttend />
      <ForWhomIsMeant />
      <CourseFormat />
      <GetInTouch />
    </div>
  );
};

export default Page;
