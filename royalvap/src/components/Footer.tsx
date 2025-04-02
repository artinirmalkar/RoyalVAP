'use client';

import Container from '@/components/Container';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            'url(/images/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees.webp)',
        }}
      ></div>

      <Container>
        {/* About Section */}
        <div className="text-center flex flex-col items-center gap-3 justify-center max-w-xl m-auto py-10">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <FaInstagram className="w-6 h-6  transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-400 cursor-pointer" />
            <FaYoutube className="w-6 h-6  transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-400 cursor-pointer" />
            <FaFacebook className="w-6 h-6  transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-400 cursor-pointer" />
            <FaLinkedin className="w-6 h-6  transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-400 cursor-pointer" />
            <FaTwitter className="w-6 h-6  transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-400 cursor-pointer" />
          </div>

          <h2 className="text-2xl font-bold">RoyalVAP Event Management</h2>
          <p className="text-sm">
            Planning a full event has never been easier! RoyalVAP Event Management, Company based in
            Bilaspur Chhattisgarh, India, offers a wide range of services to make your events
            stress-free and memorable.
          </p>
        </div>
        <div className="relative z-10  px-6 grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Venues', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              {[
                'Corporate Events',
                'Wedding Planner',
                'Music & Entertainment',
                'Private Parties',
                'Destination Wedding',
              ].map((service) => (
                <li key={service}>
                  <Link href="#" className="hover:underline">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Venues', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} />
                <span>RoyalVAP Event Management, Bilaspur Chhattisgarh India, 495001</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91-7999051152, +91-7898688802</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>royalvapeventmanagement@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
