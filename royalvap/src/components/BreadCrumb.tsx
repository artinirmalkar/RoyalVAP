'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from './Container';


const Breadcrumb = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter((path) => path);

  // Utility function to format paths
  const formatPath = (path: string) => {
    const decodedPath = decodeURIComponent(path);
    return decodedPath
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <section className="border-b px-3 xl:px-0 ">
      <Container className="flex space-x-2 text-sm text-gray-600 border-gray-300 pb-2 py-10 ">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        {pathArray.map((path, index) => {
          const isLast = index === pathArray.length - 1;
          const fullPath = '/' + pathArray.slice(0, index + 1).join('/');

          return (
            <div key={index} className="flex items-center space-x-2">
              <span>•</span>
              {isLast ? (
                <span className="text-purple-500 capitalize font-bold">
                  {formatPath(path)}
                </span>
              ) : (
                <Link
                  href={fullPath}
                  className="hover:text-blue-500 capitalize"
                >
                  {formatPath(path)}
                </Link>
              )}
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Breadcrumb;
