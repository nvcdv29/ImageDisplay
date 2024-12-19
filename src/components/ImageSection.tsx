import React from 'react';
import { ImageGallery } from './ImageGallery';
import { ImageCategory } from '../types';

interface Props {
  category: ImageCategory;
  level?: number;
}

export function ImageSection({ category, level = 1 }: Props) {
  const HeadingTag = `h${Math.min(level, 6)}` as keyof JSX.IntrinsicElements;
  
  return (
    <section className="mb-12">
      <HeadingTag 
        className={`
          ${level === 1 ? 'text-4xl font-bold mb-8' : ''}
          ${level === 2 ? 'text-3xl font-semibold mb-6' : ''}
          ${level === 3 ? 'text-2xl font-medium mb-4' : ''}
          ${level > 3 ? 'text-xl font-medium mb-3' : ''}
          text-gray-800
        `}
      >
        {category.name}
      </HeadingTag>

      {category.images && category.images.length > 0 && (
        <ImageGallery images={category.images} />
      )}

      {category.subcategories?.map((subcategory, index) => (
        <div key={index} className="mt-8">
          <ImageSection category={subcategory} level={level + 1} />
        </div>
      ))}
    </section>
  );
}