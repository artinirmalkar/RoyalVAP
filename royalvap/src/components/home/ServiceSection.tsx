'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Container from '../Container';

const services = [
    {
      title: 'Fireworks',
      image: '/images/fireworks.jpeg',
      description: 'Our Fireworks displays bring an unforgettable sparkle to your event. Whether it\'s a grand wedding or a festive celebration, our colorful pyrotechnic shows will light up the night sky. We customize each display to suit the theme of your event, ensuring it is a dazzling spectacle.'
    },
    {
      title: 'Mirror Pathway',
      image: '/images/mirror-pathway.jpeg',
      description: 'Transform your venue with our stunning Mirror Pathway setup. This elegant design creates a reflective path that guides your guests through an immersive experience. Perfect for weddings and special ceremonies, it adds a touch of class and sophistication.'
    },
    {
      title: 'Balloon Blaster',
      image: '/images/ballon-blaster.jpg',
      description: 'Our Balloon Blaster experience brings a fun and interactive twist to your event. Watch as balloons are shot into the air, creating a vibrant atmosphere. Ideal for kids\' parties or casual events, it’s a unique way to entertain guests and create lasting memories.'
    },
    {
      title: 'Flower Pathway',
      image: '/images/flower-pathway.jpg',
      description: 'Walk through a garden of beauty with our Flower Pathway setup. Featuring a stunning array of flowers, this arrangement is perfect for weddings and romantic occasions. It creates a magical atmosphere, guiding guests with nature’s elegance and fragrance.'
    },
    {
      title: 'Cold Pyro Blaster',
      image: '/images/cold-pyro-blaster.webp',
      description: 'Add a dramatic effect to your event with our Cold Pyro Blasters. These non-hazardous cold flame effects are safe for indoor use, making them perfect for stage performances, award shows, and intimate events. The cold pyrotechnics create a stunning visual impact without any heat.'
    },
    {
      title: 'Cold Pyro Gun / Fanwheel',
      image: '/images/cold-pyro-gun.jpg',
      description: 'Our Cold Pyro Gun and Fanwheel provide an impressive way to add flair to your event. With powerful jets of cold flames, they create dramatic effects that can be used during performances or celebrations. These innovative designs ensure safety while delivering incredible visual impact.'
    },
    {
      title: 'Balloon Decoration',
      image: '/images/services/balloon-decoration.jpg',
      description: 'Transform any space with our Balloon Decoration services. From arches to columns, we offer a range of creative balloon designs for all occasions. Whether it’s for a birthday party or a corporate event, our colorful and customized balloon setups will make your venue come alive.'
    },
    {
      title: 'Stage Decoration',
      image: '/images/services/stage-decoration.jpg',
      description: 'Elevate your event with our professional stage decoration services. We design captivating stage setups that reflect your theme and vision, from corporate events to weddings. Our experienced team ensures every detail is tailored to your preferences, creating the perfect backdrop for your special moments.'
    },
    {
      title: 'Baby Shower',
      image: '/images/services/baby-shower.jpg',
      description: 'Celebrate the arrival of your little one with our Baby Shower services. We offer everything from soft pastel decorations to interactive games, making it a fun and memorable occasion. Our team will help design the perfect setting for your celebration, ensuring it is as special as the occasion itself.'
    },
    {
      title: 'Haldi / Mehndi Ceremony',
      image: '/images/services/haldi-mehndi.jpg',
      description: 'Our Haldi and Mehndi ceremony setups are vibrant and full of tradition. We provide colorful decorations, floral arrangements, and entertainment to make these important pre-wedding rituals memorable. Let us help create a beautiful and joyous atmosphere for you and your loved ones.'
    },
    {
      title: 'Varmala Stage',
      image: '/images/services/varmala-stage.jpg',
      description: 'The Varmala stage is the centerpiece of your wedding ceremony. We provide intricate and stunning stage designs that reflect your cultural heritage. With flowers, fabrics, and lighting, we create a magical setting for the couple to exchange garlands in front of their friends and family.'
    },
    {
      title: 'Theme-Based Party',
      image: '/images/services/theme-party.jpg',
      description: 'Our Theme-Based Party services take your event to the next level. Whether it’s a 1920s Gatsby-style party or a whimsical fairy-tale theme, we design the entire atmosphere around your chosen concept. From decorations to entertainment, every detail will align with your party’s theme.'
    },
    {
      title: 'Celebrity Night',
      image: '/images/services/celebrity-night.jpg',
      description: 'Host an unforgettable Celebrity Night with our professional event planning services. We bring in top-notch performances, entertainment, and ambiance to make your event feel like a star-studded affair. Whether it’s a gala, awards show, or corporate event, we ensure it’s a night to remember.'
    },
    {
      title: 'Annual Function',
      image: '/images/services/annual-function.jpg',
      description: 'Our Annual Function services are designed to make your corporate or school event extraordinary. From stage setups to lighting and sound systems, we manage every detail. Whether it’s a year-end celebration or an awards ceremony, we ensure a flawless experience for your guests.'
    },
    {
      title: 'Mandap',
      image: '/images/services/mandap.jpg',
      description: 'The Mandap is an essential part of many cultural wedding ceremonies. Our designs combine tradition and elegance, offering the perfect setting for your sacred rituals. We create custom Mandaps with floral arrangements, drapery, and intricate details that will make your ceremony unforgettable.'
    }
  ];
  
  

  const ServicesSection = () => {
    const [showAll, setShowAll] = useState(false);
  
    const displayedServices = showAll ? services : services.slice(0, 6);
  
    return (
        <section className="bg-white py-24">
            <Container>
                <h2 className="text-3xl font-bold text-purple-500 text-center mb-1">Our Services</h2>
                <p className="text-center text-gray-600 mb-10">
                We provide a wide range of services to make your events unforgettable.
                </p>
        
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {displayedServices.map((service, index) => (
                    <div
                    key={index}
                    className="shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition duration-300"
                    >
                    <Image
                        src={service.image}
                        alt={service.title}
                        width={100}
                        height={100}
                        className="w-full h-64 object-cover rounded-t-lg"
                        />
                    <div className="p-5">
                        <h3 className="text-lg font-semibold text-purple-700">{service.title}</h3>
                        <p className="text-gray-500 mt-2">
                        {service.description}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
        
                {services.length > 6 && (
                <div className="text-center mt-8">
                    <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-purple-600 font-medium hover:underline"
                    >
                    {showAll ? 'Show Less' : 'View All Services'}
                    </button>
                </div>
                )}
            </Container>
      </section>
    );
  };
  

export default ServicesSection;
