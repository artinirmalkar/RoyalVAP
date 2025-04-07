'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import Container from './Container';

interface BannerProps {
  title?: string;
  imageUrl?: string;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({
  title = 'Photos Gallery of Melodia',
  imageUrl = 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  className = '',
}) => {
  return (
    <div className={clsx('relative h-[80vh] w-full', className)}>
      <Image
        src={imageUrl}
        alt="Banner Background"
        fill
        className="object-cover brightness-50"
        priority
      />
      
        <div className="absolute inset-0 flex  items-end bottom-30 ">
        <Container>
            <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            {title}
            </h1>
            </Container>
        </div>

    </div>
  );
};

export default Banner;
