import type { ProductDetail } from "@/types";

export const audio: ProductDetail[] = [
  {
    _id: "audio-1",
    brand: "Sony",
    name: "WH-1000XM6",
    description:
      "Industry-leading noise cancellation meets 40-hour battery life. The gold standard in wireless headphones.",
    longDescription:
      "The Sony WH-1000XM6 redefines wireless audio with next-gen noise cancellation powered by the V2 processor, crystal-clear hands-free calling, and LDAC hi-res audio. With 40 hours of battery, multipoint Bluetooth 5.4, and an ultra-lightweight design, these are the headphones that set the standard.",
    price: 449,
    badge: { text: "BEST SELLER", variant: "accent" },
    image:
      "https://images.unsplash.com/photo-1642622039751-f74f2d1a0280?w=420&q=80&auto=format",
    images: [
      "https://images.unsplash.com/photo-1642622039751-f74f2d1a0280?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1563626451-b5b36e6e52fb?w=800&q=80&auto=format",
      "https://images.unsplash.com/photo-1583305727488-61f82c7eae4b?w=800&q=80&auto=format",
    ],
    category: "audio",
    subcategory: "over-ear",
    tags: [
      "Over-ear",
      "Noise Canceling",
      "Wireless",
      "Bluetooth",
      "LDAC",
      "Hi-Res",
    ],
    countInStock: 40,
    rating: 4.9,
    numReviews: 3241,
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Midnight Blue", hex: "#191970" },
    ],
    specs: [
      { label: "Type", value: "Over-ear Wireless" },
      { label: "Driver", value: "40mm HD" },
      { label: "Battery", value: "40 hours (NC on)" },
      { label: "ANC", value: "Adaptive Noise Cancellation" },
      { label: "Codec", value: "LDAC, AAC, SBC" },
      { label: "Connectivity", value: "Bluetooth 5.4, Multipoint" },
      { label: "Weight", value: "250g" },
    ],
    finishes: [
      { name: "Black", hex: "#1A1A1A", active: true },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Midnight Blue", hex: "#191970" },
    ],
    variants: [{ name: "Standard", active: true }],
    reviews: [
      {
        _id: "r-audio-1-1",
        rating: 5,
        title: "Best noise cancellation I've ever used",
        comment:
          "The ANC on these is leagues ahead of anything else. I wear them on my daily commute and they block out everything — trains, traffic, even loud conversations. Sound quality is phenomenal too.",
        userName: "Marcus J.",
        initials: "MJ",
        verified: true,
      },
      {
        _id: "r-audio-1-2",
        rating: 5,
        title: "40 hours is no joke",
        comment:
          "I charged these on Monday and didn't need to plug them in again until Friday. The battery life is insane. Comfort-wise they're lighter than the XM5 and the ear cups breathe better.",
        userName: "Priya S.",
        initials: "PS",
        verified: true,
      },
      {
        _id: "r-audio-1-3",
        rating: 4,
        title: "Incredible sound, minor call quality gripe",
        comment:
          "The LDAC codec makes a real difference — hi-res tracks sound rich and detailed. Only wish the microphone was a touch clearer for conference calls in windy environments. Otherwise perfect.",
        userName: "David L.",
        initials: "DL",
        verified: true,
      },
    ],
  },
  {
    _id: "audio-2",
    brand: "Apple",
    name: "AirPods Pro 3",
    description:
      "Adaptive Audio that responds to you. Hearing health features built in.",
    longDescription:
      "AirPods Pro 3 powered by the H3 chip deliver an entirely new level of intelligent audio. Conversation Awareness automatically lowers media when you start speaking, Adaptive Audio dynamically blends transparency and noise cancellation, and the clinical-grade hearing aid feature makes these far more than just earbuds. With USB-C charging and 6 hours of listening time, they're Apple's most advanced in-ear audio yet.",
    price: 249,
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/3.webp",
    ],
    category: "audio",
    subcategory: "in-ear",
    tags: ["In-ear", "Noise Canceling", "Wireless", "Spatial Audio"],
    countInStock: 50,
    rating: 4.8,
    numReviews: 4532,
    colors: [{ name: "White", hex: "#FFFFFF" }],
    specs: [
      { label: "Type", value: "In-ear True Wireless" },
      { label: "Chip", value: "Apple H3" },
      { label: "ANC", value: "Adaptive Audio" },
      { label: "Features", value: "Conversation Awareness, Hearing Aid" },
      { label: "Battery", value: "6 hours (30 hours with case)" },
      { label: "Charging", value: "USB-C, MagSafe, Qi" },
      { label: "Water Resistance", value: "IP54" },
    ],
    finishes: [{ name: "White", hex: "#FFFFFF", active: true }],
    variants: [{ name: "Standard", active: true }],
    reviews: [
      {
        _id: "r-audio-2-1",
        rating: 5,
        title: "Conversation Awareness is a game changer",
        comment:
          "I can't believe how seamlessly these switch when someone talks to me. No more yanking earbuds out mid-conversation. The adaptive audio blending is smooth and natural.",
        userName: "Sarah K.",
        initials: "SK",
        verified: true,
      },
      {
        _id: "r-audio-2-2",
        rating: 5,
        title: "Hearing health features are incredible",
        comment:
          "As someone with mild hearing loss, the hearing aid feature has been life-changing. Apple packed real medical-grade functionality into these tiny earbuds. Sound quality is also top tier.",
        userName: "Robert M.",
        initials: "RM",
        verified: true,
      },
      {
        _id: "r-audio-2-3",
        rating: 4,
        title: "Great upgrade from Pro 2",
        comment:
          "Noticeable improvements in ANC and the fit is more comfortable for longer wear. Spatial Audio in music and movies is immersive. Only knock is I wish the case was slightly smaller.",
        userName: "Emily T.",
        initials: "ET",
        verified: true,
      },
    ],
  },
  {
    _id: "audio-3",
    brand: "Apple",
    name: "AirPods Max 2",
    description:
      "High-fidelity audio with the power of H2 chip. Now with USB-C.",
    longDescription:
      "AirPods Max 2 combine Apple-designed dynamic drivers with the H2 chip for computational audio that redefines over-ear listening. Enjoy Spatial Audio with dynamic head tracking, Active Noise Cancellation that adapts in real time, and a premium build featuring anodized aluminum and stainless steel. Now with USB-C, 20-hour battery life, and an even more refined Digital Crown.",
    price: 549,
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
    ],
    category: "audio",
    subcategory: "over-ear",
    tags: [
      "Over-ear",
      "Noise Canceling",
      "Wireless",
      "Spatial Audio",
      "Hi-Res",
    ],
    countInStock: 18,
    rating: 4.7,
    numReviews: 1234,
    colors: [
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Space Black", hex: "#1C1C1E" },
      { name: "Blue", hex: "#3478F6" },
    ],
    specs: [
      { label: "Type", value: "Over-ear Wireless" },
      { label: "Chip", value: "Apple H2" },
      { label: "Battery", value: "20 hours" },
      { label: "Charging", value: "USB-C" },
      { label: "Audio", value: "Spatial Audio with Head Tracking" },
      { label: "Controls", value: "Digital Crown" },
      { label: "Weight", value: "384g" },
    ],
    finishes: [
      { name: "Silver", hex: "#C0C0C0", active: true },
      { name: "Space Black", hex: "#1C1C1E" },
      { name: "Blue", hex: "#3478F6" },
    ],
    variants: [{ name: "Standard", active: true }],
    reviews: [
      {
        _id: "r-audio-3-1",
        rating: 5,
        title: "Worth every penny for audiophiles",
        comment:
          "The soundstage on these is breathtaking. Spatial Audio with head tracking makes movies feel like a private theater. USB-C was a long-overdue upgrade and the build quality is unmatched.",
        userName: "James W.",
        initials: "JW",
        verified: true,
      },
      {
        _id: "r-audio-3-2",
        rating: 4,
        title: "Premium sound, premium weight",
        comment:
          "Audio quality is absolutely stellar — best I've heard from any wireless headphone. They are heavier than the competition though, so long sessions can fatigue you a bit. The Digital Crown is still the best control method out there.",
        userName: "Alicia R.",
        initials: "AR",
        verified: true,
      },
    ],
  },
  {
    _id: "audio-4",
    brand: "Bose",
    name: "QuietComfort Ultra Headphones",
    description:
      "World-class noise cancellation with Bose Immersive Audio.",
    longDescription:
      "The Bose QuietComfort Ultra Headphones deliver world-class noise cancellation paired with Bose Immersive Audio for spatial sound that places you inside the music. Featuring CustomTune technology that personalizes your audio profile, Snapdragon Sound for lossless streaming, and 24-hour battery life, these headphones blend Bose's legendary ANC with cutting-edge immersive features.",
    price: 429,
    originalPrice: 479,
    badge: { text: "-10%", variant: "accent" },
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp",
    ],
    category: "audio",
    subcategory: "over-ear",
    tags: [
      "Over-ear",
      "Noise Canceling",
      "Wireless",
      "Immersive Audio",
      "Snapdragon Sound",
    ],
    countInStock: 30,
    rating: 4.8,
    numReviews: 2134,
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White Smoke", hex: "#EDEAE4" },
      { name: "Sandstone", hex: "#C7B299" },
    ],
    specs: [
      { label: "Type", value: "Over-ear Wireless" },
      { label: "ANC", value: "CustomTune Noise Cancellation" },
      { label: "Audio", value: "Bose Immersive Audio" },
      { label: "Battery", value: "24 hours" },
      { label: "Codec", value: "Snapdragon Sound, aptX Adaptive" },
      { label: "Connectivity", value: "Bluetooth 5.3, Multipoint" },
      { label: "Weight", value: "250g" },
    ],
    finishes: [
      { name: "Black", hex: "#000000", active: true },
      { name: "White Smoke", hex: "#EDEAE4" },
      { name: "Sandstone", hex: "#C7B299" },
    ],
    variants: [{ name: "Standard", active: true }],
    reviews: [
      {
        _id: "r-audio-4-1",
        rating: 5,
        title: "Bose ANC is still king",
        comment:
          "I've tried Sony, Apple, and Sennheiser — nobody does noise cancellation like Bose. The Immersive Audio mode adds a whole new dimension to music. CustomTune personalizes the sound perfectly to your ears.",
        userName: "Nicole P.",
        initials: "NP",
        verified: true,
      },
      {
        _id: "r-audio-4-2",
        rating: 5,
        title: "Perfect for travel and work",
        comment:
          "24 hours of battery easily gets me through transatlantic flights. The multipoint connection lets me switch between laptop and phone seamlessly. Incredibly comfortable too.",
        userName: "Tom H.",
        initials: "TH",
        verified: true,
      },
      {
        _id: "r-audio-4-3",
        rating: 4,
        title: "Great value at the sale price",
        comment:
          "Picked these up on sale and they're fantastic. Sound is warm and rich, ANC is top-tier. My only complaint is the carrying case is a bit bulky compared to Sony's fold-flat design.",
        userName: "Lisa C.",
        initials: "LC",
        verified: true,
      },
    ],
  },
  {
    _id: "audio-5",
    brand: "Sennheiser",
    name: "Momentum 5 Wireless",
    description:
      "Audiophile-grade sound meets premium design. 60 hours of pure listening.",
    longDescription:
      "The Sennheiser Momentum 5 Wireless is crafted for discerning listeners who demand audiophile-quality sound on the go. With 42mm transducers tuned by Sennheiser's acoustic engineers, aptX Lossless codec support, and an astonishing 60-hour battery life, these headphones deliver studio-quality audio wrapped in premium leather and aluminum. Adaptive ANC intelligently adjusts to your environment.",
    price: 349,
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp",
    ],
    category: "audio",
    subcategory: "over-ear",
    tags: [
      "Over-ear",
      "Noise Canceling",
      "Wireless",
      "aptX Lossless",
      "Audiophile",
    ],
    countInStock: 20,
    rating: 4.7,
    numReviews: 876,
    colors: [
      { name: "Graphite", hex: "#383838" },
      { name: "Brown", hex: "#6B4226" },
    ],
    specs: [
      { label: "Type", value: "Over-ear Wireless" },
      { label: "Driver", value: "42mm Sennheiser Transducers" },
      { label: "Codec", value: "aptX Lossless, aptX Adaptive, AAC" },
      { label: "Battery", value: "60 hours" },
      { label: "ANC", value: "Adaptive Noise Cancellation" },
      { label: "Connectivity", value: "Bluetooth 5.4, Multipoint" },
      { label: "Weight", value: "290g" },
    ],
    finishes: [
      { name: "Graphite", hex: "#383838", active: true },
      { name: "Brown", hex: "#6B4226" },
    ],
    variants: [{ name: "Standard", active: true }],
    reviews: [
      {
        _id: "r-audio-5-1",
        rating: 5,
        title: "Audiophile approved",
        comment:
          "The sound signature is neutral and transparent — exactly what you want for critical listening. aptX Lossless over Bluetooth is indistinguishable from wired to my ears. 60 hours of battery is just absurd.",
        userName: "Henrik B.",
        initials: "HB",
        verified: true,
      },
      {
        _id: "r-audio-5-2",
        rating: 4,
        title: "Beautiful build, great sound",
        comment:
          "The leather and aluminum construction feels truly premium. Sound quality rivals many wired headphones twice the price. ANC is good but not quite at the Bose/Sony level. Still, these are my daily drivers.",
        userName: "Mei L.",
        initials: "ML",
        verified: true,
      },
    ],
  },
  {
    _id: "audio-6",
    brand: "Sony",
    name: "WF-1000XM6",
    description:
      "The world's smallest and lightest noise-canceling truly wireless earbuds.",
    longDescription:
      "Sony's WF-1000XM6 packs the V2 processor and an 8.4mm dynamic driver into a remarkably compact form factor, making them the smallest noise-canceling true wireless earbuds in the world. With LDAC hi-res audio support, 8 hours of playback (24 with the case), IPX4 water resistance, and speak-to-chat, these earbuds prove you don't need to go big to get premium sound.",
    price: 279,
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/3.webp",
    ],
    category: "audio",
    subcategory: "in-ear",
    tags: [
      "In-ear",
      "Noise Canceling",
      "Wireless",
      "LDAC",
      "Hi-Res",
      "IPX4",
    ],
    countInStock: 35,
    rating: 4.7,
    numReviews: 1876,
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "Silver", hex: "#E8E8E8" },
    ],
    specs: [
      { label: "Type", value: "In-ear True Wireless" },
      { label: "Driver", value: "8.4mm Dynamic" },
      { label: "Chip", value: "Sony V2 Processor" },
      { label: "Codec", value: "LDAC, AAC, SBC" },
      { label: "Battery", value: "8 hours (24 hours with case)" },
      { label: "Water Resistance", value: "IPX4" },
      { label: "Weight", value: "4.7g per earbud" },
    ],
    finishes: [
      { name: "Black", hex: "#1A1A1A", active: true },
      { name: "Silver", hex: "#E8E8E8" },
    ],
    variants: [{ name: "Standard", active: true }],
    reviews: [
      {
        _id: "r-audio-6-1",
        rating: 5,
        title: "Tiny earbuds, massive sound",
        comment:
          "I can't believe how much sound these tiny earbuds put out. The 8.4mm driver is punching way above its weight. LDAC codec makes streaming hi-res from Tidal a joy.",
        userName: "Carlos F.",
        initials: "CF",
        verified: true,
      },
      {
        _id: "r-audio-6-2",
        rating: 5,
        title: "Best ANC in an earbud",
        comment:
          "Coming from the XM5 earbuds, the ANC improvement is night and day. They seal perfectly and the noise cancellation rivals some over-ear headphones. Speak-to-chat works flawlessly.",
        userName: "Anna W.",
        initials: "AW",
        verified: true,
      },
      {
        _id: "r-audio-6-3",
        rating: 4,
        title: "Almost perfect",
        comment:
          "Sound and ANC are top of the class. Fit is comfortable for hours. I docked a star because the touch controls can be finicky when your fingers are wet. IPX4 is fine for gym use though.",
        userName: "Jordan T.",
        initials: "JT",
        verified: true,
      },
    ],
  },
  {
    _id: "audio-7",
    brand: "Samsung",
    name: "Galaxy Buds 3 Pro",
    description:
      "AI-powered audio with blade design. Galaxy AI adaptive noise control.",
    longDescription:
      "The Samsung Galaxy Buds 3 Pro feature a striking blade design and pack dual speakers — a 10.5mm woofer and 6.1mm tweeter — for rich, detailed sound. Galaxy AI powers adaptive noise control that learns your preferences, 360 Audio delivers immersive spatial sound, and up to 30 hours of battery (with case) keeps the music playing all day.",
    price: 249,
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/2.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods/3.webp",
    ],
    category: "audio",
    subcategory: "in-ear",
    tags: [
      "In-ear",
      "Noise Canceling",
      "Wireless",
      "360 Audio",
      "Galaxy AI",
    ],
    countInStock: 28,
    rating: 4.5,
    numReviews: 765,
    colors: [
      { name: "Silver", hex: "#C0C0C0" },
      { name: "White", hex: "#FFFFFF" },
    ],
    specs: [
      { label: "Type", value: "In-ear True Wireless" },
      { label: "Driver", value: "2-way (10.5mm Woofer + 6.1mm Tweeter)" },
      { label: "Audio", value: "360 Audio, Galaxy AI Adaptive" },
      { label: "Battery", value: "7 hours (30 hours with case)" },
      { label: "Features", value: "Galaxy AI Noise Control" },
      { label: "Connectivity", value: "Bluetooth 5.4" },
      { label: "Water Resistance", value: "IP57" },
    ],
    finishes: [
      { name: "Silver", hex: "#C0C0C0", active: true },
      { name: "White", hex: "#FFFFFF" },
    ],
    variants: [{ name: "Standard", active: true }],
    reviews: [
      {
        _id: "r-audio-7-1",
        rating: 5,
        title: "Galaxy AI is the real deal",
        comment:
          "The AI-powered noise control actually learns where I use them and adjusts automatically. On my commute it cranks up ANC, at the office it switches to ambient. The blade design looks sleek too.",
        userName: "Kevin L.",
        initials: "KL",
        verified: true,
      },
      {
        _id: "r-audio-7-2",
        rating: 4,
        title: "Excellent for Samsung users",
        comment:
          "The 2-way speaker system produces detailed highs and thumping bass. 360 Audio works great with Galaxy phones. Integration with the Samsung ecosystem is seamless. Non-Samsung users may miss some features.",
        userName: "Rachel G.",
        initials: "RG",
        verified: true,
      },
    ],
  },
  {
    _id: "audio-8",
    brand: "Bose",
    name: "Ultra Open Earbuds",
    description:
      "Open-ear design that lets the world in while delivering rich Bose sound.",
    longDescription:
      "Bose Ultra Open Earbuds break the mold with an open-ear design that keeps you connected to your surroundings while delivering surprisingly rich, full-bodied Bose sound. Powered by OpenAudio technology, these cuff-style earbuds clip gently to your ears for all-day comfort and feature Bose Immersive Audio for spatial sound, 7.5 hours of battery, and IPX4 water resistance.",
    price: 299,
    badge: { text: "INNOVATIVE", variant: "dark" },
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/beats-flex-wireless-earphones/1.webp",
    ],
    category: "audio",
    subcategory: "open-ear",
    tags: ["Open-ear", "Wireless", "Bluetooth", "Spatial Audio"],
    countInStock: 22,
    rating: 4.4,
    numReviews: 432,
    colors: [
      { name: "Black", hex: "#1A1A1A" },
      { name: "White", hex: "#F5F5F5" },
    ],
    specs: [
      { label: "Type", value: "Open-ear Wireless" },
      { label: "Technology", value: "Bose OpenAudio" },
      { label: "Audio", value: "Bose Immersive Audio" },
      { label: "Battery", value: "7.5 hours" },
      { label: "Water Resistance", value: "IPX4" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Weight", value: "6.5g per earbud" },
    ],
    finishes: [
      { name: "Black", hex: "#1A1A1A", active: true },
      { name: "White", hex: "#F5F5F5" },
    ],
    variants: [{ name: "Standard", active: true }],
    reviews: [
      {
        _id: "r-audio-8-1",
        rating: 5,
        title: "Perfect for running and cycling",
        comment:
          "Finally earbuds I can wear outdoors and still hear traffic and people around me. The open-ear design is genius — they clip on securely and never fall off. Sound quality is way better than expected for an open design.",
        userName: "Chris D.",
        initials: "CD",
        verified: true,
      },
      {
        _id: "r-audio-8-2",
        rating: 4,
        title: "Unique design, surprisingly good bass",
        comment:
          "I was skeptical about open earbuds but these deliver solid bass and clear mids without any ear fatigue. Immersive Audio adds depth. They do leak sound at higher volumes, so not ideal for quiet offices.",
        userName: "Samantha R.",
        initials: "SR",
        verified: true,
      },
      {
        _id: "r-audio-8-3",
        rating: 4,
        title: "All-day comfort champion",
        comment:
          "I wear these 8+ hours a day and forget they're there. No ear canal pressure, no sweaty ears. The clip design takes getting used to, but once you find the right position they're rock solid.",
        userName: "Yuki N.",
        initials: "YN",
        verified: true,
      },
    ],
  },
];

export const gaming: ProductDetail[] = [
  {
    _id: "gaming-1",
    brand: "Sony",
    name: "PlayStation 5 Pro",
    description:
      "The most powerful PlayStation console ever. 8K gaming, enhanced ray tracing, and 2TB SSD.",
    longDescription:
      "PlayStation 5 Pro elevates console gaming with its enhanced GPU delivering up to 45% faster rendering, advanced ray tracing, AI-driven upscaling with PSSR, and a massive 2TB SSD. Experience your favorite games like never before with up to 8K resolution support and a buttery-smooth 120fps at 4K.",
    price: 699,
    badge: { text: "NEW", variant: "dark" },
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-homepod-mini-cosmic-grey/1.webp",
    ],
    category: "gaming",
    subcategory: "gaming-console",
    tags: ["Console", "Next-Gen", "8K", "Ray Tracing", "VR Compatible"],
    countInStock: 10,
    rating: 4.8,
    numReviews: 3456,
    specs: [
      { label: "GPU", value: "16.7 TFLOPS Enhanced AMD RDNA" },
      { label: "CPU", value: "AMD Zen 2, 8-core @ 3.5GHz" },
      { label: "Storage", value: "2TB Custom NVMe SSD" },
      { label: "Output", value: "8K / 4K @ 120fps" },
      { label: "Ray Tracing", value: "Advanced hardware RT" },
      { label: "Features", value: "PSSR AI Upscaling, VR2 Compatible" },
    ],
    finishes: [{ name: "White", hex: "#F5F5F5", active: true }],
    variants: [{ name: "Standard", active: true }],
    reviews: [
      {
        _id: "r-gaming-1-1",
        rating: 5,
        title: "The definitive console experience",
        comment:
          "Ray tracing in Spider-Man 2 on this thing is jaw-dropping. PSSR upscaling makes every game look like a generational leap. The 2TB SSD means I actually don't have to delete games constantly.",
        userName: "Alex K.",
        initials: "AK",
        verified: true,
      },
      {
        _id: "r-gaming-1-2",
        rating: 5,
        title: "4K 120fps is the real deal",
        comment:
          "Playing Gran Turismo at 4K 120fps is unbelievably smooth. Load times are non-existent. This is what next-gen gaming was always supposed to feel like. Worth the upgrade from the base PS5.",
        userName: "Jason M.",
        initials: "JM",
        verified: true,
      },
      {
        _id: "r-gaming-1-3",
        rating: 4,
        title: "Incredible power, steep price",
        comment:
          "Performance is unquestionable — everything runs faster and looks better. The only reason I'm not giving 5 stars is the $699 price tag. If you have a 4K 120Hz TV though, it's absolutely worth it.",
        userName: "Diana V.",
        initials: "DV",
        verified: true,
      },
    ],
  },
  {
    _id: "gaming-2",
    brand: "Nintendo",
    name: "Switch 2",
    description:
      "The next generation of Nintendo gaming. Bigger screen, magnetic Joy-Con 2, backwards compatible.",
    longDescription:
      "Nintendo Switch 2 evolves the hybrid gaming concept with a larger 8-inch 1080p LCD display, the custom NVIDIA T239 processor for dramatically improved graphics, and magnetic Joy-Con 2 controllers that snap on and off effortlessly. Full backwards compatibility with original Switch games means your entire library comes with you, and the new GameChat feature makes online play more social than ever.",
    price: 449,
    badge: { text: "PRE-ORDER", variant: "dark" },
    image:
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/samsung-galaxy-tab-s8-plus-grey/4.webp",
    ],
    category: "gaming",
    subcategory: "gaming-console",
    tags: ["Console", "Portable", "Hybrid"],
    countInStock: 5,
    rating: 4.7,
    numReviews: 1234,
    specs: [
      { label: "Display", value: '8" LCD 1080p' },
      { label: "Processor", value: "NVIDIA Custom T239" },
      { label: "Controllers", value: "Magnetic Joy-Con 2" },
      { label: "Charging", value: "USB-C" },
      { label: "Compatibility", value: "Full Backwards Compatible" },
      { label: "Online", value: "GameChat, Nintendo Switch Online" },
    ],
    finishes: [
      { name: "Neon", hex: "#FF3C28", active: true },
      { name: "Gray", hex: "#828282" },
    ],
    variants: [{ name: "Standard", active: true }],
    reviews: [
      {
        _id: "r-gaming-2-1",
        rating: 5,
        title: "The upgrade we've been waiting for",
        comment:
          "The bigger screen and 1080p resolution make handheld mode so much better. Magnetic Joy-Cons are a brilliant improvement. My entire Switch library works perfectly on day one.",
        userName: "Maria G.",
        initials: "MG",
        verified: true,
      },
      {
        _id: "r-gaming-2-2",
        rating: 5,
        title: "Backwards compatibility is huge",
        comment:
          "Being able to play all my Switch games with improved performance sealed the deal. Breath of the Wild runs butter smooth. The new Mario Kart looks incredible on this hardware.",
        userName: "Tyler R.",
        initials: "TR",
        verified: true,
      },
      {
        _id: "r-gaming-2-3",
        rating: 4,
        title: "Great console, limited launch titles",
        comment:
          "Hardware is fantastic and the magnetic Joy-Cons feel premium. Deducting a star because the launch lineup is thin — relying mostly on backwards compatible titles for now. That said, the future looks bright.",
        userName: "Sofia P.",
        initials: "SP",
        verified: true,
      },
    ],
  },
  {
    _id: "gaming-3",
    brand: "Valve",
    name: "Steam Deck OLED 1TB",
    description:
      "The ultimate PC gaming handheld. HDR OLED display, 1TB storage, Wi-Fi 6E.",
    longDescription:
      "The Steam Deck OLED 1TB is the ultimate portable PC gaming device. Its 7.4-inch HDR OLED display at 90Hz delivers vibrant colors and true blacks, while the AMD APU (Zen 2 + RDNA 2) with 16GB LPDDR5 RAM handles demanding AAA titles with ease. With 1TB of NVMe storage, Wi-Fi 6E for faster downloads, and a 50Wh battery for extended play sessions, your entire Steam library goes wherever you do.",
    price: 549,
    image:
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/2.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/3.webp",
      "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/4.webp",
    ],
    category: "gaming",
    subcategory: "portable-gaming",
    tags: ["Portable", "PC Gaming", "OLED", "Steam"],
    countInStock: 15,
    rating: 4.8,
    numReviews: 2341,
    specs: [
      { label: "Display", value: '7.4" HDR OLED 1280×800 90Hz' },
      { label: "Processor", value: "AMD APU (Zen 2 + RDNA 2)" },
      { label: "Memory", value: "16GB LPDDR5" },
      { label: "Storage", value: "1TB NVMe SSD" },
      { label: "Wi-Fi", value: "Wi-Fi 6E" },
      { label: "Battery", value: "50Wh" },
    ],
    finishes: [{ name: "Black", hex: "#1A1A1A", active: true }],
    variants: [
      { name: "512GB" },
      { name: "1TB", active: true },
    ],
    reviews: [
      {
        _id: "r-gaming-3-1",
        rating: 5,
        title: "OLED makes all the difference",
        comment:
          "Going from the LCD to the OLED version is transformative. HDR in Elden Ring is breathtaking — the blacks are inky and colors pop. Plus the 90Hz refresh rate makes everything feel smoother.",
        userName: "Victor H.",
        initials: "VH",
        verified: true,
      },
      {
        _id: "r-gaming-3-2",
        rating: 5,
        title: "My entire Steam library in my hands",
        comment:
          "Having 1TB means I can carry dozens of games without worrying about storage. Baldur's Gate 3, Cyberpunk, Hades II — everything runs great. Wi-Fi 6E downloads are blazing fast.",
        userName: "Emma S.",
        initials: "ES",
        verified: true,
      },
      {
        _id: "r-gaming-3-3",
        rating: 4,
        title: "Best handheld PC, battery could be better",
        comment:
          "Performance and display are phenomenal. The controls feel great and SteamOS is intuitive. Battery life of 2-3 hours on demanding games is the only real weakness. Still the best handheld PC money can buy.",
        userName: "Oscar B.",
        initials: "OB",
        verified: true,
      },
    ],
  },
  {
    _id: "gaming-4",
    brand: "Microsoft",
    name: "Xbox Series X",
    description:
      "The fastest, most powerful Xbox ever. 4K gaming at 120fps with Quick Resume.",
    longDescription:
      "Xbox Series X delivers 12 TFLOPS of GPU power for true 4K gaming at up to 120fps. The custom 1TB SSD virtually eliminates load times, Quick Resume lets you jump between multiple games instantly, and Smart Delivery ensures you always play the best version of every game. With Dolby Vision and Dolby Atmos support, Xbox Series X delivers a premium entertainment experience.",
    price: 499,
    originalPrice: 549,
    badge: { text: "-9%", variant: "accent" },
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/2.webp",
    ],
    category: "gaming",
    subcategory: "gaming-console",
    tags: [
      "Console",
      "Next-Gen",
      "4K",
      "Game Pass",
      "Quick Resume",
    ],
    countInStock: 25,
    rating: 4.6,
    numReviews: 4532,
    specs: [
      { label: "GPU", value: "12 TFLOPS AMD RDNA 2" },
      { label: "Storage", value: "1TB Custom NVMe SSD" },
      { label: "Output", value: "4K @ 120fps" },
      { label: "Features", value: "Quick Resume, Smart Delivery" },
      { label: "Audio", value: "Dolby Vision & Dolby Atmos" },
      { label: "Connectivity", value: "Wi-Fi 6, HDMI 2.1" },
    ],
    finishes: [{ name: "Black", hex: "#1A1A1A", active: true }],
    variants: [{ name: "Standard", active: true }],
    reviews: [
      {
        _id: "r-gaming-4-1",
        rating: 5,
        title: "Game Pass is the best value in gaming",
        comment:
          "The hardware is powerful but Game Pass is the real star. Hundreds of games including day-one exclusives for a monthly fee. Quick Resume between 5+ games simultaneously is genuinely magical.",
        userName: "Nathan F.",
        initials: "NF",
        verified: true,
      },
      {
        _id: "r-gaming-4-2",
        rating: 4,
        title: "Solid console, needs more exclusives",
        comment:
          "The performance is excellent — Forza Motorsport at 4K 120fps is stunning. Quick Resume works flawlessly. My only gripe is the exclusive lineup is thinner than PlayStation's, but Game Pass compensates.",
        userName: "Rebecca A.",
        initials: "RA",
        verified: true,
      },
      {
        _id: "r-gaming-4-3",
        rating: 5,
        title: "Great deal at the sale price",
        comment:
          "Picked this up on sale and it's phenomenal. Backwards compatibility with three generations of Xbox games is incredible. Dolby Atmos in Hellblade II gave me chills. No regrets.",
        userName: "Daniel W.",
        initials: "DW",
        verified: true,
      },
    ],
  },
  {
    _id: "gaming-5",
    brand: "Meta",
    name: "Quest 3S",
    description:
      "Mixed reality for everyone. Affordable VR/MR with Snapdragon XR2 Gen 2.",
    longDescription:
      "Meta Quest 3S brings mixed reality to the mainstream with the powerful Snapdragon XR2 Gen 2 processor and full-color passthrough cameras that seamlessly blend digital content with your physical space. At $299, it's the most accessible way to experience high-quality VR gaming, fitness apps, and productivity tools. With hand tracking, 128GB storage, and a growing library of MR-enhanced apps, Quest 3S makes the future of computing approachable for everyone.",
    price: 299,
    badge: { text: "VR", variant: "dark" },
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpower-wireless-charger/1.webp",
    ],
    category: "gaming",
    subcategory: "vr-headset",
    tags: ["VR", "Mixed Reality", "Portable", "Standalone"],
    countInStock: 30,
    rating: 4.5,
    numReviews: 1876,
    specs: [
      { label: "Processor", value: "Snapdragon XR2 Gen 2" },
      { label: "Passthrough", value: "Full-color Mixed Reality" },
      { label: "Storage", value: "128GB" },
      { label: "Display", value: "LCD, 1832×1920 per eye" },
      { label: "Battery", value: "2.5 hours" },
      { label: "Tracking", value: "Inside-out + Hand Tracking" },
    ],
    finishes: [{ name: "White", hex: "#F5F5F5", active: true }],
    variants: [
      { name: "128GB", active: true },
      { name: "256GB" },
    ],
    reviews: [
      {
        _id: "r-gaming-5-1",
        rating: 5,
        title: "Mixed reality is mind-blowing",
        comment:
          "The full-color passthrough is a game changer — virtual objects sitting on my real coffee table is surreal. Beat Saber, Asgard's Wrath 2, and Superhot VR all run beautifully. Best $299 I've spent on gaming.",
        userName: "Jake P.",
        initials: "JP",
        verified: true,
      },
      {
        _id: "r-gaming-5-2",
        rating: 4,
        title: "Great entry point to VR",
        comment:
          "Hand tracking works surprisingly well and the setup is dead simple — no PC needed. The game library has grown massively. Battery life of 2.5 hours is the main limitation, but a battery pack fixes that.",
        userName: "Lucy M.",
        initials: "LM",
        verified: true,
      },
      {
        _id: "r-gaming-5-3",
        rating: 5,
        title: "VR fitness is addictive",
        comment:
          "I bought this for gaming but it's become my primary workout tool. Supernatural and FitXR are incredible. The comfort is good for extended sessions and I love that it's completely standalone.",
        userName: "Andre B.",
        initials: "AB",
        verified: true,
      },
    ],
  },
  {
    _id: "gaming-6",
    brand: "Sony",
    name: "DualSense Edge Wireless Controller",
    description:
      "The ultra-customizable PS5 controller for competitive gamers.",
    longDescription:
      "The DualSense Edge Wireless Controller puts you in complete command with customizable controls, remappable back buttons, adjustable trigger lengths, and swappable stick caps and modules. Designed for competitive gamers who demand precision, it features function buttons for on-the-fly profile switching, a braided USB-C cable for wired play, and a premium carrying case. Every aspect of this controller can be tailored to your playstyle.",
    price: 199,
    image:
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/1.webp",
      "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-magsafe-battery-pack/2.webp",
    ],
    category: "gaming",
    subcategory: "gaming-accessory",
    tags: ["Controller", "PS5", "Competitive", "Customizable"],
    countInStock: 20,
    rating: 4.6,
    numReviews: 876,
    specs: [
      { label: "Controls", value: "Fully Customizable Button Mapping" },
      { label: "Back Buttons", value: "2 Remappable Paddles" },
      { label: "Triggers", value: "Adjustable Travel & Dead Zones" },
      { label: "Sticks", value: "Swappable Caps & Modules" },
      { label: "Profiles", value: "Multiple, Function Button Switch" },
      { label: "Connection", value: "Wireless / Braided USB-C" },
      { label: "Includes", value: "Carrying Case, Extra Caps" },
    ],
    finishes: [{ name: "White", hex: "#F5F5F5", active: true }],
    variants: [{ name: "Standard", active: true }],
    reviews: [
      {
        _id: "r-gaming-6-1",
        rating: 5,
        title: "Competitive edge, literally",
        comment:
          "The back paddles and adjustable triggers have genuinely improved my performance in FPS games. Being able to switch profiles mid-game with the function buttons is clutch. Build quality feels premium.",
        userName: "Ryan K.",
        initials: "RK",
        verified: true,
      },
      {
        _id: "r-gaming-6-2",
        rating: 4,
        title: "Great controller, pricey but worth it",
        comment:
          "The customization is incredible — swappable stick caps, trigger stops, back buttons. The carrying case is a nice touch. Only downside is the battery life is shorter than the standard DualSense. Still my go-to controller.",
        userName: "Michelle T.",
        initials: "MT",
        verified: true,
      },
      {
        _id: "r-gaming-6-3",
        rating: 5,
        title: "Best controller I've ever used",
        comment:
          "The stick modules being replaceable is genius — no more stick drift worries. Trigger dead zone adjustment is perfect for shooters. The braided USB-C cable is high quality. This is THE controller for serious gamers.",
        userName: "Brian S.",
        initials: "BS",
        verified: true,
      },
    ],
  },
];
