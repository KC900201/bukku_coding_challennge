export interface ProductInterface {
  id: number,
  name: string,
  imageSrc: string,
  imageAlt?: string,
  price: number
}

export const products: ProductInterface[] = [
  {
    id: 1,
    name: 'Basic Tee',
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35.00,
  },
  {
    id: 2,
    name: 'Basic Tee',
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 45.00,
  },
  {
    id: 3,
    name: 'Basic Tee',
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 25.00,
  },
  {
    id: 4,
    name: 'Basic Tee',
    imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 25.00,
  },
]