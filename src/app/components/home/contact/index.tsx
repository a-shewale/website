"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.contactBar);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="contact" className="py-16 xl:py-32">
      <div className="container">
        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
          <h2>Contact Me</h2>
          <p className="text-xl text-primary">( 06 )</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            <h3 className="text-3xl font-bold">Let's Connect</h3>
            <p className="text-justify text-lg text-gray-700">
              I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="flex flex-col gap-5 mt-4">
              {contactData?.contactItems?.map((item: any, idx: number) => (
                <a key={idx} href={item.link} className="flex items-center gap-4 hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-softGray rounded-full flex items-center justify-center p-3">
                    <Image src={getImgPath(item.icon)} alt={item.type} width={24} height={24} />
                  </div>
                  <span className="text-lg font-medium">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-6">
              {contactData?.socialItems?.map((social: any, idx: number) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-black hover:bg-primary transition-colors rounded-full flex items-center justify-center p-3.5"
                >
                  <Image src={getImgPath(social.icon)} alt={social.platform} width={28} height={28} className="invert" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;