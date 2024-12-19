import { ImageCategory } from '../types';

// Use Vite's import.meta.glob to get all images
const imageFiles = import.meta.glob('/src/img/**/*.{jpg,jpeg,png,gif,webp}', {
  eager: true,
  as: 'url'
});

function pathToCategory(path: string): string[] {
  // Remove '/src/img/' prefix and file name
  const relativePath = path.replace(/^\/src\/img\//, '').replace(/\/[^/]+$/, '');
  return relativePath ? relativePath.split('/') : [];
}

function insertIntoTree(root: ImageCategory[], categories: string[], image: { url: string; alt: string }): void {
  let currentLevel = root;
  
  for (let i = 0; i < categories.length; i++) {
    const categoryName = categories[i];
    let category = currentLevel.find(cat => cat.name === categoryName);
    
    if (!category) {
      category = {
        name: categoryName,
        subcategories: [],
        images: []
      };
      currentLevel.push(category);
    }
    
    if (i === categories.length - 1) {
      // We're at the final category, add the image here
      category.images = category.images || [];
      category.images.push(image);
    } else {
      // Move to next level
      category.subcategories = category.subcategories || [];
      currentLevel = category.subcategories;
    }
  }
}

function buildImageTree(): ImageCategory[] {
  const root: ImageCategory[] = [];

  // Sort paths to ensure consistent ordering
  const sortedPaths = Object.keys(imageFiles).sort();

  for (const path of sortedPaths) {
    const categories = pathToCategory(path);
    const fileName = path.split('/').pop() || '';
    const url = imageFiles[path] as string;
    
    if (categories.length > 0) {
      insertIntoTree(root, categories, {
        url,
        alt: fileName.replace(/\.[^/.]+$/, '') // Remove file extension
      });
    }
  }

  return root;
}

export function loadImages(): ImageCategory[] {
  return buildImageTree();
}