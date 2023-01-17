import React from "react";
import reviewImg from "../../Assets/Product/15.jpg";

const data = [
  {
    id: 1,
    image: reviewImg,
    name: "Ragav Gupta",
    Profession: "Founder Apna Room",
    Review: "Click Add new block, search for id 2332427 and click enter",
  },
  {
    id: 2,
    image: reviewImg,
    name: "Ragav Gupta",
    Profession: "Founder Apna Room",
    Review: "Click Add new block, search for id 2332427 and click enter",
  },
  {
    id: 3,
    image: reviewImg,
    name: "Ragav Gupta",
    Profession: "Founder Apna Room",
    Review: "Click Add new block, search for id 2332427 and click enter",
  },
];

export default function Testimonial() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="swiper-container !overflow-hidden">
            <div className="flex justify-center items-center">
              <h1 className=" text-[20px] lg:text-[35px]  mb-5 uppercase font-Montserrat  ">Testimonial</h1>
            </div>
            <div className="swiper-wrapper flex flex-col lg:flex-row lg:justify-center lg:items-center gap-12">
              {data.map((item) => {
                return (
                  <div className="swiper-slide lg:w-1/3 ">
                    <img
                      alt="Dog"
                      src={item.image}
                      className="h-[130px] w-[130px] border-[8px] border-white rounded-full object-cover absolute ml-[110px] lg:ml-[130px] mb-[50px]"
                    />
                    <blockquote className="bg-GoldTer ">
                      <div className="flex flex-col  items-center mt-[100px]">
                        <div className=" flex flex-col items-center justify-centerml-4 text-sm mt-[45px]">
                          <p className="font-[600] text-[18px] text-gray-800 font-Montserrat tracking-wide">{item.name}</p>
                          <p className="mt-2 text-gray-800  font-Montserrat tracking-wide">{item.Profession}</p>
                        </div>

                        <p className="relative mt-2 text-gray-800  p-5 font-Montserrat tracking-wide">
                          <span className="text-xl ">&ldquo;</span>
                          {item.Review}
                          <span className="text-xl">&rdquo;</span>
                        </p>
                      </div>
                    </blockquote>
                  </div>
                );
              })}
            </div>
            <div className="swiper-pagination !relative !bottom-0 mt-12"></div>
          </div>
        </div>
      </section>
    </>
  );
}
