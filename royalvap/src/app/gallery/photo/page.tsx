'use client';

import React, { useEffect, useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Banner from "@/components/Banner";
import Container from '@/components/Container';
import { photoGallery } from '@/constants/gallery';
import { getImageDimensions } from '@/utils/methods';
import Breadcrumb from '@/components/BreadCrumb';

const categories = [
  { label: 'Wedding Decors', value: 'wedding' },
  { label: 'Corporate Event', value: 'corporate' },
  { label: 'Music & Entertainment', value: 'music' },
  { label: 'Private Parties', value: 'private' },
  { label: 'Other events', value: 'other' },
];



export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('wedding');
  const [index, setIndex] = useState<number | null>(null);


  const [photos, setPhotos] = useState<any[]>([]);

  const filteredPhotos = photos.filter((photo) => photo.category === activeCategory);

  useEffect(() => {
    const loadPhotos = async () => {
      const photosWithDimensions = await Promise.all(
        photoGallery.map(async (item) => {
          try {
            const { width, height } = await getImageDimensions(item.src, 0.3);
            console.log('width', width, 'height',height)
            return {
              src: item.src,
              width,
              height,
              alt: item?.src,
            };
          } catch (error) {
            return {
              src: item.src,
              width: 50,
              height: 50,
              alt: item.src,
            };
          }
        })
      );

      setPhotos(photosWithDimensions);
    };

    

    loadPhotos();
  }, []);

  return (
    <div>
      <Banner
        title="Photo Gallery of RoyalVAP"
        imageUrl="https://images.unsplash.com/photo-1601482441062-b9f13131f33a?q=80&w=2940&auto=format&fit=crop"
      />
      <Breadcrumb/>
      <Container className="py-10">
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat.value
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <PhotoAlbum layout="columns" photos={photos} spacing={8} columns={3} />


        <Lightbox
          open={index !== null}
          close={() => setIndex(null)}
          slides={filteredPhotos}
          index={index ?? 0}
        />
      </Container>
    </div>
  );
}
