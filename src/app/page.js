"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/heroSection";
import Pricing from "@/components/Pricing/Pricing";
import Services from "@/components/Services/Services";
import Team from "@/components/Team/Team";
import Testimonials from "@/components/Testimonials/Testimonials";
import NavBar from "@/components/navBar/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
