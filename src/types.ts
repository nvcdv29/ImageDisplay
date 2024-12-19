export interface ImageCategory {
  name: string;
  subcategories?: ImageCategory[];
  images?: Image[];
}

export interface Image {
  url: string;
  alt: string;
}