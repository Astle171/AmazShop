import type { ProductDetail } from "@/types";

const CDN = "https://cdn.dummyjson.com/product-images";

export const laptops: ProductDetail[] = [
  {
    _id: "laptop-1",
    brand: "Apple",
    name: "MacBook Pro 16-inch M4 Pro",
    description:
      "The most advanced Mac laptop for demanding pro workflows.",
    longDescription:
      "Supercharged by M4 Pro with 14-core CPU and 20-core GPU, the MacBook Pro 16-inch delivers unprecedented performance. With 24GB unified memory, a stunning 16.2-inch Liquid Retina XDR display, 24-hour battery life, and Thunderbolt 5 connectivity, it's the ultimate pro machine.",
    price: 2499,
    badge: { text: "PRO", variant: "dark" },
    image: "https://images.unsplash.com/photo-1678059285291-c22302c018f2?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1678059285291-c22302c018f2?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1649394233584-217c46cb9612?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80&auto=format",
    ],
    category: "laptops",
    subcategory: "pro-laptop",
    tags: ["M-series", "Pro", "Creator", "Thunderbolt 5"],
    countInStock: 15,
    rating: 4.9,
    numReviews: 2341,
    specs: [
      { label: "Display", value: '16.2" Liquid Retina XDR, 3456×2234' },
      { label: "Chip", value: "Apple M4 Pro (14-core CPU, 20-core GPU)" },
      { label: "Memory", value: "24GB Unified Memory" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Battery", value: "Up to 24 hours" },
      {
        label: "Ports",
        value: "3x Thunderbolt 5, HDMI, SD card, MagSafe",
      },
    ],
    colors: [
      { name: "Space Black", hex: "#1D1D1F" },
      { name: "Silver", hex: "#E3E3E3" },
    ],
    finishes: [
      { name: "Space Black", hex: "#1D1D1F", active: true },
      { name: "Silver", hex: "#E3E3E3" },
    ],
    variants: [
      { name: "M4 Pro", active: true },
      { name: "M4 Max" },
    ],
    reviews: [
      {
        _id: "r-l1-1",
        rating: 5,
        title: "A beast of a machine",
        comment:
          "Compiling large codebases is effortless. The M4 Pro absolutely flies through everything I throw at it — Xcode builds, Docker containers, you name it.",
        userName: "DevMarcus",
        initials: "DM",
        verified: true,
      },
      {
        _id: "r-l1-2",
        rating: 5,
        title: "Best display on any laptop",
        comment:
          "The Liquid Retina XDR panel is unreal. Color accuracy is flawless for photo and video editing. HDR content looks stunning.",
        userName: "SarahLens",
        initials: "SL",
        verified: true,
      },
      {
        _id: "r-l1-3",
        rating: 4,
        title: "Battery lasts forever",
        comment:
          "I consistently get 18–20 hours of mixed use. The only reason it's not 5 stars is the base storage is still only 512GB at this price.",
        userName: "TechNomad",
        initials: "TN",
        verified: true,
      },
    ],
  },
  {
    _id: "laptop-2",
    brand: "Apple",
    name: "MacBook Pro 14-inch M5",
    description:
      "Pro-level performance in a portable 14-inch form factor, powered by M5.",
    longDescription:
      "The MacBook Pro 14-inch with M5 brings pro performance to a more accessible price. Featuring a 14.2-inch Liquid Retina XDR display, 10-core CPU, 10-core GPU, and 16GB unified memory, it handles demanding creative workflows while delivering up to 22 hours of battery life.",
    price: 1599,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1651746817904-abc832733480?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1678059285291-c22302c018f2?w=800&q=80&auto=format",
    ],
    category: "laptops",
    subcategory: "pro-laptop",
    tags: ["M-series", "Pro", "Portable"],
    countInStock: 22,
    rating: 4.8,
    numReviews: 1876,
    specs: [
      { label: "Display", value: '14.2" Liquid Retina XDR, 3024×1964' },
      { label: "Chip", value: "Apple M5 (10-core CPU, 10-core GPU)" },
      { label: "Memory", value: "16GB Unified Memory" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Battery", value: "Up to 22 hours" },
      {
        label: "Ports",
        value: "3x Thunderbolt 4, HDMI, SD card, MagSafe",
      },
    ],
    colors: [
      { name: "Space Black", hex: "#1D1D1F" },
      { name: "Silver", hex: "#E3E3E3" },
    ],
    finishes: [
      { name: "Space Black", hex: "#1D1D1F", active: true },
      { name: "Silver", hex: "#E3E3E3" },
    ],
    variants: [
      { name: "M5", active: true },
    ],
    reviews: [
      {
        _id: "r-l2-1",
        rating: 5,
        title: "Perfect balance of power and portability",
        comment:
          "Upgraded from an M1 Pro and the jump is noticeable. The M5 handles 4K video editing in Final Cut without breaking a sweat.",
        userName: "EditPro_Jay",
        initials: "EJ",
        verified: true,
      },
      {
        _id: "r-l2-2",
        rating: 5,
        title: "The display is gorgeous",
        comment:
          "XDR brightness for HDR content is a game-changer. Watching Dolby Vision movies on this screen is incredible.",
        userName: "PixelPerfect",
        initials: "PP",
        verified: true,
      },
      {
        _id: "r-l2-3",
        rating: 4,
        title: "Great but wish it had more RAM",
        comment:
          "16GB is fine for most tasks but I occasionally hit limits with large Figma files and multiple Chrome tabs. Still a fantastic machine overall. The M5 chip handles it gracefully.",
        userName: "DesignDave",
        initials: "DD",
        verified: true,
      },
    ],
  },
  {
    _id: "laptop-3",
    brand: "Apple",
    name: "MacBook Air 15-inch M4",
    description: "The world's thinnest 15-inch laptop, now with M4.",
    longDescription:
      "The MacBook Air 15-inch combines a spacious 15.3-inch Liquid Retina display with the M4 chip in an impossibly thin fanless design. With 16GB unified memory, all-day battery life, and a weight of just 1.51kg, it redefines what a thin-and-light laptop can do.",
    price: 1299,
    badge: { text: "POPULAR", variant: "accent" },
    image: `${CDN}/laptops/huawei-matebook-x-pro/thumbnail.webp`,
    images: [
      `${CDN}/laptops/huawei-matebook-x-pro/1.webp`,
      `${CDN}/laptops/huawei-matebook-x-pro/2.webp`,
      `${CDN}/laptops/huawei-matebook-x-pro/3.webp`,
    ],
    category: "laptops",
    subcategory: "ultrabook",
    tags: ["M-series", "Ultrabook", "Fanless", "Lightweight"],
    countInStock: 30,
    rating: 4.8,
    numReviews: 1654,
    specs: [
      { label: "Display", value: '15.3" Liquid Retina, 2880×1864' },
      { label: "Chip", value: "Apple M4 (10-core CPU, 10-core GPU)" },
      { label: "Memory", value: "16GB Unified Memory" },
      { label: "Storage", value: "256GB SSD" },
      { label: "Battery", value: "Up to 18 hours" },
      { label: "Design", value: "Fanless, 11.5mm thin, 1.51kg" },
    ],
    colors: [
      { name: "Midnight", hex: "#1E2533" },
      { name: "Starlight", hex: "#F0E4D3" },
      { name: "Space Gray", hex: "#7D7E80" },
      { name: "Silver", hex: "#E3E3E3" },
    ],
    finishes: [
      { name: "Midnight", hex: "#1E2533", active: true },
      { name: "Starlight", hex: "#F0E4D3" },
      { name: "Space Gray", hex: "#7D7E80" },
      { name: "Silver", hex: "#E3E3E3" },
    ],
    variants: [
      { name: "M4", active: true },
    ],
    reviews: [
      {
        _id: "r-l3-1",
        rating: 5,
        title: "Big screen, no fan noise",
        comment:
          "Coming from a 13-inch, the 15-inch screen is a revelation. And it's dead silent — no fans at all. Perfect for coffee shop work.",
        userName: "QuietCoder",
        initials: "QC",
        verified: true,
      },
      {
        _id: "r-l3-2",
        rating: 5,
        title: "Best laptop for students and creatives",
        comment:
          "Incredible value at this price. The big display is great for multitasking and the battery easily lasts a full day of classes.",
        userName: "ArtStudentKim",
        initials: "AK",
        verified: true,
      },
      {
        _id: "r-l3-3",
        rating: 4,
        title: "Love it, but 256GB is tight",
        comment:
          "The base storage fills up fast if you have a lot of apps and media. Wish Apple started at 512GB. Otherwise it's a phenomenal machine.",
        userName: "MinimalSetup",
        initials: "MS",
        verified: false,
      },
    ],
  },
  {
    _id: "laptop-4",
    brand: "Apple",
    name: "MacBook Air 13-inch M4",
    description:
      "The everyday laptop that does everything. Light, fast, and built to last all day.",
    longDescription:
      "The MacBook Air 13-inch with M4 delivers the perfect blend of performance and portability. Weighing just 1.24kg with a stunning 13.6-inch Liquid Retina display, 16GB unified memory, and up to 18 hours of battery life, it's the ideal laptop for everything from browsing to content creation.",
    price: 1099,
    image: `${CDN}/laptops/lenovo-yoga-920/thumbnail.webp`,
    images: [
      `${CDN}/laptops/lenovo-yoga-920/1.webp`,
      `${CDN}/laptops/lenovo-yoga-920/2.webp`,
      `${CDN}/laptops/lenovo-yoga-920/3.webp`,
    ],
    category: "laptops",
    subcategory: "ultrabook",
    tags: ["M-series", "Ultrabook", "Fanless", "Lightweight"],
    countInStock: 40,
    rating: 4.7,
    numReviews: 2103,
    specs: [
      { label: "Display", value: '13.6" Liquid Retina, 2560×1664' },
      { label: "Chip", value: "Apple M4 (10-core CPU, 10-core GPU)" },
      { label: "Memory", value: "16GB Unified Memory" },
      { label: "Storage", value: "256GB SSD" },
      { label: "Battery", value: "Up to 18 hours" },
      { label: "Weight", value: "1.24kg" },
    ],
    colors: [
      { name: "Midnight", hex: "#1E2533" },
      { name: "Starlight", hex: "#F0E4D3" },
      { name: "Space Gray", hex: "#7D7E80" },
      { name: "Silver", hex: "#E3E3E3" },
    ],
    finishes: [
      { name: "Midnight", hex: "#1E2533", active: true },
      { name: "Starlight", hex: "#F0E4D3" },
      { name: "Space Gray", hex: "#7D7E80" },
      { name: "Silver", hex: "#E3E3E3" },
    ],
    variants: [
      { name: "M4", active: true },
    ],
    reviews: [
      {
        _id: "r-l4-1",
        rating: 5,
        title: "Lightest laptop I've ever owned",
        comment:
          "At 1.24kg I barely notice it in my bag. Performance is more than enough for web dev, writing, and everyday tasks.",
        userName: "NomadNate",
        initials: "NN",
        verified: true,
      },
      {
        _id: "r-l4-2",
        rating: 4,
        title: "Solid everyday machine",
        comment:
          "Handles everything I need — email, Slack, VS Code, and even some light Photoshop work. Battery is outstanding.",
        userName: "CasualCreator",
        initials: "CC",
        verified: true,
      },
      {
        _id: "r-l4-3",
        rating: 5,
        title: "Best value in the Mac lineup",
        comment:
          "This is the Mac to buy for most people. M4 is a massive upgrade from M1/M2 and the price is very competitive.",
        userName: "SmartBuyer",
        initials: "SB",
        verified: true,
      },
    ],
  },
  {
    _id: "laptop-5",
    brand: "Dell",
    name: "XPS 16 (2025)",
    description:
      "Stunning 3.8K OLED display meets Intel Core Ultra 9 performance.",
    longDescription:
      "The Dell XPS 16 pushes boundaries with a breathtaking 16.3-inch 3.8K OLED display, Intel Core Ultra 9 288V processor, and 32GB of LPDDR5x memory. Wrapped in a seamless aluminum-and-glass design with edge-to-edge keyboard, it's as beautiful as it is powerful.",
    price: 1699,
    originalPrice: 1899,
    badge: { text: "-11%", variant: "accent" },
    image: `${CDN}/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp`,
    images: [
      `${CDN}/laptops/new-dell-xps-13-9300-laptop/1.webp`,
      `${CDN}/laptops/new-dell-xps-13-9300-laptop/2.webp`,
      `${CDN}/laptops/new-dell-xps-13-9300-laptop/3.webp`,
    ],
    category: "laptops",
    subcategory: "ultrabook",
    tags: ["OLED", "Intel Core Ultra", "Creator", "Premium"],
    countInStock: 18,
    rating: 4.6,
    numReviews: 765,
    specs: [
      { label: "Display", value: '16.3" OLED 3840×2400, 120Hz' },
      { label: "Processor", value: "Intel Core Ultra 9 288V" },
      { label: "Memory", value: "32GB LPDDR5x" },
      { label: "Storage", value: "1TB SSD" },
      { label: "Graphics", value: "Intel Arc (integrated)" },
      { label: "Ports", value: "3x Thunderbolt 4, SD card" },
    ],
    colors: [
      { name: "Platinum Silver", hex: "#C0C0C0" },
      { name: "Graphite", hex: "#474747" },
    ],
    finishes: [
      { name: "Platinum Silver", hex: "#C0C0C0", active: true },
      { name: "Graphite", hex: "#474747" },
    ],
    variants: [
      { name: "Core Ultra 7", active: false },
      { name: "Core Ultra 9", active: true },
    ],
    reviews: [
      {
        _id: "r-l5-1",
        rating: 5,
        title: "OLED display is jaw-dropping",
        comment:
          "The 3.8K OLED panel is absolutely stunning. Colors are so vivid and blacks are truly black. Best display I've ever used on a laptop.",
        userName: "DisplaySnob",
        initials: "DS",
        verified: true,
      },
      {
        _id: "r-l5-2",
        rating: 4,
        title: "Beautiful but runs warm",
        comment:
          "Build quality is premium and the screen is incredible. It does get warm under sustained load though. Fan noise is manageable.",
        userName: "WinPowerUser",
        initials: "WP",
        verified: true,
      },
      {
        _id: "r-l5-3",
        rating: 5,
        title: "Great deal at the sale price",
        comment:
          "Snagged this at $200 off and it's an absolute steal. The Core Ultra 9 handles everything from coding to video editing.",
        userName: "DealHunter",
        initials: "DH",
        verified: false,
      },
    ],
  },
  {
    _id: "laptop-6",
    brand: "Lenovo",
    name: "ThinkPad X1 Carbon Gen 12",
    description:
      "The legendary business ultrabook, reimagined with Intel Core Ultra and a 2.8K OLED display.",
    longDescription:
      "The ThinkPad X1 Carbon Gen 12 continues the legacy of the world's most iconic business laptop. Featuring a vibrant 14-inch 2.8K OLED display, Intel Core Ultra 7 processor, 32GB memory, and MIL-STD-810H durability, it delivers enterprise-grade reliability in a sub-1.1kg package.",
    price: 1449,
    image: `${CDN}/laptops/lenovo-yoga-920/thumbnail.webp`,
    images: [
      `${CDN}/laptops/lenovo-yoga-920/1.webp`,
      `${CDN}/laptops/lenovo-yoga-920/2.webp`,
      `${CDN}/laptops/lenovo-yoga-920/3.webp`,
    ],
    category: "laptops",
    subcategory: "business-laptop",
    tags: ["Business", "Lightweight", "OLED", "MIL-STD-810H"],
    countInStock: 20,
    rating: 4.7,
    numReviews: 543,
    specs: [
      { label: "Display", value: '14" 2.8K OLED, 2880×1800, 120Hz' },
      { label: "Processor", value: "Intel Core Ultra 7 165U" },
      { label: "Memory", value: "32GB LPDDR5x" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Battery", value: "57.4Wh" },
      { label: "Durability", value: "MIL-STD-810H certified" },
    ],
    colors: [
      { name: "Deep Black", hex: "#1A1A1A" },
    ],
    finishes: [
      { name: "Deep Black", hex: "#1A1A1A", active: true },
    ],
    variants: [
      { name: "Core Ultra 5" },
      { name: "Core Ultra 7", active: true },
    ],
    reviews: [
      {
        _id: "r-l6-1",
        rating: 5,
        title: "Best business laptop, period",
        comment:
          "The keyboard is still the best in class. OLED display is a huge upgrade from the old IPS panels. IT approved it instantly for our fleet.",
        userName: "ITManagerRob",
        initials: "IR",
        verified: true,
      },
      {
        _id: "r-l6-2",
        rating: 5,
        title: "Incredibly light and durable",
        comment:
          "Survived a drop off my desk onto a concrete floor with zero damage. MIL-SPEC rating is the real deal. Weighs almost nothing in my briefcase.",
        userName: "RoadWarrior",
        initials: "RW",
        verified: true,
      },
      {
        _id: "r-l6-3",
        rating: 4,
        title: "OLED is beautiful but battery takes a hit",
        comment:
          "The 2.8K OLED panel is gorgeous but battery life is about 8-9 hours instead of the 12+ you'd get with the IPS option. Worth the trade-off for me.",
        userName: "BizTraveler",
        initials: "BT",
        verified: true,
      },
    ],
  },
  {
    _id: "laptop-7",
    brand: "ASUS",
    name: "ROG Zephyrus G16 (2025)",
    description:
      "Next-gen gaming with RTX 5080 and Intel Core Ultra 9.",
    longDescription:
      "The ROG Zephyrus G16 packs desktop-class gaming performance into a sleek, portable chassis. Featuring the NVIDIA RTX 5080 GPU, Intel Core Ultra 9 285HX, and a blazing-fast 16-inch ROG Nebula OLED display at 240Hz, it dominates both gaming and creative workloads.",
    price: 1899,
    badge: { text: "GAMING", variant: "dark" },
    image: `${CDN}/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp`,
    images: [
      `${CDN}/laptops/asus-zenbook-pro-dual-screen-laptop/1.webp`,
      `${CDN}/laptops/asus-zenbook-pro-dual-screen-laptop/2.webp`,
      `${CDN}/laptops/asus-zenbook-pro-dual-screen-laptop/3.webp`,
    ],
    category: "laptops",
    subcategory: "gaming-laptop",
    tags: ["Gaming", "RTX 5080", "OLED", "240Hz"],
    countInStock: 12,
    rating: 4.7,
    numReviews: 432,
    specs: [
      {
        label: "Display",
        value: '16" ROG Nebula OLED, 2560×1600, 240Hz',
      },
      { label: "Processor", value: "Intel Core Ultra 9 285HX" },
      { label: "Graphics", value: "NVIDIA GeForce RTX 5080 12GB" },
      { label: "Memory", value: "32GB DDR5-5600" },
      { label: "Storage", value: "2TB PCIe Gen5 SSD" },
      { label: "Cooling", value: "ROG Intelligent Cooling, liquid metal" },
    ],
    colors: [
      { name: "Eclipse Gray", hex: "#3C3C3C" },
    ],
    finishes: [
      { name: "Eclipse Gray", hex: "#3C3C3C", active: true },
      { name: "Platinum White", hex: "#E8E8E8" },
    ],
    variants: [
      { name: "RTX 5070 Ti" },
      { name: "RTX 5080", active: true },
    ],
    reviews: [
      {
        _id: "r-l7-1",
        rating: 5,
        title: "RTX 5080 is a monster",
        comment:
          "Running Cyberpunk 2077 at max settings with ray tracing at 100+ FPS. The 240Hz OLED is buttery smooth. Best gaming laptop I've owned.",
        userName: "FragMaster",
        initials: "FM",
        verified: true,
      },
      {
        _id: "r-l7-2",
        rating: 4,
        title: "Great performance, decent battery",
        comment:
          "Gaming performance is top-tier but expect 2-3 hours on battery while gaming. On light tasks it lasts around 7 hours. Fans get loud under load.",
        userName: "LaptopGamer",
        initials: "LG",
        verified: true,
      },
      {
        _id: "r-l7-3",
        rating: 5,
        title: "Sleek for a gaming laptop",
        comment:
          "Doesn't look like a typical gaming laptop. Took it to a client meeting and nobody batted an eye. Then I gamed on it that night at 240Hz.",
        userName: "StealthGamer",
        initials: "SG",
        verified: true,
      },
    ],
  },
  {
    _id: "laptop-8",
    brand: "HP",
    name: "Spectre x360 16",
    description:
      "Premium 2-in-1 convertible with a stunning 3.8K OLED touchscreen.",
    longDescription:
      "The HP Spectre x360 16 is the ultimate convertible laptop, featuring a gorgeous 16-inch 3.8K OLED touchscreen, Intel Core Ultra 7, 32GB memory, and a 360-degree hinge. Whether you're using it as a laptop, tablet, or tent, it delivers premium performance wrapped in a gem-cut design.",
    price: 1499,
    image: `${CDN}/laptops/huawei-matebook-x-pro/thumbnail.webp`,
    images: [
      `${CDN}/laptops/huawei-matebook-x-pro/1.webp`,
      `${CDN}/laptops/huawei-matebook-x-pro/2.webp`,
      `${CDN}/laptops/huawei-matebook-x-pro/3.webp`,
    ],
    category: "laptops",
    subcategory: "ultrabook",
    tags: ["2-in-1", "Touchscreen", "OLED", "Convertible"],
    countInStock: 16,
    rating: 4.5,
    numReviews: 387,
    specs: [
      {
        label: "Display",
        value: '16" 3.8K OLED touchscreen, 3840×2400',
      },
      { label: "Processor", value: "Intel Core Ultra 7 155H" },
      { label: "Memory", value: "32GB LPDDR5x" },
      { label: "Storage", value: "1TB SSD" },
      { label: "Form Factor", value: "2-in-1 Convertible, 360° hinge" },
      { label: "Pen Support", value: "HP MPP 2.0 Tilt Pen included" },
    ],
    colors: [
      { name: "Nightfall Black", hex: "#2D2D2D" },
      { name: "Nocturne Blue", hex: "#1B2A4A" },
    ],
    finishes: [
      { name: "Nightfall Black", hex: "#2D2D2D", active: true },
      { name: "Nocturne Blue", hex: "#1B2A4A" },
    ],
    variants: [
      { name: "Core Ultra 5" },
      { name: "Core Ultra 7", active: true },
    ],
    reviews: [
      {
        _id: "r-l8-1",
        rating: 5,
        title: "Best 2-in-1 on the market",
        comment:
          "The OLED touchscreen is incredible for drawing and note-taking. Tent mode is perfect for watching movies. Build quality feels luxurious.",
        userName: "ArtistAnna",
        initials: "AA",
        verified: true,
      },
      {
        _id: "r-l8-2",
        rating: 4,
        title: "Beautiful but heavy for a convertible",
        comment:
          "At 2.1kg it's noticeable when using it as a tablet. But the 3.8K OLED display makes everything look phenomenal. Pen input is very responsive.",
        userName: "TabletFan",
        initials: "TF",
        verified: true,
      },
      {
        _id: "r-l8-3",
        rating: 4,
        title: "Solid all-rounder",
        comment:
          "Great for both work and entertainment. The gem-cut design gets compliments everywhere. Battery is around 8-10 hours with the OLED panel.",
        userName: "HybridUser",
        initials: "HU",
        verified: false,
      },
    ],
  },
  {
    _id: "laptop-9",
    brand: "Microsoft",
    name: "Surface Laptop 7",
    description:
      "Powered by Snapdragon X Elite with Copilot+ AI features and exceptional battery life.",
    longDescription:
      "The Surface Laptop 7 represents a new era of Windows laptops. Powered by the Snapdragon X Elite processor, it delivers exceptional performance with up to 20 hours of battery life. With Copilot+ PC features, a beautiful 15-inch PixelSense touchscreen, and signature Surface design, it's built for the AI era.",
    price: 1299,
    image: `${CDN}/laptops/new-dell-xps-13-9300-laptop/thumbnail.webp`,
    images: [
      `${CDN}/laptops/new-dell-xps-13-9300-laptop/1.webp`,
      `${CDN}/laptops/new-dell-xps-13-9300-laptop/2.webp`,
      `${CDN}/laptops/new-dell-xps-13-9300-laptop/3.webp`,
    ],
    category: "laptops",
    subcategory: "ultrabook",
    tags: ["Copilot+", "ARM", "Snapdragon", "Touchscreen", "AI"],
    countInStock: 24,
    rating: 4.6,
    numReviews: 654,
    specs: [
      { label: "Display", value: '15" PixelSense touchscreen, 2496×1664' },
      { label: "Processor", value: "Snapdragon X Elite (12-core)" },
      { label: "Memory", value: "16GB LPDDR5x" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Battery", value: "Up to 20 hours" },
      { label: "AI", value: "Copilot+ PC with NPU (45 TOPS)" },
    ],
    colors: [
      { name: "Platinum", hex: "#D6D3CE" },
      { name: "Black", hex: "#1C1C1C" },
      { name: "Sapphire", hex: "#2E4374" },
      { name: "Dune", hex: "#C4B7A6" },
    ],
    finishes: [
      { name: "Platinum", hex: "#D6D3CE", active: true },
      { name: "Black", hex: "#1C1C1C" },
      { name: "Sapphire", hex: "#2E4374" },
      { name: "Dune", hex: "#C4B7A6" },
    ],
    variants: [
      { name: '13.8"' },
      { name: '15"', active: true },
    ],
    reviews: [
      {
        _id: "r-l9-1",
        rating: 5,
        title: "Battery life is unbelievable",
        comment:
          "Consistently getting 17-18 hours of real-world use. The Snapdragon chip sips power. Copilot features are genuinely useful for summarizing docs.",
        userName: "AIEnthusiast",
        initials: "AE",
        verified: true,
      },
      {
        _id: "r-l9-2",
        rating: 4,
        title: "ARM compatibility is almost there",
        comment:
          "Most apps run great natively or through emulation. A few niche dev tools still don't work perfectly. For 95% of users, it's seamless.",
        userName: "DevOnArm",
        initials: "DA",
        verified: true,
      },
      {
        _id: "r-l9-3",
        rating: 5,
        title: "Best Surface yet",
        comment:
          "The PixelSense display is stunning and the haptic touchpad is so satisfying. Build quality is top-notch. Feels like a premium product through and through.",
        userName: "SurfaceFan",
        initials: "SF",
        verified: true,
      },
    ],
  },
  {
    _id: "laptop-10",
    brand: "Razer",
    name: "Blade 16 (2025)",
    description:
      "The world's most powerful gaming laptop. RTX 5090 inside.",
    longDescription:
      "The Razer Blade 16 is the pinnacle of gaming laptops. Featuring the NVIDIA RTX 5090 with 16GB GDDR7, Intel Core Ultra 9, and a stunning 16-inch QHD+ 240Hz Mini-LED display, it delivers uncompromising performance. Per-key RGB lighting, a CNC aluminum chassis, and vapor chamber cooling complete the package.",
    price: 2799,
    badge: { text: "ELITE", variant: "dark" },
    image: `${CDN}/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp`,
    images: [
      `${CDN}/laptops/asus-zenbook-pro-dual-screen-laptop/1.webp`,
      `${CDN}/laptops/asus-zenbook-pro-dual-screen-laptop/2.webp`,
      `${CDN}/laptops/asus-zenbook-pro-dual-screen-laptop/3.webp`,
    ],
    category: "laptops",
    subcategory: "gaming-laptop",
    tags: ["Gaming", "RTX 5090", "Mini-LED", "240Hz", "Per-key RGB"],
    countInStock: 8,
    rating: 4.6,
    numReviews: 234,
    specs: [
      { label: "Display", value: '16" QHD+ 240Hz Mini-LED, 2560×1600' },
      { label: "Processor", value: "Intel Core Ultra 9 285HX" },
      { label: "Graphics", value: "NVIDIA GeForce RTX 5090 16GB GDDR7" },
      { label: "Memory", value: "32GB DDR5-5600" },
      { label: "Storage", value: "2TB PCIe Gen5 SSD" },
      { label: "Keyboard", value: "Per-key RGB, anti-ghosting" },
    ],
    colors: [
      { name: "Black", hex: "#0A0A0A" },
    ],
    finishes: [
      { name: "Black", hex: "#0A0A0A", active: true },
    ],
    variants: [
      { name: "RTX 5080" },
      { name: "RTX 5090", active: true },
    ],
    reviews: [
      {
        _id: "r-l10-1",
        rating: 5,
        title: "RTX 5090 is absolutely insane",
        comment:
          "Running every game at max settings without breaking a sweat. The Mini-LED display has incredible HDR. This is as close to desktop gaming as you can get.",
        userName: "UltraGamerX",
        initials: "UG",
        verified: true,
      },
      {
        _id: "r-l10-2",
        rating: 4,
        title: "Premium build, premium price",
        comment:
          "The CNC aluminum chassis feels incredible. It's expensive but you can feel where the money went. Vapor chamber keeps thermals in check surprisingly well.",
        userName: "PremiumTech",
        initials: "PT",
        verified: true,
      },
      {
        _id: "r-l10-3",
        rating: 5,
        title: "Desktop replacement done right",
        comment:
          "Sold my gaming PC after getting this. The 5090 is powerful enough that I don't miss it. Per-key RGB keyboard looks amazing in the dark.",
        userName: "PCConvert",
        initials: "PC",
        verified: true,
      },
    ],
  },
];

export const watches: ProductDetail[] = [
  {
    _id: "watch-1",
    brand: "Apple",
    name: "Apple Watch Ultra 3",
    description:
      "The most rugged and capable Apple Watch ever. Built for extreme adventure.",
    longDescription:
      "Crafted from Grade 5 titanium with a 49mm case, the Apple Watch Ultra 3 features the all-new S10 chip, precision dual-frequency GPS, 100m water resistance, and an incredible 72-hour battery life. With satellite SOS, depth gauge, and advanced health sensors, it's your ultimate adventure companion.",
    price: 799,
    badge: { text: "FLAGSHIP", variant: "dark" },
    image: "https://images.unsplash.com/photo-1679436204470-87dc7da1e8be?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1679436204470-87dc7da1e8be?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1687078426457-89ce2b562eaf?w=800&q=80&auto=format",
    ],
    category: "watches",
    subcategory: "smartwatch",
    tags: ["Smartwatch", "GPS", "Health", "Adventure", "Titanium"],
    countInStock: 20,
    rating: 4.9,
    numReviews: 1432,
    specs: [
      { label: "Case", value: "49mm Grade 5 Titanium" },
      { label: "Chip", value: "Apple S10" },
      { label: "Display", value: "Always-On Retina LTPO3 OLED" },
      { label: "Battery", value: "Up to 72 hours" },
      { label: "Water Resistance", value: "100m / EN 13319" },
      { label: "Connectivity", value: "GPS L1/L5 + Cellular" },
    ],
    colors: [
      { name: "Natural Titanium", hex: "#C0B9AD" },
      { name: "Black Titanium", hex: "#3A3A3A" },
    ],
    finishes: [
      { name: "Natural Titanium", hex: "#C0B9AD", active: true },
      { name: "Black Titanium", hex: "#3A3A3A" },
    ],
    variants: [{ name: "49mm", active: true }],
    reviews: [
      {
        _id: "r-w1-1",
        rating: 5,
        title: "Survived a mountain trek",
        comment:
          "Wore this through a 5-day hike in the Rockies. GPS was pinpoint accurate, battery lasted the entire trip in low-power mode, and it took a few knocks without a scratch.",
        userName: "TrailBlazerMike",
        initials: "TM",
        verified: true,
      },
      {
        _id: "r-w1-2",
        rating: 5,
        title: "72-hour battery is real",
        comment:
          "Coming from Series 8 where I charged daily, this is a game-changer. The Ultra 3 easily lasts 3 days with health tracking and workouts on.",
        userName: "FitnessFreak",
        initials: "FF",
        verified: true,
      },
      {
        _id: "r-w1-3",
        rating: 4,
        title: "Amazing but bulky for small wrists",
        comment:
          "The 49mm case is huge on my 6.5-inch wrist. Features are incredible though — depth gauge, siren, satellite SOS. If you have bigger wrists, it's perfect.",
        userName: "SmallWristSam",
        initials: "SS",
        verified: true,
      },
    ],
  },
  {
    _id: "watch-2",
    brand: "Apple",
    name: "Apple Watch Series 10",
    description:
      "The essential health and fitness companion. Thinner, brighter, and smarter than ever.",
    longDescription:
      "The Apple Watch Series 10 features the largest, most advanced display ever on an Apple Watch. With the S10 chip, comprehensive health sensors including ECG, blood oxygen, and temperature sensing, and up to 36 hours of battery life, it's the smartwatch that keeps you informed and healthy.",
    price: 399,
    image: "https://images.unsplash.com/photo-1671195828444-eb720226a961?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1671195828444-eb720226a961?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1741454238936-0a40beef1db3?w=800&q=80&auto=format",
    ],
    category: "watches",
    subcategory: "smartwatch",
    tags: ["Smartwatch", "GPS", "Health", "Fitness"],
    countInStock: 45,
    rating: 4.8,
    numReviews: 2341,
    specs: [
      { label: "Case", value: "46mm Aluminum" },
      { label: "Chip", value: "Apple S10" },
      { label: "Display", value: "Always-On Retina OLED, 2000 nits" },
      { label: "Health", value: "ECG, Blood Oxygen, Temperature" },
      { label: "Battery", value: "Up to 36 hours" },
      { label: "Water Resistance", value: "50m (WR50)" },
    ],
    colors: [
      { name: "Jet Black", hex: "#0C0C0C" },
      { name: "Rose Gold", hex: "#B76E79" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    finishes: [
      { name: "Jet Black", hex: "#0C0C0C", active: true },
      { name: "Rose Gold", hex: "#B76E79" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    variants: [
      { name: "42mm" },
      { name: "46mm", active: true },
    ],
    reviews: [
      {
        _id: "r-w2-1",
        rating: 5,
        title: "Health features saved my life",
        comment:
          "The ECG feature detected an irregular heartbeat I didn't know about. My cardiologist confirmed AFib. This watch literally saved my life.",
        userName: "GratefulUser",
        initials: "GU",
        verified: true,
      },
      {
        _id: "r-w2-2",
        rating: 5,
        title: "Best smartwatch for iPhone users",
        comment:
          "Seamless integration with my iPhone. The always-on display is bright enough outdoors. Sleep tracking has really improved my habits.",
        userName: "AppleEcoFan",
        initials: "AF",
        verified: true,
      },
      {
        _id: "r-w2-3",
        rating: 4,
        title: "Great upgrade from Series 7",
        comment:
          "Noticeably thinner and the display is bigger. Battery lasts about a day and a half with heavy use. Wish it could go longer but otherwise perfect.",
        userName: "UpgradeKing",
        initials: "UK",
        verified: false,
      },
    ],
  },
  {
    _id: "watch-3",
    brand: "Samsung",
    name: "Galaxy Watch Ultra",
    description:
      "Samsung's most durable and powerful smartwatch for outdoor enthusiasts.",
    longDescription:
      "The Galaxy Watch Ultra is Samsung's answer to extreme adventure. Built with a 47mm titanium case, it features the Exynos W1000 chipset, a massive 590mAh battery, 10ATM+IP68 water resistance, and dual-frequency GPS for precise tracking anywhere in the world. Running Wear OS 5 with One UI Watch, it's powerful and intuitive.",
    price: 649,
    image: "https://images.unsplash.com/photo-1722153105551-cfea928e80de?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1722153105551-cfea928e80de?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1722152845711-be94a0751c8c?w=800&q=80&auto=format",
    ],
    category: "watches",
    subcategory: "smartwatch",
    tags: ["Smartwatch", "GPS", "Titanium", "Wear OS", "Outdoor"],
    countInStock: 18,
    rating: 4.7,
    numReviews: 765,
    specs: [
      { label: "Case", value: "47mm Grade 4 Titanium" },
      { label: "Chipset", value: "Exynos W1000 (3nm)" },
      { label: "Battery", value: "590mAh" },
      { label: "Durability", value: "10ATM + IP68 + MIL-STD-810H" },
      { label: "GPS", value: "Dual-frequency L1 + L5" },
      { label: "OS", value: "Wear OS 5 + One UI Watch 6" },
    ],
    colors: [
      { name: "Titanium Gray", hex: "#7A7A7A" },
      { name: "Titanium Silver", hex: "#B8B8B8" },
      { name: "Titanium White", hex: "#E8E4DF" },
    ],
    finishes: [
      { name: "Titanium Gray", hex: "#7A7A7A", active: true },
      { name: "Titanium Silver", hex: "#B8B8B8" },
      { name: "Titanium White", hex: "#E8E4DF" },
    ],
    variants: [{ name: "47mm", active: true }],
    reviews: [
      {
        _id: "r-w3-1",
        rating: 5,
        title: "Serious Apple Watch Ultra competitor",
        comment:
          "As an Android user I finally have a true rugged smartwatch. The titanium build feels premium and GPS tracking is spot-on during trail runs.",
        userName: "AndroidRunner",
        initials: "AR",
        verified: true,
      },
      {
        _id: "r-w3-2",
        rating: 4,
        title: "Great hardware, software is catching up",
        comment:
          "Build quality is excellent and battery lasts 2-3 days easily. Wear OS 5 is smoother than before but still not as polished as watchOS. Getting better with updates.",
        userName: "WearOSFan",
        initials: "WF",
        verified: true,
      },
      {
        _id: "r-w3-3",
        rating: 5,
        title: "Love the quick action button",
        comment:
          "The customizable quick button is so useful during workouts. One press to start a run, another to mark a lap. The 3nm chip makes everything snappy.",
        userName: "FitTechGuy",
        initials: "FG",
        verified: true,
      },
    ],
  },
  {
    _id: "watch-4",
    brand: "Samsung",
    name: "Galaxy Watch 7",
    description:
      "Smarter health tracking with advanced AI-powered insights and Wear OS 5.",
    longDescription:
      "The Samsung Galaxy Watch 7 brings advanced health monitoring to your wrist with an upgraded BioActive Sensor, AI-powered Galaxy Health insights, and the efficient Exynos W1000 chip. With Wear OS 5, a vibrant Super AMOLED display, and seamless Galaxy ecosystem integration, it's the smartwatch for the connected lifestyle.",
    price: 299,
    image: `${CDN}/mens-watches/longines-master-collection/thumbnail.webp`,
    images: [
      `${CDN}/mens-watches/longines-master-collection/1.webp`,
      `${CDN}/mens-watches/longines-master-collection/2.webp`,
      `${CDN}/mens-watches/longines-master-collection/3.webp`,
    ],
    category: "watches",
    subcategory: "smartwatch",
    tags: ["Smartwatch", "GPS", "Health", "Wear OS", "Galaxy AI"],
    countInStock: 35,
    rating: 4.6,
    numReviews: 1234,
    specs: [
      { label: "Case", value: "44mm Aluminum" },
      { label: "Chipset", value: "Exynos W1000 (3nm)" },
      { label: "Display", value: "1.5\" Super AMOLED, 480×480" },
      { label: "Health", value: "BioActive Sensor (heart rate, ECG, BIA)" },
      { label: "Battery", value: "425mAh, ~40hr typical use" },
      { label: "OS", value: "Wear OS 5 + One UI Watch 6" },
    ],
    colors: [
      { name: "Green", hex: "#4A6741" },
      { name: "Cream", hex: "#F5F0E8" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    finishes: [
      { name: "Green", hex: "#4A6741", active: true },
      { name: "Cream", hex: "#F5F0E8" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    variants: [
      { name: "40mm" },
      { name: "44mm", active: true },
    ],
    reviews: [
      {
        _id: "r-w4-1",
        rating: 5,
        title: "Best value Android smartwatch",
        comment:
          "At $299 this is a steal. Health tracking is comprehensive, the display is gorgeous, and it pairs perfectly with my Galaxy S24.",
        userName: "ValueHunter",
        initials: "VH",
        verified: true,
      },
      {
        _id: "r-w4-2",
        rating: 4,
        title: "Big improvement over Watch 6",
        comment:
          "The 3nm chip makes a noticeable difference in speed. Sleep tracking is more accurate now. Battery could still be better — about 1.5 days for me.",
        userName: "SamsungLoyalist",
        initials: "SL",
        verified: true,
      },
      {
        _id: "r-w4-3",
        rating: 5,
        title: "Galaxy AI health insights are impressive",
        comment:
          "The AI analysis of sleep patterns and workout recovery times is really useful. It's like having a personal health coach on my wrist.",
        userName: "HealthNerd",
        initials: "HN",
        verified: true,
      },
    ],
  },
  {
    _id: "watch-5",
    brand: "Google",
    name: "Pixel Watch 3",
    description:
      "The smartest Pixel Watch yet, with deep Fitbit integration and pure Wear OS.",
    longDescription:
      "The Google Pixel Watch 3 combines Google's AI smarts with Fitbit's world-class fitness tracking. Available in 41mm and 45mm sizes, it features a custom Qualcomm chipset, UWB connectivity, and the cleanest Wear OS experience available. With 24-hour battery life and seamless Pixel ecosystem integration, it's Google's best wearable.",
    price: 349,
    image: `${CDN}/womens-watches/iwc-ingenieur-automatic-steel/thumbnail.webp`,
    images: [
      `${CDN}/womens-watches/iwc-ingenieur-automatic-steel/1.webp`,
      `${CDN}/womens-watches/iwc-ingenieur-automatic-steel/2.webp`,
      `${CDN}/womens-watches/iwc-ingenieur-automatic-steel/3.webp`,
    ],
    category: "watches",
    subcategory: "smartwatch",
    tags: ["Smartwatch", "GPS", "Fitbit", "Wear OS", "Google AI"],
    countInStock: 28,
    rating: 4.5,
    numReviews: 543,
    specs: [
      { label: "Case", value: "41mm / 45mm Recycled Aluminum" },
      { label: "Chipset", value: "Custom Qualcomm (co-developed with Google)" },
      { label: "Display", value: "AMOLED, up to 2000 nits" },
      { label: "Fitness", value: "Fitbit integration, 40+ workout modes" },
      { label: "Battery", value: "Up to 24 hours (36h with saver)" },
      { label: "Connectivity", value: "UWB, NFC, Wi-Fi, Bluetooth 5.3" },
    ],
    colors: [
      { name: "Obsidian", hex: "#1C1C1C" },
      { name: "Porcelain", hex: "#F0EBE0" },
      { name: "Hazel", hex: "#8B7D6B" },
    ],
    finishes: [
      { name: "Matte Black", hex: "#1C1C1C", active: true },
      { name: "Polished Silver", hex: "#D4D4D4" },
      { name: "Champagne Gold", hex: "#C9A96E" },
    ],
    variants: [
      { name: "41mm", active: true },
      { name: "45mm" },
    ],
    reviews: [
      {
        _id: "r-w5-1",
        rating: 5,
        title: "Cleanest Wear OS experience",
        comment:
          "No bloatware, just pure Google. Fitbit integration is seamless and the Pixel ecosystem tie-in (phone, buds, watch) is chef's kiss.",
        userName: "PixelFanatic",
        initials: "PF",
        verified: true,
      },
      {
        _id: "r-w5-2",
        rating: 4,
        title: "Great watch, wish battery lasted longer",
        comment:
          "Love everything about this watch except battery life. I get about 20 hours with always-on display. Charging is fast though — 30 min to 50%.",
        userName: "DailyCharger",
        initials: "DC",
        verified: true,
      },
      {
        _id: "r-w5-3",
        rating: 4,
        title: "Fitbit features are the highlight",
        comment:
          "Sleep tracking, readiness score, and workout metrics are all best in class thanks to Fitbit. The 41mm size is perfect for smaller wrists.",
        userName: "FitbitConvert",
        initials: "FC",
        verified: true,
      },
    ],
  },
  {
    _id: "watch-6",
    brand: "Garmin",
    name: "Fenix 8",
    description:
      "The ultimate multisport GPS watch with AMOLED display and solar charging.",
    longDescription:
      "The Garmin Fenix 8 is the most advanced multisport GPS watch ever made. Featuring a brilliant 1.4-inch AMOLED display with solar charging, up to 48 days of battery life in smartwatch mode, multi-band GPS, dive capability to 40m, and preloaded topo maps, it's built for athletes and adventurers who demand the best.",
    price: 899,
    originalPrice: 999,
    badge: { text: "-10%", variant: "accent" },
    image: `${CDN}/mens-watches/brown-leather-belt-watch/thumbnail.webp`,
    images: [
      `${CDN}/mens-watches/brown-leather-belt-watch/1.webp`,
      `${CDN}/mens-watches/brown-leather-belt-watch/2.webp`,
      `${CDN}/mens-watches/brown-leather-belt-watch/3.webp`,
    ],
    category: "watches",
    subcategory: "fitness-tracker",
    tags: ["GPS", "Fitness", "Solar", "Adventure"],
    countInStock: 14,
    rating: 4.8,
    numReviews: 876,
    specs: [
      { label: "Display", value: '1.4" AMOLED with solar charging' },
      { label: "Battery", value: "Up to 48 days (smartwatch mode)" },
      { label: "GPS", value: "Multi-band (L1 + L5) + satellite" },
      { label: "Water Rating", value: "10ATM, dive to 40m" },
      { label: "Maps", value: "Preloaded TopoActive maps" },
      { label: "Sensors", value: "HR, SpO2, altimeter, compass, gyroscope" },
    ],
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "Titanium", hex: "#8C8C8C" },
    ],
    finishes: [
      { name: "Black DLC", hex: "#1A1A1A", active: true },
      { name: "Titanium", hex: "#8C8C8C" },
    ],
    variants: [
      { name: "47mm", active: true },
      { name: "51mm" },
    ],
    reviews: [
      {
        _id: "r-w6-1",
        rating: 5,
        title: "48-day battery is not a joke",
        comment:
          "In smartwatch mode with solar, I went over a month without charging. For a watch with an AMOLED display, that's absolutely insane. Garmin nailed this.",
        userName: "UltraRunner",
        initials: "UR",
        verified: true,
      },
      {
        _id: "r-w6-2",
        rating: 5,
        title: "Best GPS accuracy I've tested",
        comment:
          "Multi-band GPS is incredibly accurate even under tree cover. My trail runs finally show the correct distance. Topo maps are a lifesaver in remote areas.",
        userName: "TrailMapper",
        initials: "TM",
        verified: true,
      },
      {
        _id: "r-w6-3",
        rating: 4,
        title: "Worth the premium",
        comment:
          "Expensive but you get what you pay for. The AMOLED display is a huge upgrade from the old MIP screens. Only downside is it's chunky — not a dress watch.",
        userName: "GearReviewer",
        initials: "GR",
        verified: true,
      },
    ],
  },
  {
    _id: "watch-7",
    brand: "Garmin",
    name: "Venu 4",
    description:
      "A lifestyle GPS smartwatch with brilliant AMOLED display and up to 10 days of battery.",
    longDescription:
      "The Garmin Venu 4 bridges the gap between fitness tracker and smartwatch. With a gorgeous 1.3-inch AMOLED display, built-in speaker and microphone for calls, up to 10 days of battery life, and advanced health features including nap detection and wheelchair mode, it's the Garmin for everyday life.",
    price: 449,
    image: `${CDN}/womens-watches/watch-gold-for-women/thumbnail.webp`,
    images: [
      `${CDN}/womens-watches/watch-gold-for-women/1.webp`,
      `${CDN}/womens-watches/watch-gold-for-women/2.webp`,
      `${CDN}/womens-watches/watch-gold-for-women/3.webp`,
    ],
    category: "watches",
    subcategory: "fitness-tracker",
    tags: ["GPS", "Fitness", "AMOLED", "Health", "Lifestyle"],
    countInStock: 22,
    rating: 4.6,
    numReviews: 432,
    specs: [
      { label: "Display", value: '1.3" AMOLED, 416×416' },
      { label: "Battery", value: "Up to 10 days (smartwatch mode)" },
      { label: "Audio", value: "Built-in speaker and microphone" },
      { label: "Health", value: "HR, SpO2, Body Battery, stress, nap detection" },
      { label: "Accessibility", value: "Wheelchair mode" },
      { label: "Storage", value: "8GB for offline music" },
    ],
    colors: [
      { name: "Black/Slate", hex: "#2C2C2C" },
      { name: "White/Cream Gold", hex: "#F5F0E5" },
      { name: "Navy/Gold", hex: "#1E2A4A" },
    ],
    finishes: [
      { name: "Black/Slate", hex: "#2C2C2C", active: true },
      { name: "Cream Gold", hex: "#F5F0E5" },
      { name: "Navy/Gold", hex: "#1E2A4A" },
    ],
    variants: [
      { name: "41mm" },
      { name: "45mm", active: true },
    ],
    reviews: [
      {
        _id: "r-w7-1",
        rating: 5,
        title: "10-day battery changes everything",
        comment:
          "Coming from an Apple Watch, not charging every night is liberating. Garmin's fitness tracking is also more detailed. The AMOLED display is beautiful.",
        userName: "BatteryFirst",
        initials: "BF",
        verified: true,
      },
      {
        _id: "r-w7-2",
        rating: 4,
        title: "Great fitness watch, okay smartwatch",
        comment:
          "Fitness and health tracking are world-class. The smart features (notifications, calls) work but aren't as smooth as Apple or Samsung. Worth it for the battery and health data.",
        userName: "FitnessJourney",
        initials: "FJ",
        verified: true,
      },
      {
        _id: "r-w7-3",
        rating: 5,
        title: "Nap detection is surprisingly useful",
        comment:
          "I'm a power napper and the fact that this watch automatically detects naps and adds them to my sleep data is awesome. Body Battery metric is also super helpful.",
        userName: "NapQueen",
        initials: "NQ",
        verified: true,
      },
    ],
  },
  {
    _id: "watch-8",
    brand: "Samsung",
    name: "Galaxy Ring 2",
    description:
      "Health tracking reimagined. Wear it on your finger, not your wrist.",
    longDescription:
      "The Samsung Galaxy Ring 2 brings comprehensive health tracking to an ultra-compact form factor. Made from Grade 5 titanium, it features 7-day battery life, advanced sleep tracking, continuous heart rate monitoring, skin temperature sensing, and Galaxy AI-powered health insights — all in a ring that weighs just 3 grams.",
    price: 399,
    badge: { text: "NEW", variant: "dark" },
    image: `${CDN}/womens-watches/rolex-datejust-women/thumbnail.webp`,
    images: [
      `${CDN}/womens-watches/rolex-datejust-women/1.webp`,
      `${CDN}/womens-watches/rolex-datejust-women/2.webp`,
      `${CDN}/womens-watches/rolex-datejust-women/3.webp`,
    ],
    category: "watches",
    subcategory: "smart-ring",
    tags: ["Smart Ring", "Health", "Sleep Tracking", "Galaxy AI"],
    countInStock: 25,
    rating: 4.3,
    numReviews: 234,
    specs: [
      { label: "Material", value: "Grade 5 Titanium" },
      { label: "Battery", value: "Up to 7 days" },
      { label: "Health", value: "Heart rate, SpO2, skin temp, sleep" },
      { label: "AI", value: "Galaxy AI health insights" },
      { label: "Weight", value: "~3g (varies by size)" },
      { label: "Durability", value: "10ATM water resistance" },
    ],
    colors: [
      { name: "Titanium Black", hex: "#1A1A1A" },
      { name: "Titanium Silver", hex: "#C0C0C0" },
      { name: "Titanium Gold", hex: "#CFB53B" },
    ],
    finishes: [
      { name: "Titanium Black", hex: "#1A1A1A", active: true },
      { name: "Titanium Silver", hex: "#C0C0C0" },
      { name: "Titanium Gold", hex: "#CFB53B" },
    ],
    variants: [
      { name: "Size 5" },
      { name: "Size 7", active: true },
      { name: "Size 9" },
      { name: "Size 11" },
      { name: "Size 13" },
    ],
    reviews: [
      {
        _id: "r-w8-1",
        rating: 5,
        title: "Forget you're wearing it",
        comment:
          "At 3 grams, I genuinely forget it's on my finger. Sleep tracking is surprisingly accurate and I love not having a watch tan line anymore.",
        userName: "MinimalistMark",
        initials: "MM",
        verified: true,
      },
      {
        _id: "r-w8-2",
        rating: 4,
        title: "Great concept, getting better",
        comment:
          "Health data is solid and the 7-day battery is excellent. Wish it had more gesture controls and wider app support. Galaxy AI insights are a nice touch.",
        userName: "EarlyAdopter",
        initials: "EA",
        verified: true,
      },
      {
        _id: "r-w8-3",
        rating: 4,
        title: "Perfect companion to a regular watch",
        comment:
          "I wear my mechanical watch during the day and the Galaxy Ring at night for sleep tracking. Best of both worlds. Sizing kit was helpful.",
        userName: "WatchCollector",
        initials: "WC",
        verified: true,
      },
    ],
  },
];
