import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Works from "@/components/home/Works";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Insights from "@/components/home/Insights";
import { CtaBand } from "@/components/ui";
import JsonLd from "@/components/JsonLd";
import { faqs } from "@/data/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({ path: "/" });
import WhyUs from "@/components/home/WhyUs";
import Sectors from "@/components/home/Sectors";

export default function Home() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }} />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Works />
      <Sectors />
      <Team />
      <Testimonials />
      <Faq />
      <Insights />
      <CtaBand />
    </>
  );
}
