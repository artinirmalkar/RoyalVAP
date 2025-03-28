'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Container from '@/components/Container'
import CommonButton from "@/components/CustomButton";
import { heroImages } from "@/constants/HeroSection";

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
 
    useEffect(() => {
 
      
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages?.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  

  return (
    <section className="relative h-screen flex items-center text-white">
        {/* Background Image Slider */}
        <div className="absolute inset-0 overflow-hidden">
        {heroImages?.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Event Background"
            layout="fill"
            objectFit="cover"
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <Container>
        <div className="relative z-10 space-y-6 w-full lg:w-[50%] ">
            <h2 className="text-lg uppercase tracking-wide text-purple-300">
            Take a trip into paradise
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold">
            Partner with RoyalVAP Event Management in Bilapur
            </h1>
            <p className="text-lg text-gray-300">
            Bilaspur's #1 Exclusive Event Company
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
                <FaInstagram className="w-6 h-6  transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-400 cursor-pointer" />
                <FaYoutube className="w-6 h-6  transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-400 cursor-pointer" />
                <FaFacebook className="w-6 h-6  transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-400 cursor-pointer" />
                <FaLinkedin className="w-6 h-6  transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-400 cursor-pointer" />
                <FaTwitter className="w-6 h-6  transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-400 cursor-pointer" />
            </div>


            {/* Contact Button */}
            <CommonButton label="Contact Us" />
        </div>
      </Container>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/918590010011" className="fixed bottom-6 right-6">
        <FaWhatsapp className="w-12 h-12 text-green-500 bg-white rounded-full p-2 shadow-lg" />
      </a>
    </section>
  );
};

export default HeroSection;
