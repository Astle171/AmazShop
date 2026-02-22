import type { ProductDetail } from "@/types";

export const productDetails: Record<string, ProductDetail> = {
  "studio-pro-wireless": {
    _id: "studio-pro-wireless",
    brand: "AmazShop",
    name: "Studio Pro Wireless",
    description:
      "High-fidelity audio meets unparalleled comfort. Featuring custom active noise cancellation and a precision-engineered sonic chamber.",
    longDescription:
      "High-fidelity audio meets unparalleled comfort. Featuring custom active noise cancellation and a precision-engineered sonic chamber.",
    price: 299.0,
    originalPrice: 399.0,
    category: "audio",
    countInStock: 15,
    rating: 4.8,
    numReviews: 124,
    badgeText: "Special Price",
    specs: [
      { label: "Connectivity", value: "Bluetooth 5.3 + Wireless Audio" },
      { label: "Battery Life", value: "Up to 60 Hours Playback" },
      { label: "Noise Control", value: "Adaptive Active Cancellation" },
      { label: "Drivers", value: "40mm Custom Titan Graphene" },
    ],
    finishes: [
      { name: "Obsidian", hex: "#2D241E", active: true },
      { name: "Sand", hex: "#E5D0BA" },
      { name: "Storm", hex: "#3D4B5D" },
    ],
    variants: [
      { name: "Standard", active: true },
      { name: "Founder's Edition" },
    ],
    reviews: [
      {
        _id: "r1",
        rating: 5,
        title: "Incredible Build Quality",
        comment:
          '"The materials used here are top-notch. It feels like a premium instrument rather than just a pair of headphones. The noise cancellation is spooky quiet."',
        userName: "James Sinclair",
        initials: "JS",
        verified: true,
      },
      {
        _id: "r2",
        rating: 5,
        title: "Best in Class Comfort",
        comment:
          '"I wear these for 8-hour work days without any ear fatigue. The memory foam pads are like pillows. Absolutely worth every penny."',
        userName: "Laura Miller",
        initials: "LM",
        verified: true,
      },
      {
        _id: "r3",
        rating: 4,
        title: "Sonic Perfection",
        comment:
          '"Soundstage is wide for a closed-back pair. Bass is punchy but clean. Only slight issue is the touch controls take a bit of practice."',
        userName: "Robert K.",
        initials: "RK",
        verified: true,
      },
    ],
  },
};

export function getProductDetail(id: string): ProductDetail | undefined {
  if (productDetails[id]) return productDetails[id];

  const placeholderProduct: ProductDetail = {
    _id: id,
    brand: "AmazShop",
    name: "Product " + id,
    description: "A premium product from AmazShop.",
    longDescription: "A premium product from AmazShop.",
    price: 199.0,
    category: "electronics",
    countInStock: 10,
    rating: 4.5,
    numReviews: 42,
    specs: [
      { label: "Material", value: "Premium Grade" },
      { label: "Warranty", value: "2 Years" },
    ],
    finishes: [
      { name: "Default", hex: "#2D241E", active: true },
    ],
    variants: [{ name: "Standard", active: true }],
    reviews: [],
  };
  return placeholderProduct;
}
