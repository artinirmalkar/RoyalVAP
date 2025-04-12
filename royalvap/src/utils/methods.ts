export const getImageDimensions = (
    src: string,
    scale: number = 0.3 // Thumbnail sizing
  ): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        const width = Math.round(img.width * scale);
        const height = Math.round(img.height * scale);
        resolve({ width, height });
      };
      img.onerror = () => reject(new Error('Failed to load image'));
    });
  };
  