export interface LookItem {
  id: string;
  name: string;
  category: string;
  price: string;
}

export interface Look {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  imagePath: string;
  /** Tailwind gradient classes used as editorial placeholder until real photos are placed in /public/images/ */
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  items: LookItem[];
}

export const looks: Look[] = [
  {
    id: "look-01",
    subtitle: "Look 01",
    title: "Desert Reverie",
    description:
      "Raw linen and hand-dyed silk meet sun-bleached leather. A meditation on slow craft and wide open spaces.",
    imagePath: "/images/look-01.jpg",
    gradientFrom: "#C9A96E",
    gradientVia: "#E8D5B0",
    gradientTo: "#F5EDD5",
    items: [
      {
        id: "i-01-a",
        name: "Terracotta Linen Wrap Dress",
        category: "Dress",
        price: "$485",
      },
      {
        id: "i-01-b",
        name: "Hand-Hammered Gold Cuff",
        category: "Jewelry",
        price: "$220",
      },
      {
        id: "i-01-c",
        name: "Obi-Tie Leather Belt",
        category: "Accessories",
        price: "$145",
      },
    ],
  },
  {
    id: "look-02",
    subtitle: "Look 02",
    title: "Midnight Bloom",
    description:
      "Midnight velvet and embroidered florals whisper of candlelit ateliers. Darkness made romantic.",
    imagePath: "/images/look-02.jpg",
    gradientFrom: "#1A1033",
    gradientVia: "#2D1B69",
    gradientTo: "#6B3FA0",
    items: [
      {
        id: "i-02-a",
        name: "Midnight Velvet Coat",
        category: "Outerwear",
        price: "$890",
      },
      {
        id: "i-02-b",
        name: "Embroidered Silk Slip Dress",
        category: "Dress",
        price: "$625",
      },
      {
        id: "i-02-c",
        name: "Pearl & Onyx Drop Earrings",
        category: "Jewelry",
        price: "$310",
      },
    ],
  },
  {
    id: "look-03",
    subtitle: "Look 03",
    title: "Alpine Ghost",
    description:
      "Sculptural wool and ghost-white mohair. The cold made wearable — austere, precise, alive.",
    imagePath: "/images/look-03.jpg",
    gradientFrom: "#D8D8D2",
    gradientVia: "#EAEAE6",
    gradientTo: "#F6F6F4",
    items: [
      {
        id: "i-03-a",
        name: "Oversized Ivory Mohair Coat",
        category: "Outerwear",
        price: "$1,150",
      },
      {
        id: "i-03-b",
        name: "Wool Cigarette Trousers",
        category: "Bottoms",
        price: "$380",
      },
      {
        id: "i-03-c",
        name: "Sterling Sculptural Collar",
        category: "Jewelry",
        price: "$275",
      },
    ],
  },
  {
    id: "look-04",
    subtitle: "Look 04",
    title: "Golden Hour",
    description:
      "Liquid brass silk and hammered gold — a look born from the last hour of light before dusk settles.",
    imagePath: "/images/look-04.jpg",
    gradientFrom: "#B87A0A",
    gradientVia: "#E8A820",
    gradientTo: "#F9DFA0",
    items: [
      {
        id: "i-04-a",
        name: "Liquid Brass Bias-Cut Gown",
        category: "Dress",
        price: "$1,200",
      },
      {
        id: "i-04-b",
        name: "Hammered Gold Bangles (Set of 3)",
        category: "Jewelry",
        price: "$395",
      },
    ],
  },
];
