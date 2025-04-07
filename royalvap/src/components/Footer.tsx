'use client';

import Container from '@/components/Container';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="relative bg-black py-16 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <Container>
        {/* About Section */}
        <div className="relative text-center flex flex-col items-center gap-3 justify-center max-w-xl mx-auto py-10 text-white">
          {/* Social Icons */}
          <div className="flex space-x-4">
            {[FaInstagram, FaYoutube, FaFacebook, FaLinkedin, FaTwitter].map((Icon, index) => (
              <Icon
                key={index}
                className="w-6 h-6 transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-400 cursor-pointer"
              />
            ))}
          </div>

          <h2 className="text-2xl font-bold">RoyalVAP Event Management</h2>
          <p className="text-sm px-4 md:px-0">
            Planning a full event has never been easier! RoyalVAP Event Management, based in
            Bilaspur, Chhattisgarh, India, offers a wide range of services to make your events
            stress-free and memorable.
          </p>
        </div>

        {/* Footer Links */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Venues', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="hover:underline text-white">
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
                  <Link href="#" className="hover:underline text-white">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links (Alternative Section - Can be replaced) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Venues', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="hover:underline text-white">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start  text-center justify-center text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
            <ul className="space-y-4 text-sm w-full">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-purple-400 flex-shrink-0" />
                <span className="max-w-xs">
                  RoyalVAP Event Management, Bilaspur, Chhattisgarh, India - 495001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-purple-400 flex-shrink-0" />
                <span className="break-words">+91-7999051152, +91-7898688802</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-purple-400 flex-shrink-0" />
                <span className="break-words">royalvapeventmanagement@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-sm mt-10">
        © {new Date().getFullYear()} RoyalVAP Event Management. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
