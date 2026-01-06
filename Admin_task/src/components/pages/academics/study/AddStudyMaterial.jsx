import React, { useState } from "react";
import { ChevronDown, Link as LinkIcon } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const AddStudyMaterial = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "HTML Basics Study Material",
    course: "Full Stack Development",
    content: "",
  });

  return (
    <div className="w-full text-gray-300 font-sans min-h-screen pb-10">
      <h1 className="text-xl font-bold text-white mb-4">Add Study Material</h1>

      {/* 2. Main Content Grid - Split Layout (Image_9d7337 matching) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Side: Form Inputs */}
        <div className="space-y-6">
          {/* Title Select */}
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-[#d1d3d4]">
              Title
            </label>
            <div className="relative">
              <select
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none appearance-none cursor-pointer hover:border-gray-600 focus:border-orange-500 transition-all"
              >
                <option>Select Title</option>
                <option>React Advanced Patterns</option>
                <option>Node.js API Design</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                size={18}
              />
            </div>
          </div>

          {/* Subject/Course Select */}
          <div className="space-y-2">
            <label className="text-[13px] font-medium text-[#d1d3d4]">
              Subject Select
            </label>
            <div className="relative">
              <select
                value={formData.course}
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
                className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg p-3 text-sm text-white outline-none appearance-none cursor-pointer hover:border-gray-600 focus:border-orange-500 transition-all"
              >
                <option>Select Subject</option>
                <option>Full Stack Development</option>
                <option>UI/UX Design</option>
                <option>Data Science</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                size={18}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-2.5 bg-[#1A1A1A] text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-all border border-white/5"
            >
              Cancel
            </button>
            <button className="px-10 py-2.5 bg-[#F37021] text-white rounded-lg text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">
              Save
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-[#b1b1b2] text-sm font-medium">
            Paste Study Material Content Here
          </h2>
          <div className="bg-[#0D0D0D] border border-gray-800 rounded-xl p-4">
            <div className="prose prose-invert max-w-none text-gray-400 text-sm leading-relaxed space-y-4">
              <h3 className="text-white text-lg font-medium">
                Object-Oriented Programming Concepts
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[#c2c1c1] text-sm">
                <li>All HTML elements can have attributes.</li>
                <li>
                  Attributes provide additional information about elements.
                </li>
                <li>Attributes are always specified in the start tag.</li>
                <li>
                  Attributes usually come in name/value pairs like: name="value"
                  pairs like: name="value"
                </li>
                <li>All HTML elements can have attributes</li>
                <li>
                  Attributes provide additional information about elements
                </li>
                <li>
                  Attributes usually come in name/value pairs like: name="value"
                </li>
              </ul>

              <h3 className="text-white text-lg font-medium mt-4">
                The href Attribute
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[#c2c1c1] text-sm">
                <li>
                  The &lt;a&gt; tag defines a hyperlink. The href attribute
                  specifies the URL of the page the link goes to.
                </li>
              </ul>

              <div className="space-y-4">
                <h3 className="text-white text-lg font-medium">
                  The src Attribute
                </h3>

                <ul className="list-disc pl-5 text-[#c2c1c1] text-[13px] leading-relaxed">
                  <li>
                    Absolute URL - Links to an external image that is hosted on{" "}
                    another website.{" "}
                    Example:src="https://www.w3schools.com/images/img_girl.jpg".
                  </li>
                </ul>

                {/* Orange Notes Section */}
                <div className="pt-2">
                  <p className="text-[12px] leading-relaxed">
                    <span className="text-[#C16831] font-bold">Notes:</span>
                    <span className="ml-1 text-[#c2c1c1] text-[13px]">
                      {" "}
                      External images might be under copyright. If you do not
                      get permission to use it, you may be in violation of
                      copyright laws. In addition, you cannot control external
                      images; it can suddenly be removed or changed.
                    </span>
                        <ul className="list-disc pl-5 space-y-2 text-[#c2c1c1] text-s mt-2">
                      <li>
                        Relative URL - Links to an image that is hosted within
                        the website. Here, the URL does not include the domain
                        name. If the URL begins without a slash, it will be
                        relative to the current page. Example:
                        src="img_girl.jpg". If the URL begins with a slash, it
                        will be relative to the domain. Example:
                        src="/images/img_girl.jpg".
                      </li>
                    </ul>
                  </p>

                  <p className="text-[#C16831] text-[12px] mt-3">
                    <span className="text-[#C16831] font-bold"> Tip:</span>
                    <span className="ml-1 text-[#c2c1c1] text-[12px]">It is almost always best to use relative URLs. They
                    will not break if you change domain.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudyMaterial;
