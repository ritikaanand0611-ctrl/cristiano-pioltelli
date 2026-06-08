export interface LookbookItem {
  id: string;
  label: string;
  num: string;        // zero-padded number e.g. "01"
  title: string;
  description: string;
  season: string;
  imagePath: string;
  size: "tall" | "wide" | "square";
}

export const LOOKBOOK_DATA: LookbookItem[] = [
  {
    id: "look-01",
    label: "Look 01",
    num: "01",
    title: "Nomadic Rose",
    description: "A study in contrast: structured peach outerwear layered over flowing, geometrically-printed artisanal burgundy fabric.",
    season: "SS25",
    imagePath: "/images_hero/look-01-nomadic-rose.png",
    size: "tall",
  },
  {
    id: "look-02",
    label: "Look 02",
    num: "02",
    title: "Emerald Voyage",
    description: "Fluid, jewel-toned outerwear draped effortlessly over structured, nautical-inspired woven stripes.",
    season: "SS25",
    imagePath: "/images_hero/look-02-emerald-voyage.png",
    size: "wide",
  },
  {
    id: "look-03",
    label: "Look 03",
    num: "03",
    title: "Cerulean Bloom",
    description: "Soft, gathered sky-blue cotton layered over a delicate, vibrant floral silk set.",
    season: "SS25",
    imagePath: "/images_hero/look-03-cerulean-bloom.png",
    size: "square",
  },
  {
    id: "look-04",
    label: "Look 04",
    num: "04",
    title: "Earthen Layers",
    description: "A masterclass in texture: raw sage gauze, warm coral stripes, and relaxed cream wool.",
    season: "SS25",
    imagePath: "/images_hero/look-04-earthen-layers.png",
    size: "tall",
  },
  {
    id: "look-05",
    label: "Look 05",
    num: "05",
    title: "Saffron Tapestry",
    description: "Bold, artisanal velvet ikat paired with sun-bleached saffron layers for a deeply opulent silhouette.",
    season: "SS25",
    imagePath: "/images_hero/look-05-saffron-tapestry.jpg",
    size: "square",
  },
  {
    id: "look-06",
    label: "Look 06",
    num: "06",
    title: "Pastoral Edge",
    description: "Eclectic countryside tailoring mixing oversized gingham, structured wool, and raw linen.",
    season: "SS25",
    imagePath: "/images_hero/look-06-pastoral-edge.png",
    size: "wide",
  },
];
