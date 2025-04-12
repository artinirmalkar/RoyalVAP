'use client';

import Container from '@/components/Container';
import { services } from '@/constants/home';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
 

  const half = Math.ceil(services.length / 2);
  const firstColumn = services.slice(0, half);
  const secondColumn = services.slice(half);

  return (
    <footer
      className="relative bg-black py-16 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <Container>
        {/* Social + About */}
        <div className="relative text-center flex flex-col items-center gap-4 max-w-2xl mx-auto py-10">
          <div className="flex space-x-4">
            {[FaInstagram, FaYoutube, FaFacebook, FaLinkedin, FaTwitter].map(
              (Icon, index) => (
                <Icon
                  key={index}
                  className="w-6 h-6 transition-transform hover:scale-110 hover:text-purple-400 cursor-pointer"
                />
              )
            )}
          </div>

          <h2 className="text-2xl font-bold">RoyalVAP Event Management</h2>
          <p className="text-sm text-center px-6 md:px-0 text-gray-300 leading-relaxed">
            Planning a full event has never been easier! RoyalVAP Event Management,
            based in Bilaspur, Chhattisgarh, India, offers a wide range of services
            to make your events stress-free and memorable.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Venues', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="hover:underline text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Part 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {firstColumn.map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="hover:underline text-gray-300 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Part 2 */}
          <div className="pt-[42px] md:pt-0">
            <ul className="space-y-2">
              {secondColumn.map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="hover:underline text-gray-300 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-purple-400 flex-shrink-0" />
                <span>
                  RoyalVAP Event Management, Bilaspur, Chhattisgarh, India – 495001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-purple-400 flex-shrink-0" />
                <span>+91-7999051152, +91-7898688802</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-purple-400 flex-shrink-0" />
                <span>royalvapeventmanagement@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10">
        © {new Date().getFullYear()} RoyalVAP Event Management. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
