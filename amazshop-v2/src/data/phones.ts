import type { ProductDetail } from "@/types";

export const phones: ProductDetail[] = [
  {
    _id: "phone-1",
    brand: "Apple",
    name: "iPhone 17 Pro Max",
    description:
      "The most powerful iPhone ever with A19 Pro chip and 48MP Fusion camera system.",
    price: 1199,
    originalPrice: 1299,
    badge: { text: "-8%", variant: "accent" },
    image:
      "https://images.unsplash.com/photo-1759588071781-2c3ba9128497?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1759588071781-2c3ba9128497?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1759588073186-1d4ac7e33623?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1759588071814-f960ed8f7ee8?w=800&q=80&auto=format",
    ],
    category: "phones",
    subcategory: "flagship-phones",
    tags: ["5G", "Flagship", "AI Camera", "ProMotion", "USB-C"],
    countInStock: 35,
    rating: 4.9,
    numReviews: 2847,
    longDescription:
      "Experience the pinnacle of smartphone technology. The iPhone 17 Pro Max features a stunning 6.9-inch Super Retina XDR OLED display, the revolutionary A19 Pro chip, and an advanced 48MP camera system with 5x optical zoom. With up to 33 hours of video playback and the new Camera Control button, this is photography redefined.",
    specs: [
      {
        label: "Display",
        value: '6.9" Super Retina XDR OLED, 120Hz ProMotion',
      },
      { label: "Chip", value: "A19 Pro" },
      {
        label: "Camera",
        value: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
      },
      { label: "Battery", value: "Up to 33 hours video playback" },
      { label: "Storage", value: "256GB / 512GB / 1TB" },
      { label: "OS", value: "iOS 18" },
    ],
    colors: [
      { name: "Cosmic Orange", hex: "#C8764B" },
      { name: "Deep Blue", hex: "#1B3A5C" },
      { name: "Silver", hex: "#E3E3E3" },
      { name: "Natural Titanium", hex: "#98989D" },
    ],
    finishes: [
      { name: "Cosmic Orange", hex: "#C8764B", active: true },
      { name: "Deep Blue", hex: "#1B3A5C" },
      { name: "Silver", hex: "#E3E3E3" },
      { name: "Natural Titanium", hex: "#98989D" },
    ],
    variants: [
      { name: "256GB", active: true },
      { name: "512GB" },
      { name: "1TB" },
    ],
    reviews: [
      {
        _id: "r-p1-1",
        rating: 5,
        title: "Camera is absolutely insane",
        comment:
          "The 5x telephoto is a game changer. I took concert photos from the back row that look like I was front stage. Night mode on the ultra wide is also incredible — low light shots have zero grain.",
        userName: "Marcus Chen",
        initials: "MC",
        verified: true,
      },
      {
        _id: "r-p1-2",
        rating: 5,
        title: "Battery finally lasts all day and then some",
        comment:
          "Coming from a 14 Pro, the battery improvement is night and day. I get through a full day of heavy use with 30% left. The screen is gorgeous and the titanium build feels premium without being heavy.",
        userName: "Sarah Johnson",
        initials: "SJ",
        verified: true,
      },
      {
        _id: "r-p1-3",
        rating: 4,
        title: "Great phone, but pricey",
        comment:
          "No doubt this is the best iPhone ever made. The A18 Pro flies through everything. My only gripe is the price — it's a lot of money even for a flagship. Camera Control button is more useful than I expected though.",
        userName: "David Park",
        initials: "DP",
        verified: true,
      },
    ],
  },
  {
    _id: "phone-2",
    brand: "Apple",
    name: "iPhone 17 Pro",
    description:
      "Pro-level performance with Camera Control and A19 Pro chip.",
    price: 999,
    originalPrice: 1099,
    badge: { text: "-9%", variant: "accent" },
    image:
      "https://images.unsplash.com/photo-1763891378295-5d9bd5c48745?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1763891378295-5d9bd5c48745?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1764746250417-2cc103a45a56?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1764746218363-6cb017fcd926?w=800&q=80&auto=format",
    ],
    category: "phones",
    subcategory: "flagship-phones",
    tags: ["5G", "Flagship", "AI Camera", "ProMotion", "USB-C"],
    countInStock: 42,
    rating: 4.8,
    numReviews: 1923,
    longDescription:
      "The iPhone 17 Pro packs flagship power into a more compact form factor. Featuring a 6.3-inch Super Retina XDR OLED display with ProMotion, the A19 Pro chip, and an advanced triple-camera system with 48MP Fusion camera. The new Camera Control button and Apple Intelligence make this the smartest iPhone yet.",
    specs: [
      {
        label: "Display",
        value: '6.3" Super Retina XDR OLED, 120Hz ProMotion',
      },
      { label: "Chip", value: "A19 Pro" },
      {
        label: "Camera",
        value: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
      },
      { label: "Battery", value: "Up to 27 hours video playback" },
      { label: "Storage", value: "128GB / 256GB / 512GB / 1TB" },
      { label: "OS", value: "iOS 18" },
    ],
    colors: [
      { name: "Cosmic Orange", hex: "#C8764B" },
      { name: "Deep Blue", hex: "#1B3A5C" },
      { name: "Silver", hex: "#E3E3E3" },
      { name: "Natural Titanium", hex: "#98989D" },
    ],
    finishes: [
      { name: "Cosmic Orange", hex: "#C8764B", active: true },
      { name: "Deep Blue", hex: "#1B3A5C" },
      { name: "Silver", hex: "#E3E3E3" },
      { name: "Natural Titanium", hex: "#98989D" },
    ],
    variants: [
      { name: "128GB", active: true },
      { name: "256GB" },
      { name: "512GB" },
      { name: "1TB" },
    ],
    reviews: [
      {
        _id: "r-p2-1",
        rating: 5,
        title: "Perfect size with Pro features",
        comment:
          "I always wanted the Pro camera system but hated the Max size. The 16 Pro is the sweet spot — fits comfortably in one hand and still has the 5x telephoto. The display is sharp and smooth.",
        userName: "Emily Torres",
        initials: "ET",
        verified: true,
      },
      {
        _id: "r-p2-2",
        rating: 5,
        title: "Best upgrade in years",
        comment:
          "Upgraded from iPhone 13 Pro. The speed difference is dramatic — apps open instantly and the camera processes photos way faster. Camera Control is genuinely useful for quick shots on the go.",
        userName: "James Walker",
        initials: "JW",
        verified: true,
      },
      {
        _id: "r-p2-3",
        rating: 4,
        title: "Excellent but 128GB feels tight",
        comment:
          "Everything about this phone is top tier. Only reason I'm not giving 5 stars is that the 128GB base storage fills up fast when you're shooting ProRes video. Should've started at 256GB for the price.",
        userName: "Priya Sharma",
        initials: "PS",
        verified: true,
      },
    ],
  },
  {
    _id: "phone-3",
    brand: "Apple",
    name: "iPhone 17 Air",
    description:
      "Ultra-thin design meets powerful performance. The thinnest iPhone ever made.",
    price: 599,
    badge: { text: "NEW", variant: "dark" },
    image:
      "https://images.unsplash.com/photo-1759588071814-1ba7c5761af4?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1759588071814-1ba7c5761af4?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1759588071763-c74ea2fcd55f?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1759588071838-d560be56b2a2?w=800&q=80&auto=format",
    ],
    category: "phones",
    subcategory: "budget-phones",
    tags: ["5G", "Apple Intelligence", "USB-C", "Face ID"],
    countInStock: 50,
    rating: 4.5,
    numReviews: 421,
    longDescription:
      "The iPhone 17 Air redefines what an iPhone can be. Featuring an ultra-thin design and powered by the A19 chip, it delivers a stunning 6.6-inch OLED display, a 48MP camera system, Face ID, and USB-C — all in the thinnest iPhone ever made. Experience powerful performance in an incredibly sleek form factor.",
    specs: [
      { label: "Display", value: '6.6" OLED, 120Hz ProMotion' },
      { label: "Chip", value: "Apple A19" },
      { label: "Camera", value: "48MP Fusion" },
      { label: "Design", value: "Ultra-thin at 5.5mm — thinnest iPhone ever" },
      { label: "Storage", value: "128GB / 256GB / 512GB" },
      { label: "OS", value: "iOS 18" },
    ],
    colors: [
      { name: "Black", hex: "#1D1D1F" },
      { name: "White", hex: "#F5F5F7" },
      { name: "Blue", hex: "#5B7BA5" },
    ],
    finishes: [
      { name: "Black", hex: "#1D1D1F", active: true },
      { name: "White", hex: "#F5F5F7" },
      { name: "Blue", hex: "#5B7BA5" },
    ],
    variants: [
      { name: "128GB", active: true },
      { name: "256GB" },
      { name: "512GB" },
    ],
    reviews: [
      {
        _id: "r-p3-1",
        rating: 5,
        title: "Incredible value for an iPhone",
        comment:
          "Switched from Android and this phone is fantastic for the price. The 48MP camera takes surprisingly good photos, and Apple Intelligence features like notification summaries are actually useful day-to-day.",
        userName: "Alex Rivera",
        initials: "AR",
        verified: true,
      },
      {
        _id: "r-p3-2",
        rating: 4,
        title: "Great phone, wish it had 120Hz",
        comment:
          "The A18 chip is fast, Face ID works flawlessly, and the camera holds its own. The only thing I miss from my friend's Pro is the smooth 120Hz scrolling. At 60Hz it's fine but you notice the difference.",
        userName: "Nina Patel",
        initials: "NP",
        verified: true,
      },
      {
        _id: "r-p3-3",
        rating: 5,
        title: "Perfect first iPhone",
        comment:
          "Bought this for my daughter and she absolutely loves it. Build quality is solid, the camera is great for social media, and it'll get software updates for years. Can't beat the value.",
        userName: "Tom Bradley",
        initials: "TB",
        verified: true,
      },
    ],
  },
  {
    _id: "phone-4",
    brand: "Samsung",
    name: "Galaxy S25 Ultra",
    description:
      "The ultimate Galaxy experience with Snapdragon 8 Elite and embedded S Pen.",
    price: 1299,
    badge: { text: "AI POWERED", variant: "dark" },
    image:
      "https://images.unsplash.com/photo-1738830234395-a351829a1c7b?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1738830234395-a351829a1c7b?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1738830251513-a7bfef4b53c6?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1738830223726-151adcd58131?w=800&q=80&auto=format",
    ],
    category: "phones",
    subcategory: "flagship-phones",
    tags: ["5G", "Flagship", "S Pen", "Galaxy AI", "200MP"],
    countInStock: 28,
    rating: 4.8,
    numReviews: 1654,
    longDescription:
      "The Galaxy S25 Ultra is Samsung's most powerful smartphone, featuring the Snapdragon 8 Elite processor, a stunning 6.9-inch QHD+ Dynamic AMOLED 2X display, and a 200MP camera system that captures every detail. With the embedded S Pen, Galaxy AI features, and titanium frame, this is productivity and creativity unleashed.",
    specs: [
      {
        label: "Display",
        value: '6.9" QHD+ Dynamic AMOLED 2X, 120Hz',
      },
      { label: "Processor", value: "Snapdragon 8 Elite" },
      {
        label: "Camera",
        value: "200MP + 50MP Ultra Wide + 10MP 3x + 50MP 5x Telephoto",
      },
      { label: "Battery", value: "5000mAh, 45W Fast Charging" },
      { label: "Storage", value: "256GB / 512GB / 1TB" },
      { label: "Special", value: "S Pen, Galaxy AI" },
    ],
    colors: [
      { name: "Titanium Black", hex: "#1B1B1B" },
      { name: "Titanium Gray", hex: "#848484" },
      { name: "Titanium Violet", hex: "#D4C1E0" },
    ],
    finishes: [
      { name: "Titanium Black", hex: "#1B1B1B", active: true },
      { name: "Titanium Gray", hex: "#848484" },
      { name: "Titanium Violet", hex: "#D4C1E0" },
    ],
    variants: [
      { name: "256GB", active: true },
      { name: "512GB" },
      { name: "1TB" },
    ],
    reviews: [
      {
        _id: "r-p4-1",
        rating: 5,
        title: "Galaxy AI is the real deal",
        comment:
          "Circle to Search, live translate during calls, and the AI photo editing are features I use daily now. The 200MP camera captures insane detail — you can crop way in and it still looks sharp. S Pen is great for quick notes.",
        userName: "Kevin Okafor",
        initials: "KO",
        verified: true,
      },
      {
        _id: "r-p4-2",
        rating: 5,
        title: "The best Android phone, period",
        comment:
          "Coming from an S23 Ultra, the Snapdragon 8 Elite is noticeably faster. The titanium frame gives it a premium feel and the flat display is a welcome change. Battery easily lasts a full day of heavy use.",
        userName: "Rachel Kim",
        initials: "RK",
        verified: true,
      },
      {
        _id: "r-p4-3",
        rating: 4,
        title: "Almost perfect",
        comment:
          "Incredible phone with an incredible camera. The AI features are genuinely helpful, not gimmicky. Took off one star because the 45W charging feels slow compared to what OnePlus and others offer at this price point.",
        userName: "Brandon Lee",
        initials: "BL",
        verified: true,
      },
    ],
  },
  {
    _id: "phone-5",
    brand: "Samsung",
    name: "Galaxy S25+",
    description:
      "Premium Galaxy experience with a stunning QHD+ display and Snapdragon 8 Elite performance.",
    price: 999,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s8/3.webp",
    ],
    category: "phones",
    subcategory: "flagship-phones",
    tags: ["5G", "Flagship", "Galaxy AI", "QHD+"],
    countInStock: 33,
    rating: 4.7,
    numReviews: 987,
    longDescription:
      "The Galaxy S25+ delivers flagship performance in a sleek package. With a 6.7-inch QHD+ Dynamic AMOLED 2X display, Snapdragon 8 Elite chipset, and 50MP triple camera system, it offers everything you need without the Ultra price tag. Galaxy AI features keep you productive, and the 4900mAh battery powers through your busiest days.",
    specs: [
      {
        label: "Display",
        value: '6.7" QHD+ Dynamic AMOLED 2X, 120Hz',
      },
      { label: "Processor", value: "Snapdragon 8 Elite" },
      {
        label: "Camera",
        value: "50MP Main + 12MP Ultra Wide + 10MP 3x Telephoto",
      },
      { label: "Battery", value: "4900mAh, 45W Fast Charging" },
      { label: "Storage", value: "256GB / 512GB" },
      { label: "Special", value: "Galaxy AI, IP68" },
    ],
    colors: [
      { name: "Navy", hex: "#1B2838" },
      { name: "Icy Blue", hex: "#C4D8E2" },
      { name: "Mint", hex: "#B8D8C8" },
      { name: "Silver Shadow", hex: "#C0C0C0" },
    ],
    finishes: [
      { name: "Navy", hex: "#1B2838", active: true },
      { name: "Icy Blue", hex: "#C4D8E2" },
      { name: "Mint", hex: "#B8D8C8" },
      { name: "Silver Shadow", hex: "#C0C0C0" },
    ],
    variants: [
      { name: "256GB", active: true },
      { name: "512GB" },
    ],
    reviews: [
      {
        _id: "r-p5-1",
        rating: 5,
        title: "Best value flagship from Samsung",
        comment:
          "You get 90% of the Ultra experience without the S Pen or 200MP camera, and honestly that's fine for most people. The QHD+ display is stunning and Galaxy AI features work great. Battery is solid too.",
        userName: "Laura Martinez",
        initials: "LM",
        verified: true,
      },
      {
        _id: "r-p5-2",
        rating: 4,
        title: "Great phone, great display",
        comment:
          "The screen is beautiful and bright enough for outdoor use. Camera takes really nice photos in good light, though it struggles a bit in very low light compared to the Ultra. Still a very capable phone overall.",
        userName: "Daniel Nguyen",
        initials: "DN",
        verified: true,
      },
      {
        _id: "r-p5-3",
        rating: 5,
        title: "Smooth and reliable",
        comment:
          "Using this as my daily driver for two months and it's been flawless. Everything is fast, the fingerprint reader is instant, and I love the Icy Blue color. Highly recommend over the Ultra if you don't need the S Pen.",
        userName: "Hannah Brooks",
        initials: "HB",
        verified: true,
      },
    ],
  },
  {
    _id: "phone-6",
    brand: "Google",
    name: "Pixel 9 Pro",
    description:
      "The best of Google AI in a phone. Gemini built-in with 7 years of updates.",
    price: 999,
    badge: { text: "AI PICK", variant: "dark" },
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-f19-pro-plus/3.webp",
    ],
    category: "phones",
    subcategory: "flagship-phones",
    tags: ["5G", "Flagship", "Gemini AI", "Pure Android", "7yr Updates"],
    countInStock: 25,
    rating: 4.7,
    numReviews: 1102,
    longDescription:
      "The Pixel 9 Pro is the smartest phone you can buy. Powered by the Tensor G4 chip and built with Gemini AI at its core, it offers unmatched photo and video capabilities with its 50MP + 48MP + 48MP triple camera system. The 6.3-inch LTPO OLED display runs buttery smooth at 120Hz, and Google promises 7 years of OS and security updates.",
    specs: [
      { label: "Display", value: '6.3" LTPO OLED, 120Hz' },
      { label: "Processor", value: "Google Tensor G4" },
      {
        label: "Camera",
        value: "50MP Main + 48MP Ultra Wide + 48MP 5x Telephoto",
      },
      { label: "Battery", value: "4700mAh, 27W Fast Charging" },
      { label: "Storage", value: "128GB / 256GB / 512GB / 1TB" },
      { label: "Special", value: "Gemini AI, 7 Years Updates" },
    ],
    colors: [
      { name: "Obsidian", hex: "#2D2D2D" },
      { name: "Porcelain", hex: "#F0ECE4" },
      { name: "Hazel", hex: "#B5C4A1" },
      { name: "Rose Quartz", hex: "#E8C4C4" },
    ],
    finishes: [
      { name: "Obsidian", hex: "#2D2D2D", active: true },
      { name: "Porcelain", hex: "#F0ECE4" },
      { name: "Hazel", hex: "#B5C4A1" },
      { name: "Rose Quartz", hex: "#E8C4C4" },
    ],
    variants: [
      { name: "128GB", active: true },
      { name: "256GB" },
      { name: "512GB" },
      { name: "1TB" },
    ],
    reviews: [
      {
        _id: "r-p6-1",
        rating: 5,
        title: "Google AI features are unmatched",
        comment:
          "Magic Eraser, Best Take, Audio Magic Eraser — these aren't gimmicks, they're tools I use every day. The Gemini integration is seamless and the camera consistently beats my friend's iPhone in low light situations.",
        userName: "Chris Andersen",
        initials: "CA",
        verified: true,
      },
      {
        _id: "r-p6-2",
        rating: 5,
        title: "The camera phone king",
        comment:
          "I've used every Pixel since the 3 and each one keeps getting better. The 9 Pro takes the best photos I've ever seen from a phone, especially the new 48MP ultrawide. Video quality has finally caught up to Apple too.",
        userName: "Maya Williams",
        initials: "MW",
        verified: true,
      },
      {
        _id: "r-p6-3",
        rating: 4,
        title: "Almost perfect, but charging is slow",
        comment:
          "Love the clean Android experience and the AI features. The display and camera are both excellent. My only complaint is the 27W charging speed — at this price, 45W+ should be standard. Still the best overall Android experience.",
        userName: "Jason Reeves",
        initials: "JR",
        verified: true,
      },
    ],
  },
  {
    _id: "phone-7",
    brand: "Google",
    name: "Pixel 9",
    description:
      "Pure Google intelligence at a great price. Gemini Nano built-in for on-device AI.",
    price: 799,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/realme-xt/3.webp",
    ],
    category: "phones",
    subcategory: "flagship-phones",
    tags: ["5G", "Gemini Nano", "Pure Android", "7yr Updates"],
    countInStock: 30,
    rating: 4.6,
    numReviews: 876,
    longDescription:
      "The Pixel 9 delivers Google's best AI features at a more accessible price. With the Tensor G4 chip, Gemini Nano for on-device AI processing, and a capable 50MP + 48MP dual camera system, it punches well above its weight. The 6.3-inch OLED display with 120Hz refresh rate keeps everything smooth, and 7 years of updates means this phone will last.",
    specs: [
      { label: "Display", value: '6.3" OLED, 120Hz' },
      { label: "Processor", value: "Google Tensor G4" },
      { label: "Camera", value: "50MP Main + 48MP Ultra Wide" },
      { label: "Battery", value: "4700mAh, 27W Fast Charging" },
      { label: "Storage", value: "128GB / 256GB" },
      { label: "Special", value: "Gemini Nano, 7 Years Updates" },
    ],
    colors: [
      { name: "Obsidian", hex: "#2D2D2D" },
      { name: "Porcelain", hex: "#F0ECE4" },
      { name: "Wintergreen", hex: "#A8D5BA" },
      { name: "Peony", hex: "#F4B8C1" },
    ],
    finishes: [
      { name: "Obsidian", hex: "#2D2D2D", active: true },
      { name: "Porcelain", hex: "#F0ECE4" },
      { name: "Wintergreen", hex: "#A8D5BA" },
      { name: "Peony", hex: "#F4B8C1" },
    ],
    variants: [
      { name: "128GB", active: true },
      { name: "256GB" },
    ],
    reviews: [
      {
        _id: "r-p7-1",
        rating: 5,
        title: "Best mid-range phone on the market",
        comment:
          "You get the same Tensor G4 chip and most of the AI features as the Pro at $200 less. The dual camera is excellent — I rarely feel like I'm missing the telephoto lens. Photos are consistently fantastic.",
        userName: "Sophia Lee",
        initials: "SL",
        verified: true,
      },
      {
        _id: "r-p7-2",
        rating: 4,
        title: "Clean software, great camera",
        comment:
          "If you want a no-bloatware Android experience with an amazing camera, this is it. Gemini Nano handles smart replies and call screening on-device which is cool. Only wish it had the Pro's telephoto for zoom shots.",
        userName: "Tyler Mitchell",
        initials: "TM",
        verified: true,
      },
      {
        _id: "r-p7-3",
        rating: 5,
        title: "7 years of updates sealed the deal",
        comment:
          "Knowing I'll get software and security updates through 2031 made this an easy buy. The phone is fast, the camera is great, and the Peony color is gorgeous. Best value in smartphones right now.",
        userName: "Amanda Foster",
        initials: "AF",
        verified: true,
      },
    ],
  },
  {
    _id: "phone-8",
    brand: "OnePlus",
    name: "OnePlus 13",
    description:
      "Flagship performance with Hasselblad camera and 100W SUPERVOOC charging.",
    price: 899,
    badge: { text: "NEW", variant: "dark" },
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/3.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/oppo-k1/4.webp",
    ],
    category: "phones",
    subcategory: "flagship-phones",
    tags: ["5G", "Flagship", "Hasselblad", "100W Charging", "Snapdragon"],
    countInStock: 22,
    rating: 4.6,
    numReviews: 634,
    longDescription:
      "The OnePlus 13 is a flagship powerhouse that doesn't compromise. Equipped with the Snapdragon 8 Elite, a stunning 6.82-inch QHD+ LTPO AMOLED display, and a Hasselblad-tuned triple 50MP camera system, it delivers top-tier performance. The massive 6000mAh battery with 100W SUPERVOOC charging means you'll never be tethered to a wall — a full charge takes just 36 minutes.",
    specs: [
      {
        label: "Display",
        value: '6.82" QHD+ LTPO AMOLED, 120Hz',
      },
      { label: "Processor", value: "Snapdragon 8 Elite" },
      {
        label: "Camera",
        value: "50MP Main + 50MP Ultra Wide + 50MP 3x Telephoto (Hasselblad)",
      },
      { label: "Battery", value: "6000mAh, 100W SUPERVOOC" },
      { label: "Storage", value: "256GB / 512GB" },
      { label: "Special", value: "Hasselblad Camera, 100W Charging" },
    ],
    colors: [
      { name: "Midnight Ocean", hex: "#1A2744" },
      { name: "Arctic Dawn", hex: "#E8E6E0" },
      { name: "Black Eclipse", hex: "#1A1A1A" },
    ],
    finishes: [
      { name: "Midnight Ocean", hex: "#1A2744", active: true },
      { name: "Arctic Dawn", hex: "#E8E6E0" },
      { name: "Black Eclipse", hex: "#1A1A1A" },
    ],
    variants: [
      { name: "256GB", active: true },
      { name: "512GB" },
    ],
    reviews: [
      {
        _id: "r-p8-1",
        rating: 5,
        title: "100W charging is life-changing",
        comment:
          "I can go from 0 to 100% in about 35 minutes. That alone makes this phone worth it. But the Hasselblad camera tuning also produces beautiful, natural-looking colors — not the oversaturated mess you get from some competitors.",
        userName: "Derek Thompson",
        initials: "DT",
        verified: true,
      },
      {
        _id: "r-p8-2",
        rating: 4,
        title: "Flagship killer lives up to its name",
        comment:
          "At $899 you're getting Snapdragon 8 Elite, QHD+ AMOLED, triple 50MP cameras, and a 6000mAh battery. Try finding that combo from Samsung or Apple at this price. OxygenOS is clean and fast too.",
        userName: "Natasha Romanov",
        initials: "NR",
        verified: true,
      },
      {
        _id: "r-p8-3",
        rating: 5,
        title: "Battery champion",
        comment:
          "The 6000mAh battery paired with the efficient Snapdragon 8 Elite means I consistently get 2 days of moderate use on a single charge. When I do need to charge, 100W SUPERVOOC is ridiculously fast. Best battery phone I've owned.",
        userName: "Marco Gonzalez",
        initials: "MG",
        verified: true,
      },
    ],
  },
  {
    _id: "phone-9",
    brand: "Samsung",
    name: "Galaxy Z Fold 7",
    description:
      "The thinnest Galaxy Fold yet. 200MP camera, Galaxy AI on a massive 8-inch screen.",
    price: 1999,
    originalPrice: 2099,
    badge: { text: "-5%", variant: "accent" },
    image:
      "https://images.unsplash.com/photo-1722150635400-781fa4b5f40e?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1722150635400-781fa4b5f40e?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1722156163505-7d3d5d5dd85a?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1696041756125-257354c459a9?w=800&q=80&auto=format",
    ],
    category: "phones",
    subcategory: "foldable-phones",
    tags: ["5G", "Foldable", "Galaxy AI", "S Pen Compatible", "Flex Mode"],
    countInStock: 15,
    rating: 4.5,
    numReviews: 543,
    longDescription:
      "The Galaxy Z Fold 7 is the thinnest and most powerful Galaxy foldable yet. Unfold to reveal a stunning 8.0-inch QHD+ Dynamic AMOLED 2X inner display perfect for multitasking, or use the 6.5-inch cover screen for quick tasks. Powered by the Snapdragon 8 Elite and enhanced with Galaxy AI, it features a 200MP main camera and brings Flex Mode, multi-window apps, and desktop-class browsing to an ultra-slim foldable form factor.",
    specs: [
      {
        label: "Inner Display",
        value: '8.0" QHD+ Dynamic AMOLED 2X, 120Hz',
      },
      {
        label: "Cover Display",
        value: '6.5" HD+ Dynamic AMOLED 2X, 120Hz',
      },
      { label: "Processor", value: "Snapdragon 8 Elite" },
      {
        label: "Camera",
        value: "200MP Main + 12MP Ultra Wide + 10MP 3x Telephoto",
      },
      { label: "Battery", value: "4400mAh, 25W Fast Charging" },
      { label: "Special", value: "Flex Mode, Galaxy AI, IPX8" },
    ],
    colors: [
      { name: "Silver Shadow", hex: "#C0C0C0" },
      { name: "Navy", hex: "#1B2838" },
      { name: "Pink", hex: "#E8B4C8" },
    ],
    finishes: [
      { name: "Silver Shadow", hex: "#C0C0C0", active: true },
      { name: "Navy", hex: "#1B2838" },
      { name: "Pink", hex: "#E8B4C8" },
    ],
    variants: [
      { name: "256GB", active: true },
      { name: "512GB" },
      { name: "1TB" },
    ],
    reviews: [
      {
        _id: "r-p9-1",
        rating: 5,
        title: "Replaced my phone AND tablet",
        comment:
          "I sold my iPad Mini after getting the Z Fold 6. The inner screen is perfect for reading, watching videos, and running two apps side by side. It's lighter than previous Folds and the crease is barely noticeable now.",
        userName: "Richard Hayes",
        initials: "RH",
        verified: true,
      },
      {
        _id: "r-p9-2",
        rating: 4,
        title: "Incredible tech, premium price",
        comment:
          "The multitasking on the big screen is unmatched. I can have Slack, Chrome, and my calendar all visible at once. Galaxy AI translation works great on the big display too. It's expensive, but if you use it for work, it pays for itself.",
        userName: "Stephanie Wu",
        initials: "SW",
        verified: true,
      },
      {
        _id: "r-p9-3",
        rating: 4,
        title: "Best foldable yet, but battery could be better",
        comment:
          "The build quality is excellent and it feels more durable than my old Z Fold 4. Galaxy AI features are useful on the big screen. My only concern is the 4400mAh battery — with the two displays, I sometimes need a top-up by evening.",
        userName: "Omar Sayed",
        initials: "OS",
        verified: true,
      },
    ],
  },
  {
    _id: "phone-10",
    brand: "Samsung",
    name: "Galaxy Z Flip 6",
    description:
      "Compact, stylish, and smart. The flip phone reimagined with Galaxy AI.",
    price: 1099,
    image:
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/1.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/2.webp",
      "https://cdn.dummyjson.com/product-images/smartphones/vivo-x21/3.webp",
    ],
    category: "phones",
    subcategory: "foldable-phones",
    tags: ["5G", "Foldable", "Galaxy AI", "FlexWindow", "Compact"],
    countInStock: 18,
    rating: 4.4,
    numReviews: 412,
    longDescription:
      "The Galaxy Z Flip 6 combines style with substance in a pocketable flip form factor. The 3.4-inch FlexWindow cover display lets you check notifications, take selfies, and use widgets without opening the phone. Flip it open to reveal a 6.7-inch Dynamic AMOLED display. Powered by Snapdragon 8 Gen 3 with Galaxy AI, it's as smart as it is stylish.",
    specs: [
      {
        label: "Main Display",
        value: '6.7" FHD+ Dynamic AMOLED 2X, 120Hz',
      },
      {
        label: "Cover Display",
        value: '3.4" Super AMOLED FlexWindow',
      },
      { label: "Processor", value: "Snapdragon 8 Gen 3" },
      { label: "Camera", value: "50MP Main + 12MP Ultra Wide" },
      { label: "Battery", value: "4000mAh, 25W Fast Charging" },
      { label: "Special", value: "FlexWindow, Flex Mode, Galaxy AI" },
    ],
    colors: [
      { name: "Blue", hex: "#4A6FA5" },
      { name: "Silver Shadow", hex: "#C0C0C0" },
      { name: "Yellow", hex: "#F4D35E" },
      { name: "Mint", hex: "#B8D8C8" },
    ],
    finishes: [
      { name: "Blue", hex: "#4A6FA5", active: true },
      { name: "Silver Shadow", hex: "#C0C0C0" },
      { name: "Yellow", hex: "#F4D35E" },
      { name: "Mint", hex: "#B8D8C8" },
    ],
    variants: [
      { name: "256GB", active: true },
      { name: "512GB" },
    ],
    reviews: [
      {
        _id: "r-p10-1",
        rating: 5,
        title: "Love the flip form factor",
        comment:
          "There's something satisfying about flipping your phone shut to end a call. The FlexWindow is actually useful now — I can reply to messages, control music, and take selfies without opening it. Turns heads everywhere I go.",
        userName: "Jessica Huang",
        initials: "JH",
        verified: true,
      },
      {
        _id: "r-p10-2",
        rating: 4,
        title: "Stylish and capable",
        comment:
          "The Z Flip 6 is the most fashionable phone you can buy. It fits in tiny pockets and bags. Camera quality is solid and the Galaxy AI features are nice. Battery life is decent but won't win any endurance tests.",
        userName: "Ryan Cooper",
        initials: "RC",
        verified: true,
      },
      {
        _id: "r-p10-3",
        rating: 4,
        title: "Fun phone with some trade-offs",
        comment:
          "Great for social media — FlexCam mode is perfect for hands-free TikTok and Instagram. The cover display widgets are handy for quick info. Just know you're trading some battery life and camera versatility for the cool flip factor.",
        userName: "Isabelle Martin",
        initials: "IM",
        verified: true,
      },
    ],
  },
];

export const tablets: ProductDetail[] = [
  {
    _id: "tablet-1",
    brand: "Apple",
    name: "iPad Pro M5 13-inch",
    description:
      "The thinnest, most powerful iPad ever with the M5 chip and Ultra Retina XDR display.",
    price: 1299,
    badge: { text: "BEST SELLER", variant: "accent" },
    image:
      "https://images.unsplash.com/photo-1661340272675-f6829791246e?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1661340272675-f6829791246e?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1659035260002-11d486d6e9f5?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1621750291306-c9afba316115?w=800&q=80&auto=format",
    ],
    category: "tablets",
    subcategory: "premium-tablets",
    tags: ["M5 Chip", "OLED", "Apple Pencil Pro", "Thunderbolt", "Face ID"],
    countInStock: 20,
    rating: 4.9,
    numReviews: 1876,
    longDescription:
      "The iPad Pro M5 13-inch is the most advanced tablet ever made. At just 5.1mm thin, it houses the incredible M5 chip, a breathtaking 13-inch Ultra Retina XDR OLED display with tandem technology, and support for Apple Pencil Pro with haptic feedback. Thunderbolt/USB 4 connectivity and all-day battery life make it a true laptop replacement for creative professionals.",
    specs: [
      {
        label: "Display",
        value: '13" Ultra Retina XDR OLED, 120Hz ProMotion',
      },
      { label: "Chip", value: "Apple M5" },
      { label: "Camera", value: "12MP Ultra Wide (Landscape)" },
      { label: "Connectivity", value: "Thunderbolt / USB 4" },
      { label: "Storage", value: "256GB / 512GB / 1TB / 2TB" },
      { label: "Special", value: "Apple Pencil Pro, Face ID, 5.1mm thin" },
    ],
    colors: [
      { name: "Space Black", hex: "#2E2E2E" },
      { name: "Silver", hex: "#E3E3E3" },
    ],
    finishes: [
      { name: "Space Black", hex: "#2E2E2E", active: true },
      { name: "Silver", hex: "#E3E3E3" },
    ],
    variants: [
      { name: "256GB", active: true },
      { name: "512GB" },
      { name: "1TB" },
      { name: "2TB" },
    ],
    reviews: [
      {
        _id: "r-t1-1",
        rating: 5,
        title: "Replaced my MacBook for illustration work",
        comment:
          "The OLED display is jaw-dropping — colors are so accurate that I trust it for final proofing. Apple Pencil Pro with the haptic squeeze gesture speeds up my Procreate workflow dramatically. The M4 handles 50+ layer files without breaking a sweat.",
        userName: "Claire Dubois",
        initials: "CD",
        verified: true,
      },
      {
        _id: "r-t1-2",
        rating: 5,
        title: "The display alone justifies the price",
        comment:
          "Coming from the 2022 iPad Pro, the tandem OLED upgrade is massive. HDR content looks incredible, the blacks are truly black, and it gets bright enough for outdoor use. Also, this thing is absurdly thin and light for a 13-inch display.",
        userName: "Michael Torres",
        initials: "MT",
        verified: true,
      },
      {
        _id: "r-t1-3",
        rating: 4,
        title: "Incredible hardware, iPadOS holds it back",
        comment:
          "The M4 chip is more powerful than most laptops. The display is the best I've seen on any device. Apple Pencil Pro is fantastic. My only frustration is that iPadOS still doesn't let me use it like a full computer — file management and multitasking could be better.",
        userName: "Andrew Phillips",
        initials: "AP",
        verified: true,
      },
    ],
  },
  {
    _id: "tablet-2",
    brand: "Apple",
    name: "iPad Pro M5 11-inch",
    description:
      "Pro performance in a portable size. M5 chip with Ultra Retina XDR OLED display.",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1659035260002-11d486d6e9f5?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1659035260002-11d486d6e9f5?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1661340272675-f6829791246e?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1691599703441-58bee2410f42?w=800&q=80&auto=format",
    ],
    category: "tablets",
    subcategory: "premium-tablets",
    tags: ["M5 Chip", "OLED", "Apple Pencil Pro", "Thunderbolt", "Face ID"],
    countInStock: 25,
    rating: 4.8,
    numReviews: 1423,
    longDescription:
      "The iPad Pro M5 11-inch packs the same incredible M5 chip and Ultra Retina XDR OLED display technology into a more portable package. At just 5.3mm thin, it's perfect for creatives on the go who need pro-level performance without the larger footprint. Full Apple Pencil Pro support and Thunderbolt connectivity make it a versatile creative tool.",
    specs: [
      {
        label: "Display",
        value: '11" Ultra Retina XDR OLED, 120Hz ProMotion',
      },
      { label: "Chip", value: "Apple M5" },
      { label: "Camera", value: "12MP Ultra Wide (Landscape)" },
      { label: "Connectivity", value: "Thunderbolt / USB 4" },
      { label: "Storage", value: "256GB / 512GB / 1TB / 2TB" },
      { label: "Special", value: "Apple Pencil Pro, Face ID, 5.3mm thin" },
    ],
    colors: [
      { name: "Space Black", hex: "#2E2E2E" },
      { name: "Silver", hex: "#E3E3E3" },
    ],
    finishes: [
      { name: "Space Black", hex: "#2E2E2E", active: true },
      { name: "Silver", hex: "#E3E3E3" },
    ],
    variants: [
      { name: "256GB", active: true },
      { name: "512GB" },
      { name: "1TB" },
      { name: "2TB" },
    ],
    reviews: [
      {
        _id: "r-t2-1",
        rating: 5,
        title: "Perfect travel companion for creative work",
        comment:
          "I take this everywhere. The 11-inch size fits perfectly in my bag and the OLED display makes editing photos on the go a pleasure. The M4 handles Lightroom and Affinity Photo without any lag. Best portable creative device I've owned.",
        userName: "Elena Vasquez",
        initials: "EV",
        verified: true,
      },
      {
        _id: "r-t2-2",
        rating: 5,
        title: "Better than most laptops",
        comment:
          "With the Magic Keyboard attached, this is a full work machine. The display quality is outstanding — OLED makes everything look premium. It's thin, light, and powerful enough for video editing in Final Cut Pro. No regrets choosing this over a MacBook Air.",
        userName: "Nathan Brooks",
        initials: "NB",
        verified: true,
      },
      {
        _id: "r-t2-3",
        rating: 4,
        title: "Wish I went with the 13-inch",
        comment:
          "The 11-inch Pro is an incredible device, don't get me wrong. Performance is identical to the bigger model and the display is gorgeous. But for sketching and split-screen multitasking, I find myself wishing I had more screen real estate. If portability is your priority though, this is the one.",
        userName: "Olivia Chang",
        initials: "OC",
        verified: true,
      },
    ],
  },
  {
    _id: "tablet-3",
    brand: "Apple",
    name: "iPad Air M3",
    description:
      "Powerful performance meets versatility. M3 chip in a sleek, colorful design.",
    price: 599,
    originalPrice: 699,
    badge: { text: "-14%", variant: "accent" },
    image:
      "https://images.unsplash.com/photo-1590252973641-1352f1a8885e?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1590252973641-1352f1a8885e?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1643509098169-8b810b1dc991?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1703756847822-7e627d177083?w=800&q=80&auto=format",
    ],
    category: "tablets",
    subcategory: "mid-range-tablets",
    tags: ["M3 Chip", "Apple Pencil Pro", "USB-C", "Liquid Retina"],
    countInStock: 35,
    rating: 4.7,
    numReviews: 1098,
    longDescription:
      "The iPad Air M3 brings serious performance to the Air lineup. Available in 11-inch and 13-inch sizes, it features the M3 chip, a beautiful Liquid Retina display, and support for Apple Pencil Pro. With USB-C connectivity, all-day battery life, and compatibility with the Magic Keyboard, it's the perfect balance of power and affordability for students, creatives, and professionals alike.",
    specs: [
      {
        label: "Display",
        value: '11" / 13" Liquid Retina, 60Hz',
      },
      { label: "Chip", value: "Apple M3" },
      { label: "Camera", value: "12MP Wide + 12MP Ultra Wide (Front)" },
      { label: "Connectivity", value: "USB-C" },
      { label: "Storage", value: "128GB / 256GB / 512GB / 1TB" },
      { label: "Special", value: "Apple Pencil Pro, Touch ID" },
    ],
    colors: [
      { name: "Starlight", hex: "#F0E6D3" },
      { name: "Space Gray", hex: "#6E6E73" },
      { name: "Purple", hex: "#B8A9C9" },
      { name: "Blue", hex: "#5B7BA5" },
    ],
    finishes: [
      { name: "Starlight", hex: "#F0E6D3", active: true },
      { name: "Space Gray", hex: "#6E6E73" },
      { name: "Purple", hex: "#B8A9C9" },
      { name: "Blue", hex: "#5B7BA5" },
    ],
    variants: [
      { name: "128GB", active: true },
      { name: "256GB" },
      { name: "512GB" },
      { name: "1TB" },
    ],
    reviews: [
      {
        _id: "r-t3-1",
        rating: 5,
        title: "Perfect for college students",
        comment:
          "I use this for notes with Apple Pencil Pro, textbook reading, and light video editing. The M3 chip handles everything I throw at it without a stutter. At $599 on sale, it's an incredible value — you really don't need the Pro unless you're a professional artist.",
        userName: "Zoe Anderson",
        initials: "ZA",
        verified: true,
      },
      {
        _id: "r-t3-2",
        rating: 5,
        title: "Best tablet for the money",
        comment:
          "The Liquid Retina display is vibrant and sharp. M3 chip is overkill for most tasks — this thing will last me years. Apple Pencil Pro support at this price point is a huge win. Couldn't be happier with my purchase.",
        userName: "Ethan Moore",
        initials: "EM",
        verified: true,
      },
      {
        _id: "r-t3-3",
        rating: 4,
        title: "Great device, 60Hz is the only downside",
        comment:
          "If you've never used a 120Hz display, you won't notice. But coming from an iPad Pro, the 60Hz Liquid Retina feels slightly less smooth when scrolling. That said, the M3 performance is excellent and the price is right. The Purple color is stunning.",
        userName: "Lily Chen",
        initials: "LC",
        verified: true,
      },
    ],
  },
  {
    _id: "tablet-4",
    brand: "Samsung",
    name: "Galaxy Tab S10 Ultra",
    description:
      "The ultimate Android tablet with a massive 14.6-inch display and S Pen included.",
    price: 1199,
    image:
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/4.webp",
    ],
    category: "tablets",
    subcategory: "premium-tablets",
    tags: ["S Pen", "DeX Mode", "AMOLED", "14.6 inch", "Snapdragon"],
    countInStock: 18,
    rating: 4.7,
    numReviews: 876,
    longDescription:
      "The Galaxy Tab S10 Ultra is the largest and most powerful Android tablet available. Its massive 14.6-inch Dynamic AMOLED 2X display is perfect for multitasking, drawing, and media consumption. Powered by the Snapdragon 8 Gen 3, with the S Pen included and Samsung DeX mode for a desktop experience, it blurs the line between tablet and laptop. The 11200mAh battery ensures all-day productivity.",
    specs: [
      {
        label: "Display",
        value: '14.6" Dynamic AMOLED 2X, 120Hz',
      },
      { label: "Processor", value: "Snapdragon 8 Gen 3" },
      {
        label: "Camera",
        value: "13MP + 8MP (Rear), 12MP + 12MP (Front)",
      },
      { label: "Battery", value: "11200mAh, 45W Fast Charging" },
      { label: "Storage", value: "256GB / 512GB / 1TB" },
      { label: "Special", value: "S Pen included, DeX Mode, IP68" },
    ],
    colors: [
      { name: "Graphite", hex: "#3C3C3C" },
      { name: "Moonstone Gray", hex: "#A8A8A8" },
    ],
    finishes: [
      { name: "Graphite", hex: "#3C3C3C", active: true },
      { name: "Moonstone Gray", hex: "#A8A8A8" },
    ],
    variants: [
      { name: "256GB", active: true },
      { name: "512GB" },
      { name: "1TB" },
    ],
    reviews: [
      {
        _id: "r-t4-1",
        rating: 5,
        title: "The big screen makes all the difference",
        comment:
          "14.6 inches of AMOLED is absolutely stunning for watching movies and drawing. The S Pen latency is so low it feels like writing on paper. DeX mode with a keyboard turns this into a legitimate laptop replacement for my workflow.",
        userName: "Patrick O'Neill",
        initials: "PO",
        verified: true,
      },
      {
        _id: "r-t4-2",
        rating: 5,
        title: "Best tablet for multitasking",
        comment:
          "I run three apps side by side easily on this display. The 11200mAh battery lasts me 2 full workdays of moderate use. Snapdragon 8 Gen 3 keeps everything buttery smooth. Samsung finally nailed the tablet experience.",
        userName: "Diana Lawson",
        initials: "DL",
        verified: true,
      },
      {
        _id: "r-t4-3",
        rating: 4,
        title: "Incredible hardware, but it's huge",
        comment:
          "The display and performance are top-notch. Drawing with the S Pen on this massive screen is a joy. My only complaint is the size — it barely fits in my bag and it's hard to use on a crowded train. If you mostly use it at home or office, it's perfect.",
        userName: "Sam Whitfield",
        initials: "SW",
        verified: true,
      },
    ],
  },
  {
    _id: "tablet-5",
    brand: "Samsung",
    name: "Galaxy Tab S10+",
    description:
      "Premium Android tablet experience with S Pen and stunning AMOLED display.",
    price: 999,
    image:
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-white/4.webp",
    ],
    category: "tablets",
    subcategory: "premium-tablets",
    tags: ["S Pen", "DeX Mode", "AMOLED", "12.4 inch", "Snapdragon"],
    countInStock: 22,
    rating: 4.6,
    numReviews: 654,
    longDescription:
      "The Galaxy Tab S10+ strikes the perfect balance between screen size and portability. Its 12.4-inch Dynamic AMOLED 2X display delivers vivid colors and deep blacks, while the Snapdragon 8 Gen 3 provides smooth performance for any task. With the S Pen included, DeX mode for desktop productivity, and a 10090mAh battery, it's a versatile powerhouse for work and play.",
    specs: [
      {
        label: "Display",
        value: '12.4" Dynamic AMOLED 2X, 120Hz',
      },
      { label: "Processor", value: "Snapdragon 8 Gen 3" },
      {
        label: "Camera",
        value: "13MP + 8MP (Rear), 12MP + 12MP (Front)",
      },
      { label: "Battery", value: "10090mAh, 45W Fast Charging" },
      { label: "Storage", value: "256GB / 512GB" },
      { label: "Special", value: "S Pen included, DeX Mode, IP68" },
    ],
    colors: [
      { name: "Graphite", hex: "#3C3C3C" },
      { name: "Moonstone Gray", hex: "#A8A8A8" },
    ],
    finishes: [
      { name: "Graphite", hex: "#3C3C3C", active: true },
      { name: "Moonstone Gray", hex: "#A8A8A8" },
    ],
    variants: [
      { name: "256GB", active: true },
      { name: "512GB" },
    ],
    reviews: [
      {
        _id: "r-t5-1",
        rating: 5,
        title: "Sweet spot for size and portability",
        comment:
          "12.4 inches is the perfect tablet size in my opinion. Big enough for split-screen work and media, small enough to carry comfortably. The AMOLED display is gorgeous and the S Pen is great for annotating documents.",
        userName: "Victoria Reed",
        initials: "VR",
        verified: true,
      },
      {
        _id: "r-t5-2",
        rating: 4,
        title: "Great all-around tablet",
        comment:
          "Solid performance, beautiful display, good battery life. I use it daily for Netflix, note-taking, and light photo editing. DeX mode is handy when I need to get real work done. Only wish Samsung offered more color options.",
        userName: "Carlos Mendez",
        initials: "CM",
        verified: true,
      },
      {
        _id: "r-t5-3",
        rating: 5,
        title: "Best Android tablet for the price",
        comment:
          "At $999 you get a premium AMOLED display, flagship processor, S Pen, and all-day battery. The Ultra is bigger but the Tab S10+ is more practical for daily carry. Samsung's tablet ecosystem with DeX and multi-window is genuinely useful.",
        userName: "Angela Wright",
        initials: "AW",
        verified: true,
      },
    ],
  },
  {
    _id: "tablet-6",
    brand: "Apple",
    name: "iPad Mini 7",
    description:
      "Big performance in a mini package. A17 Pro chip with Apple Pencil Pro support.",
    price: 499,
    badge: { text: "NEW", variant: "dark" },
    image:
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/4.webp",
    ],
    category: "tablets",
    subcategory: "compact-tablets",
    tags: ["A17 Pro", "Apple Pencil Pro", "USB-C", "Wi-Fi 6E", "Portable"],
    countInStock: 30,
    rating: 4.6,
    numReviews: 432,
    longDescription:
      "The iPad Mini 7 packs incredible power into the most portable iPad form factor. With the A17 Pro chip, an 8.3-inch Liquid Retina display, and Apple Pencil Pro support, it's a capable creative and productivity tool that fits in one hand. Wi-Fi 6E keeps you connected at blazing speeds, and USB-C makes it compatible with a wide range of accessories.",
    specs: [
      { label: "Display", value: '8.3" Liquid Retina, 60Hz' },
      { label: "Chip", value: "A17 Pro" },
      { label: "Camera", value: "12MP Wide + 12MP Ultra Wide (Front)" },
      { label: "Connectivity", value: "USB-C, Wi-Fi 6E" },
      { label: "Storage", value: "128GB / 256GB / 512GB" },
      { label: "Special", value: "Apple Pencil Pro, Touch ID" },
    ],
    colors: [
      { name: "Starlight", hex: "#F0E6D3" },
      { name: "Space Gray", hex: "#6E6E73" },
      { name: "Purple", hex: "#B8A9C9" },
      { name: "Blue", hex: "#5B7BA5" },
    ],
    finishes: [
      { name: "Starlight", hex: "#F0E6D3", active: true },
      { name: "Space Gray", hex: "#6E6E73" },
      { name: "Purple", hex: "#B8A9C9" },
      { name: "Blue", hex: "#5B7BA5" },
    ],
    variants: [
      { name: "128GB", active: true },
      { name: "256GB" },
      { name: "512GB" },
    ],
    reviews: [
      {
        _id: "r-t6-1",
        rating: 5,
        title: "The perfect e-reader and note-taker",
        comment:
          "I bought this primarily for reading and it's perfect. The 8.3-inch screen is ideal — big enough to read comfortably, small enough to hold for hours. The A17 Pro chip is overkill for my needs but means this thing will be fast for years.",
        userName: "Gregory Hart",
        initials: "GH",
        verified: true,
      },
      {
        _id: "r-t6-2",
        rating: 4,
        title: "Great mini tablet, wish it had 120Hz",
        comment:
          "The iPad Mini 7 is a joy to use. It fits in a jacket pocket, the A17 Pro handles games beautifully, and Apple Pencil Pro support makes it a great pocket sketchpad. My only wish is for ProMotion — at 60Hz it feels a step behind the Pro models.",
        userName: "Megan Sullivan",
        initials: "MS",
        verified: true,
      },
      {
        _id: "r-t6-3",
        rating: 5,
        title: "Surprisingly capable for its size",
        comment:
          "Don't let the small size fool you. This thing runs console-quality games, handles multitasking well, and the Apple Pencil Pro turns it into a pocket notebook. USB-C and Wi-Fi 6E are nice modern touches. Absolutely love the Blue color.",
        userName: "Jordan Blake",
        initials: "JB",
        verified: true,
      },
    ],
  },
];
