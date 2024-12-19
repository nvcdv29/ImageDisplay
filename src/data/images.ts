interface ImageCategory {
  name: string;
  subcategories?: ImageCategory[];
  images?: Image[];
}

interface Image {
  url: string;
  alt: string;
}

export const imageData: ImageCategory[] = [
  {
    name: "Nature",
    subcategories: [
      {
        name: "Mountains",
        images: [
          {
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
            alt: "Mountain peak during sunset"
          },
          {
            url: "https://images.unsplash.com/photo-1606117331085-5760e3b58520",
            alt: "Snowy mountain landscape"
          }
        ]
      },
      {
        name: "Forests",
        images: [
          {
            url: "https://images.unsplash.com/photo-1511497584788-876760111969",
            alt: "Misty forest path"
          },
          {
            url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
            alt: "Autumn forest"
          }
        ]
      }
    ]
  },
  {
    name: "Architecture",
    subcategories: [
      {
        name: "Modern",
        images: [
          {
            url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
            alt: "Modern glass building"
          },
          {
            url: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
            alt: "Contemporary architecture"
          }
        ]
      }
    ]
  }
];