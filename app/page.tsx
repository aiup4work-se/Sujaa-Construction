import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Works from "@/components/home/Works";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Insights from "@/components/home/Insights";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <Team />
      <Testimonials />
      <Faq />
      <Insights />
    </>
  );
}
