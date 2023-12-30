

export interface Product {
    id: number;
    brand: string;
    name: string;
    price: number;
    description: string;
    category?: string;
    type?: string;
    tag_list?: string[];
    tags?: string[];
    api_featured_image?: string;
    imageUrl?: string;
    product_colors?: [];
    colors?: [];
    rating: number;
  }