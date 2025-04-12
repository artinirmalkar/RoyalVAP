'use client';

import Banner from '@/components/Banner';
import Breadcrumb from '@/components/BreadCrumb';
import Container from '@/components/Container';
import { videoUrls } from '@/constants/gallery';
import React from 'react';



// Helper to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string) => {
  const regExp =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?|watch(?:_popup)?)(?:\.php)?\/?|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

export default function VideoGallery() {
  return (
     <div>
        <Banner
        title="Video Gallery of RoyalVAP"
        imageUrl="https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Breadcrumb/>
        <Container className="py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {videoUrls.map((url, index) => {
                const videoId = getYouTubeVideoId(url);
                if (!videoId) return null;

                return (
                    <div key={index} className="w-full aspect-video rounded overflow-hidden shadow-md">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={`YouTube video ${index}`}
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
