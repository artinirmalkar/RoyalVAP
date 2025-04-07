'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import CustomButton from '@/components/CustomButton';
import { PhoneCall, MessageCircle } from 'lucide-react';
import Container from '@/components/Container';
import Image from 'next/image';
import { ImageSection } from '@/constants/home';

export default function WeddingSection() {
  return (
    <div className="bg-[#fdf7f1] py-24">
      <Container className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10">
        <div className="grid grid-cols-2 gap-4 w-full">
          {ImageSection?.map((imgSet, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2000 + index * 500 }}
                loop
                className="w-full h-36 lg:h-48" // Ensures Swiper has a height
              >
                {imgSet?.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-36 lg:h-48">
                      <Image
                        src={img}
                        alt={`Wedding ${index + 1} - ${i + 1}`}
                        fill
                        className="object-cover rounded-xl"
                        quality={100}
                        priority
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>

        <div className="max-w-lg">
          <h2 className="text-2xl font-bold mb-4 uppercase text-black">
            UNLOCK YOUR DREAM WEDDING WITH RoyalVAP
          </h2>
          <p className="text-gray-700 mb-4">
            Make your dream wedding a reality with <strong>RoyalVAP Event Management</strong>, your
            trusted partner for premium weddings in <strong>Chhattisgarh and across Chhattisgarh India</strong>.
            Whether you envision a grand resort celebration or a traditional wedding infused with
            rich cultural elements, we bring every detail to life with seamless planning and
            flawless execution.
          </p>
          <p className="text-gray-700 mb-6">
            From <strong>venue selection</strong> to personalized décor, we ensure a stress-free and
            memorable experience. With a proven track record of delivering exceptional weddings
            across <strong>Chhattisgarh India</strong>, RoyalVAP is here to make your special day truly
            extraordinary!
          </p>
          <div className="flex gap-3 flex-wrap">
            <CustomButton className="flex items-center gap-2">
              <PhoneCall size={16} />
              <span>Talk to Expert</span>
            </CustomButton>
            <button
              className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
              onClick={() => window.open('https://wa.me/7898688802', '_blank')}
            >
              <MessageCircle size={16} />
              <span>WhatsApp us</span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
