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

const isYouTubeUrl = (url: string) => {
  return /youtu\.be|youtube\.com/.test(url);
};

const getYouTubeVideoId = (url: string) => {
  const regExp =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?|watch(?:_popup)?)(?:\.php)?\/?|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const Banner: React.FC<BannerProps> = ({
  title = 'Photos Gallery of Melodia',
  imageUrl = 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2940&auto=format&fit=crop',
  className = '',
}) => {
  const isVideo = imageUrl && isYouTubeUrl(imageUrl);
  const videoId = isVideo ? getYouTubeVideoId(imageUrl) : null;

  return (
    <div className={clsx('relative h-[90vh] w-full overflow-hidden bg-black/30', className)}>
      {isVideo && videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`}
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Banner Video"
        />
      ) : (
        <Image
          src={imageUrl}
          alt="Banner Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      )}

      <div className="absolute inset-0 flex items-end bottom-30  ">
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
