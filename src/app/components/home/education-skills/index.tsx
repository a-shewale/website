import { getImgPath } from "@/utils/image";
import Image from "next/image";
import React from "react";

const EducationSkills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: "/images/icon/tech-icon.svg",
      items: ["ETL & Data Cleaning", "Data Analysis", "Research Analysis", "Statistical Analysis", "A/B Testing", "KPI Development", "Budgeting & Forecasting", "Predictive Modeling", "Database Management", "Data Warehousing", "Data Modeling", "Root Cause Analysis (RCA)", "Financial Modeling", "CRM Analytics", "User Acceptance Testing (UAT)", "OSINT"]
    },
    {
      title: "Tools & Technologies",
      icon: "/images/icon/tool-icon.svg",
      items: ["Power BI", "Tableau", "Google Analytics", "Looker Studio", "SQL", "Python (Pandas, NumPy)", "Excel (Pivot Tables, VLOOKUP)", "API", "Snowflake"]
    },
    {
      title: "Platforms & Applications",
      icon: "/images/icon/platform-icon.svg",
      items: ["Shopify", "WooCommerce", "Meta Business Suite", "Figma", "Photoshop"]
    },
    {
      title: "Soft Skills",
      icon: "/images/icon/soft-skill-icon.svg",
      items: ["Project Management", "Business Acumen", "Data Storytelling", "Stakeholder Management", "Product Training", "Strategic Consulting", "Critical Thinking", "Problem-Solving", "Attention to Detail", "Time Management", "Technical Writing"]
    },
    {
      title: "Productivity & AI Tools",
      icon: "/images/icon/ai-icon.svg",
      items: ["ChatGPT", "Claude", "Cursor", "Gemini", "GitHub Copilot"]
    }
  ];

  return (
    <section className="relative">
      {/* Background Vector Component */}
      <div className="absolute top-0 right-0 z-0 opacity-40 pointer-events-none">
        <Image
          src={getImgPath("/images/home/education-skill/edu-skill-vector.svg")}
          alt="background-vector"
          width={600}
          height={600}
        />
      </div>

      {/* Skills Section */}
      <div className="bg-softGray/80 backdrop-blur-sm py-16 md:py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Skills</h2>
            <p className="text-xl text-primary">( 03 )</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <div className="w-12 h-12 bg-softGray rounded-lg flex items-center justify-center p-2.5">
                    <Image src={getImgPath(category.icon)} alt={category.title} width={30} height={30} />
                  </div>
                  <h3 className="text-2xl font-bold text-black">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="bg-softGray text-gray-800 px-4 py-2 rounded-full text-sm md:text-base font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="py-16 md:py-32 relative z-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Education</h2>
            <p className="text-xl text-primary">( 04 )</p>
          </div>

          <div className="bg-softGray p-8 md:p-12 rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-black">Vellore Institute of Technology | Chennai, India</h3>
              <h4 className="text-xl md:text-2xl text-primary font-medium mt-2">Bachelor of Technology (B.Tech) in Civil Engineering</h4>
              <p className="text-lg text-gray-600 mt-1">Jun 2017 – Jun 2021</p>
            </div>
            
            <div className="w-full max-w-[300px] md:max-w-[400px]">
              <Image
                src={getImgPath("/images/home/education-skill/vit-logo.png")}
                alt="VIT University Logo"
                width={500}
                height={194}
                className="w-full h-auto object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;