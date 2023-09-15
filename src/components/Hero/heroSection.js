"use client";
import React, { useState } from "react";

// import Layout1 from "../components/Layout/Layout1";
import Sliderdata from "./Sliderdata.json";
import ImageSlider from "./ImageSlider";
export default function Hero() {
  return (
    // <Layout1 title="Home Page">
    <section className="">
      <div>
        <div className="">
          <div className=" filter brightness-50 bg-[url('/assets/hero/peter-aroner-KRvPP5i7DWA-unsplash.jpg')] bg-center bg-cover w-[100%] h-[60vh]"></div>
          <div className="w-[90%] sm:w-[540px] md:w-[820px] px-3 lg:max-w-[1280px] xl:max-w-[1536px] absolute top-[30%] text-white left-0 right-0 mx-auto lg:flex">
            <div className="">
              <div className="text-3xl md:text-5xl">
                <h1 className="md:whitespace-nowrap">BUILD YOUR HOMES</h1>
                <span className="block max-w-[15ch]">
                  {" "}
                  AND OFFICES WITH US.
                </span>
              </div>
              <span className="text-base hero-paragragh">
                We will help you to choose the plan that without the doubt suits
                you best.
              </span>
              <span className="block">And we mean it</span>
              <button className="bg-black text-base text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Read More
              </button>
            </div>
            <div className="w-[300px] h-[200px] mx-auto hidden lg:block">
              <ImageSlider slides={Sliderdata} />
            </div>
          </div>
        </div>
      </div>
    </section>
    // </Layout1>
  );
}
