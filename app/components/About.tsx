// "use client"
// import React, { useState } from "react";

// const About = () => {
//   const [prompt, setPrompt] = useState("");
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the prompt submission here
//     console.log("Prompt submitted:", prompt);
//     // You can add your API call or processing logic here
//     setPrompt(""); // Clear the input after submission
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto">
//       {/* Prompt Text Box Section */}
      

//       {/* About Section (Original Content) */}
//       <div className="sm:flex items-center">
//         <div className="sm:w-1/2 p-10">
//           <div className="image object-center text-center">
//             <img src="https://i.imgur.com/WbQnbas.png" alt="Company Image" />
//           </div>
//         </div>
//         <div className="sm:w-1/2 p-5">
//           <div className="text">
//             <h2 className="my-4 font-bold text-3xl sm:text-6xl">
//               About <span className="text-[#FFBF23]">Our Company</span>
//             </h2>
//             <p className="text-gray-700">
//               At Nirvana.AI, we are your partners in navigating the AI revolution.
//               As a leading AI consulting company, we specialize in transforming
//               businesses through Advanced AI consulting, Custom AI model training,
//               and Building cutting-edge Generative AI solutions. Our mission is
//               simple: to help you harness the power of artificial intelligence to
//               innovate, optimize, and thrive in a rapidly evolving digital
//               landscape.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;






import React from "react";

const About = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">

          <h2 className="my-4 font-bold text-3xl  sm:text-6xl">
            About <span className="text-[#FFBF23]">Our Company</span>
          </h2>
          <p className="text-gray-700">
            At Nirvana.AI, we are your partners in navigating the AI revolution.
            As a leading AI consulting company, we specialize in transforming
            businesses through Advanced AI consulting, Custom AI model training,
            and Building cutting-edge Generative AI solutions. Our mission is
            simple: to help you harness the power of artificial intelligence to
            innovate, optimize, and thrive in a rapidly evolving digital
            landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;