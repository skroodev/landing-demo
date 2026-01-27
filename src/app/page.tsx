import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { WhoIsThis } from "@/components/WhoIsThis";
import { ProblemSolution } from "@/components/ProblemSolution";
import { HowItWorks } from "@/components/HowItWorks";
import { Services } from "@/components/Services";
import { Qualifications } from "@/components/Qualifications";
import { FAQ } from "@/components/FAQ";
import { Pricing } from "@/components/Pricing";
import { CTAFinal } from "@/components/CTAFinal";
import { ContactForm } from "@/components/ContactForm";
import { Map } from "@/components/Map";
import { Footer } from "@/components/Footer";
import siteConfig from "@/lib/config";

export const metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    image: siteConfig.seo.ogImage,
    imageAlt: siteConfig.seo.ogImageAlt,
  },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <SocialProof />
      <WhoIsThis />
      <ProblemSolution />
      <HowItWorks />
      <Services />
      <Qualifications />
      <FAQ />
      <Pricing />
      <CTAFinal />
      <ContactForm />
      <Map />
      <Footer />
    </>
  );
}
