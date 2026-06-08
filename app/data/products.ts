export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  from: string;
  via: string;
  to: string;
  isNew?: boolean;
  isBestseller?: boolean;
  description?: string;
  imagePath?: string;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  from: string;
  via: string;
  to: string;
  itemCount: number;
}

export const clothingProducts: Product[] = [
  { id: "c13", name: "Gathered Cerulean Silk Duster",     category: "Outerwear", price: "$310",   from: "#5BA8D0", via: "#8CC8E8", to: "#C0E4F8", isNew: true,        imagePath: "/clothes/Gathered-Cerulean-Duster.png" },
  { id: "c14", name: "Floral Silk Button-Down",           category: "Tops",      price: "$185",   from: "#C8849A", via: "#E8B0C0", to: "#F8D8E4",               imagePath: "/clothes/Floral-Silk-Button-Down.png" },
  { id: "c15", name: "Coral Striped Linen Tunic",         category: "Tops",      price: "$160",   from: "#D87060", via: "#E89880", to: "#F8C0A8",               imagePath: "/clothes/Coral-Striped-Tunic.png" },
  { id: "c16", name: "Velvet Ikat Statement Coat",        category: "Outerwear", price: "$450",   from: "#1E472E", via: "#2D6B42", to: "#5A9A68", isBestseller: true, imagePath: "/clothes/Velvet-Ikat-Statement-Coat.png" },
  { id: "c17", name: "Flowing Marigold Maxi Dress",       category: "Dresses",   price: "$275",   from: "#C8A020", via: "#E8C040", to: "#F8E090",               imagePath: "/clothes/Flowing-Marigold-Maxi.png" },
  { id: "c18", name: "Felted Forest Green Waistcoat",     category: "Blazers",   price: "$195",   from: "#2D5A27", via: "#4A7A40", to: "#80A870",               imagePath: "/clothes/Felted-Green-Waistcoat.png" },
  { id: "c19", name: "Oversized Gingham Check Tunic",     category: "Tops",      price: "$170",   from: "#D8C8A0", via: "#E8D8B8", to: "#F4EDD8",               imagePath: "/clothes/Oversized-Gingham-Tunic.png" },
  { id: "c20", name: "Wide-Leg Raw Linen Trouser",        category: "Trousers",  price: "$210",   from: "#C8B890", via: "#D8CCA8", to: "#EAE0CC",               imagePath: "/clothes/Raw-Linen-Trouser.png" },
  { id: "c21", name: "Ribbed Cream Cashmere Cardigan",    category: "Co-ords",   price: "$520",   from: "#EAE0D0", via: "#F2EAE0", to: "#FAF5EE", isBestseller: true, imagePath: "/clothes/Ribbed-Cream-Cardigan.png" },
  { id: "c22", name: "Burgundy Block-Print Maxi Dress",   category: "Dresses",   price: "$320",   from: "#6B2035", via: "#922845", to: "#C05060",               imagePath: "/clothes/Burgundy-Block-Print-Maxi-Dress.png" },
  { id: "c23", name: "Structured Peach Zip Jacket",       category: "Outerwear", price: "$245",   from: "#E8A88A", via: "#F0C0A8", to: "#FAE0D0", isNew: true,        imagePath: "/clothes/Structured-Peach-Zip-Jacket.png" },
  { id: "c24", name: "Emerald Silk-Blend Trench",         category: "Outerwear", price: "$380",   from: "#1E6B4A", via: "#2D9060", to: "#60C090",               imagePath: "/clothes/Emerald-Silk-Blend-Trench.png" },
];

export const beautyProducts: Product[] = [
  { id: "b1",  name: "Midnight Rose Serum",           category: "Skincare",  price: "$185", from: "#C8849A", via: "#E8A8B8", to: "#F5D8E0" },
  { id: "b2",  name: "Desert Glow Face Oil",           category: "Skincare",  price: "$145", from: "#C9A96E", via: "#E8D5B0", to: "#F5EDD5", isBestseller: true },
  { id: "b3",  name: "Velvet Lip Elixir in Bordeaux",  category: "Makeup",    price: "$62",  from: "#6B1A2A", via: "#A03050", to: "#C86880" },
  { id: "b4",  name: "Luminous Skin Tint SPF 30",      category: "Makeup",    price: "$88",  from: "#E8D5B0", via: "#F0E0C0", to: "#F8EDD8", isNew: true },
  { id: "b5",  name: "Arctic Mist Hydra-Spray",        category: "Skincare",  price: "$95",  from: "#A8C8E8", via: "#D0E8F5", to: "#F0F7FF" },
  { id: "b6",  name: "Golden Hour Body Oil",            category: "Body",      price: "$120", from: "#B87A0A", via: "#E8A820", to: "#F9DFA0", isBestseller: true },
  { id: "b7",  name: "Amber Solid Perfume",             category: "Fragrance", price: "$210", from: "#C87820", via: "#E8A84A", to: "#F8D890" },
  { id: "b8",  name: "Onyx Volumising Mascara",         category: "Makeup",    price: "$48",  from: "#1A1A1A", via: "#2C2C2C", to: "#4A4A4A" },
  { id: "b9",  name: "Rose Petal Exfoliating Mask",     category: "Skincare",  price: "$110", from: "#D8849A", via: "#EAA8B8", to: "#F8D8E4", isNew: true },
  { id: "b10", name: "Neroli & Iris Eau de Parfum",     category: "Fragrance", price: "$320", from: "#E8C878", via: "#F0DCA0", to: "#FAF0D0", isBestseller: true },
  { id: "b11", name: "Satin Setting Powder",            category: "Makeup",    price: "$72",  from: "#EAD8C0", via: "#F2E4D0", to: "#FAF0E8" },
  { id: "b12", name: "Jasmine Velvet Body Butter",      category: "Body",      price: "$98",  from: "#F0E0C0", via: "#F8EAD0", to: "#FDF6EC" },
];

export const accessoryProducts: Product[] = [
  { id: "a2",  name: "Pearl & Onyx Drop Earrings",      category: "Jewelry", price: "$310", from: "#1A1033", via: "#2D1B69", to: "#6B3FA0" },
  { id: "a4",  name: "Hammered Gold Bangles (Set of 3)", category: "Jewelry", price: "$395", from: "#B87A0A", via: "#E8A820", to: "#F9DFA0", isNew: true },
  { id: "a9",  name: "Artisanal Beaded Statement Cuff", category: "Jewelry", price: "$145", from: "#C8A84B", via: "#D8B860", to: "#ECD090", isNew: true, imagePath: "/clothes/Artisanal-Beaded-Necklace.png" },
  { id: "a12", name: "Twisted Rope Chain Necklace",     category: "Jewelry", price: "$255", from: "#C8A84B", via: "#E0C060", to: "#F0D880" },
];

export const collections: Collection[] = [
  {
    id: "col1",
    title: "The Desert Edit",
    subtitle: "Spring / Summer 2025",
    description: "Sun-bleached terracotta, hand-dyed silk, and raw linen. A meditation on slow craft and wide open spaces.",
    from: "#C9A96E", via: "#E8D5B0", to: "#F5EDD5",
    itemCount: 24,
  },
  {
    id: "col2",
    title: "Midnight Bloom",
    subtitle: "Evening Collection",
    description: "Velvet darkness meets embroidered florals. Drama made intimate.",
    from: "#1A1033", via: "#2D1B69", to: "#6B3FA0",
    itemCount: 18,
  },
  {
    id: "col3",
    title: "Alpine Ghost",
    subtitle: "Winter Essentials",
    description: "Sculptural wool and ghost-white mohair. Austere, precise, alive.",
    from: "#D8D8D2", via: "#EAEAE6", to: "#F6F6F4",
    itemCount: 21,
  },
  {
    id: "col4",
    title: "Golden Hour",
    subtitle: "Signature Series",
    description: "Liquid brass silk and hammered gold. The last light before dusk settles.",
    from: "#B87A0A", via: "#E8A820", to: "#F9DFA0",
    itemCount: 16,
  },
];
