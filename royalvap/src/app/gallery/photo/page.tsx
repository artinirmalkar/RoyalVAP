



'use client';

import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Banner from "@/components/Banner";
import Container from '@/components/Container';

const categories = [
  { label: 'Wedding Decors', value: 'wedding' },
  { label: 'Corporate Event', value: 'corporate' },
  { label: 'Music & Entertainment', value: 'music' },
  { label: 'Private Parties', value: 'private' },
  { label: 'Other events', value: 'other' },
];

// const allPhotos = [
//   {
//     src: 'https://media.istockphoto.com/id/902235154/photo/floating-candles.jpg?s=1024x1024&w=is&k=20&c=h1N28cy44A_RQfjNsPnN2oQapLaagnGtzx5BjpNjFS4=',
//     width: 400,
//     height: 200,
//     category: 'wedding',
//   },
//   {
//     src: 'https://media.istockphoto.com/id/2103473345/photo/decorative-flowers.jpg?s=612x612&w=0&k=20&c=NVZfJevXEvFRvu4b0cUzngbxT99Ax6kOr1N82pd18QY=',
//     width: 600,
//     height: 800,
//     category: 'wedding',
//   },
//   {
//     src: 'https://media.istockphoto.com/id/1692151237/photo/table-newlyweds-in-banquet-area-at-a-wedding-party-festive-table-with-arch-decorated.jpg?s=1024x1024&w=is&k=20&c=pWM0BwuXN_IEiA-eutirogt56Uxa3pB4l62F1j_Q8tY=',
//     width: 400,
//     height: 200,
//     category: 'music',
//   },
//   {
//     src: 'https://media.istockphoto.com/id/1369531770/photo/wedding-photo-zone-stand-decorated-with-red-peonies-and-roses.jpg?s=1024x1024&w=is&k=20&c=x8G3FLEfYINgYCyJTO7u0wZ1SmiqB-Z_Me0uxa8B0Us=',
//     width: 400,
//     height: 200,
//     category: 'wedding',
//   },
//   {
//     src: 'https://media.istockphoto.com/id/2103473345/photo/decorative-flowers.jpg?s=612x612&w=0&k=20&c=NVZfJevXEvFRvu4b0cUzngbxT99Ax6kOr1N82pd18QY=',
//     width: 600,
//     height: 800,
//     category: 'corporate',
//   },
//   {
//     src: 'https://media.istockphoto.com/id/1692151237/photo/table-newlyweds-in-banquet-area-at-a-wedding-party-festive-table-with-arch-decorated.jpg?s=1024x1024&w=is&k=20&c=pWM0BwuXN_IEiA-eutirogt56Uxa3pB4l62F1j_Q8tY=',
//     width: 400,
//     height: 200,
//     category: 'music',
//   },
//   {
//     src: 'https://media.istockphoto.com/id/1369531770/photo/wedding-photo-zone-stand-decorated-with-red-peonies-and-roses.jpg?s=1024x1024&w=is&k=20&c=x8G3FLEfYINgYCyJTO7u0wZ1SmiqB-Z_Me0uxa8B0Us=',
//     width: 400,
//     height: 200,
//     category: 'wedding',
//   },
 
// ];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('wedding');
  const [index, setIndex] = useState<number | null>(null);

  // const filteredPhotos = allPhotos.filter(
  //   (photo) => photo.category === activeCategory
  // );

  return (
    <div >
        <Banner
        title="Photos Gallery of RoyalVAP"
        imageUrl="https://images.unsplash.com/photo-1601482441062-b9f13131f33a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Container className='py-10'>

  
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === cat.value
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* <PhotoAlbum
        layout="rows"
        photos={filteredPhotos}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index !== null}
        close={() => setIndex(null)}
        slides={filteredPhotos}
        index={index ?? 0}
      /> */}
          </Container>
    </div>
  );
}
