'use client';

import Banner from '@/components/Banner';
import Breadcrumb from '@/components/BreadCrumb';
import Container from '@/components/Container';
import { shortsUrl } from '@/constants/gallery';

import React from 'react';

// Extract Shorts ID (similar to normal video ID)
const getShortsVideoId = (url: string) => {
  const regExp =
    /(?:youtube\.com\/shorts\/|youtu\.be\/)([^"&?/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

export default function ShortsGallery() {
  return (
    <div>
      <Banner
        title="Shorts Gallery of RoyalVAP"
       imageUrl="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Breadcrumb />
      <Container className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shortsUrl.map((url, index) => {
            const videoId = getShortsVideoId(url);
            if (!videoId) return null;

            return (
              <div key={index} className="w-full aspect-[9/16] rounded overflow-hidden shadow-md">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`YouTube Short ${index}`}
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
