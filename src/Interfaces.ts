

export interface Product {
    _id?: string;
    id?: string;
    api_id?: number;
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

  export interface Filters {
    brand: string;
    tags: string[];
    rating: number;
    category: string;

  }