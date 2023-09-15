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
          {/* <div className=" filter brightness-50 bg-[url('/assets/hero/woodwork1.jpg')] bg-center bg-cover w-[100%] h-[60vh]"></div> */}
          <div className=" filter brightness-50 bg-[url('/assets/hero/woodwork1.jpg')] bg-center bg-cover w-[100%] h-[80vh]"></div>
          <div className="w-[90%] sm:w-[540px] md:w-[720px] px-3 lg:w-[1000px] xl:w-[1200px] absolute top-[30%] text-white left-0 right-0 mx-auto lg:flex">
            <div className="lg:mt-[100px] text-base xl:text-[1.5rem] lg:pl-10">
              <div className="text-3xl md:text-5xl xl:text-[5rem]">
                <h1 className="md:whitespace-nowrap">BUILD YOUR HOMES</h1>
                <span className="block max-w-[15ch]">
                  {" "}
                  AND OFFICES WITH US.
                </span>
              </div>
              {/* <span className=" md:w-[400px] hero-paragragh"> */}
              <span className="inline-block w-[300px] md:w-[400px]">
                We will help you to choose the plan that without any doubt suits
                you best.
              </span>
              <span className="block">And we mean it</span>
              <button className="bg-black  text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Read More
              </button>
            </div>
            <div className="w-[300px] h-[200px] md:mt-[130px] mx-auto hidden lg:block">
              <ImageSlider slides={Sliderdata} />
            </div>
          </div>
        </div>
      </div>
    </section>
    // </Layout1>
  );
}
