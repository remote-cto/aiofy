// "use client";
// import React, { useState } from "react";

// const PromptSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     website: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle the form submission here
//     console.log("Form data submitted:", formData);
//     // You can add your API call or processing logic here

//     // Show submission message
//     setSubmitted(true);

//     // Reset form after submission
//     setTimeout(() => {
//       setFormData({
//         name: "",
//         email: "",
//         website: "",
//       });
//       setSubmitted(false);
//     }, 3000);
//   };

//   return (
//     <div className="max-w-screen-xl mx-auto">
//       <div className="p-5 bg-white rounded-lg shadow-sm mb-8">
//         {submitted ? (
//           <div className="p-4 bg-green-100 text-green-700 rounded-lg mb-4">
//             Your data has been successfully submitted!
//           </div>
//         ) : null}

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBF23]"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBF23]"
//               />
//             </div>
//           </div>

//           <div>
//             <label
//               htmlFor="website"
//               className="block text-sm font-medium text-black mb-1"
//             >
//               Website URL
//             </label>
//             <input
//               id="website"
//               name="website"
//               type="url"
//               required
//               value={formData.website}
//               onChange={handleChange}
//               placeholder="https://yourwebsite.com"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBF23]"
//             />
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-md "
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PromptSection;

"use client";
import React, { useState } from "react";

interface TestCase {
  id: number;
  title: string;
  description: string;
}

const PromptSection = () => {
  const [formData, setFormData] = useState({
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [testCases, setTestCases] = useState<TestCase[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    const newTestCases: TestCase[] = [
      {
        id: 1,
        title: "Performance Test",
        description: `Testing page load speed for ${formData.website}. Initial render time: 2.3s. Full page load: 4.1s.`,
      },
      {
        id: 2,
        title: "SEO Analysis",
        description: `Analyzed meta tags and content structure for ${formData.website}. Found 3 missing alt tags and 2 duplicate title tags.`,
      },
      {
        id: 3,
        title: "Mobile Responsiveness",
        description: `Tested ${formData.website} on multiple devices. Displays correctly on iPhone and Android, minor layout issues on tablets.`,
      },
    ];

    setTestCases(newTestCases);
    setSubmitted(true);
  };

  return (
    <div className="lg:max-w-screen-xl mx-auto">
      <div className="p-5 bg-white rounded-lg shadow-sm mb-8">
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex-grow">
              <label
                htmlFor="website"
                className="block text-sm font-medium text-black mb-1"
              >
                Website URL
              </label>
              <input
                id="website"
                name="website"
                type="text" 
                required
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yourwebsite.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBF23]"
              />
            </div>
            <div className="w-full md:w-auto mt-2 md:mt-5">
              <button
                type="submit"
                className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              >
                Submit
              </button>
            </div>
          </div>
        </form>

        {submitted && (
          <div>
            <div className="p-4 bg-green-100 text-green-700 rounded-lg mb-6">
              Analysis complete for {formData.website}!
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testCases.map((testCase) => (
                <div
                  key={testCase.id}
                  className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-lg mb-2">{testCase.title}</h3>
                  <p className="text-gray-700">{testCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptSection;
