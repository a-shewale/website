"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Projects & Leadership</h2>
              <p className="text-xl text-orange-500">( 05 )</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12">
              {workData?.map((value: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="group flex flex-col gap-5"
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={getImgPath(value?.image)}
                        alt={value?.title}
                        width={570}
                        height={414}
                        className="rounded-lg w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <a
                        href={value.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-0 left-0 backdrop-blur-xs bg-primary/20 w-full h-full hidden group-hover:flex items-center justify-center rounded-lg"
                      >
                        <span className="flex justify-center items-center p-5">
                          <svg
                            width="65"
                            height="64"
                            viewBox="0 0 65 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.333374"
                              width="64"
                              height="64"
                              rx="32"
                              fill="#FE4300"
                            />
                            <path
                              d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                              stroke="#FFFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between border-b border-gray-300 pb-3">
                        <a href={value.slug} target="_blank" rel="noopener noreferrer">
                          <h4 className="text-2xl font-bold text-black hover:text-primary transition-colors">{value?.title}</h4>
                        </a>
                      </div>
                      <p className="text-lg font-medium text-gray-700">{value?.client}</p>
                      
                      {value.bullets && (
                        <ul className="list-disc pl-5 mt-3 space-y-2">
                          {value.bullets.map((bullet: string, bIndex: number) => (
                            <li key={bIndex} className="leading-relaxed text-justify text-gray-800">{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;