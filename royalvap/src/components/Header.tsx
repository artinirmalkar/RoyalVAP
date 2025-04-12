'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { FaCaretDown } from "react-icons/fa6";
import { navLinks } from '@/constants/header';
import { services } from '@/constants/home';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryMenuOpen, setIsGalleryMenuOpen] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent text-white z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href='/' className="flex items-center space-x-2">
          <span className="text-xl font-semibold">RoyalVAP</span>
        </Link>

        {/* Nav Menu (Desktop) */}
        <nav className="hidden md:flex space-x-6 items-center justify-center px-10 ">
       { navLinks?.map((item, i) => (
            <Link key={i} href={item?.path} className="hover:text-gray-300 uppercase text-sm">
              {item?.label}
            </Link>
          ))}

          {/* Gallery with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsGalleryMenuOpen(true)}
            onMouseLeave={() => setIsGalleryMenuOpen(false)}
          >
            <Link href="#" className="hover:text-gray-300 h-10 uppercase text-sm flex gap-1 items-center justify-center">
              <span>Gallery</span> <FaCaretDown />
            </Link>
            {isGalleryMenuOpen && (
              <div className="absolute left-0  w-52 bg-black/80 text-white text-sm capitalize shadow-lg rounded-md backdrop-blur-md border border-white/10">
                {[
                  { label: 'Photo Gallery', path: '/gallery/photo' },
                  { label: 'Video Gallery', path: '/gallery/video' },
                  { label: 'Shorts Gallery', path: '/gallery/shorts' },
                ].map(({ label, path }) => (
                  <Link
                    key={label}
                    href={path}
                    className="block px-4 py-2 hover:bg-gray-800"
                    onClick={() => setIsGalleryMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServiceMenuOpen(true)}
            onMouseLeave={() => setIsServiceMenuOpen(false)}
          >
             <Link href="#" className="hover:text-gray-300 uppercase text-sm flex gap-1 items-center justify-center">
              <span>Services</span> <FaCaretDown />
            </Link>
            {isServiceMenuOpen && (
              <div className="absolute left-0 mt-2 w-52 bg-black/50 text-white  text-sm capitalize shadow-lg rounded-md backdrop-blur-md border border-white/10">
                {services?.map((service) => (
                  <Link key={service} href="#" className="block px-4 py-2 hover:bg-gray-800">
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Contact */}
        <div className="flex gap-1">
          <div className="hidden md:block text-sm">📞 +91-7999051152,</div>
          <div className="hidden md:block text-sm">+91-7898688802</div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white py-4">
          {['Home', 'About Us', 'Services', 'Wedding Venues', 'Gallery', 'Contact Us'].map(
            (item) => (
              <Link key={item} href="#" className="block px-6 py-2 hover:bg-gray-800">
                {item}
              </Link>
            ),
          )}
          <div className="px-6 py-2 text-sm">📞 +91-7999051152</div>
          <div className="px-6 py-2 text-sm">📞 +91-7999051152</div>
        </div>
      )}
    </header>
  );
};

export default Header;
