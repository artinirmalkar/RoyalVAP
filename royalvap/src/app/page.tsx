import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ImageSection from '@/components/home/ImageSection';
import InquirySection from '@/components/home/InquirySection';
import LocationSection from '@/components/home/LocationSection';
import ServicesSection from '@/components/home/ServiceSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ImageSection />
      <ServicesSection/>
      <InquirySection />
      <LocationSection />
    </>
  );
}
