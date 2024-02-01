import { colors } from "./colors";

export interface DataAside {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  albumId: number;
  link?: string;
}

export const data: DataAside[] = [
  {
    id: "1",
    title: "Cabecera",
    link: "/Cabecera.png",
    albumId: 1,
    color: colors.yellow,
  },
  {
    id: "2",
    title: "Píe de página",
    link: "/Pie de pagina.png",
    albumId: 2,
    color: colors.yellow,
  },
  {
    id: "3",
    title: "Contenido",
    link: "/Contenido.png",
    albumId: 3,
    color: colors.yellow,
  },
  {
    id: "4",
    title: "Gallery",
    link: "/Galeria.png",
    albumId: 4,
    color: colors.yellow,
  },
  {
    id: "5",
    title: "Testimonios",
    link: "/Testimonio.png",
    albumId: 5,
    color: colors.yellow,
  },
  {
    id: "6",
    title: "Contacto",
    link: "/Contacto.png",
    albumId: 6,
    color: colors.yellow,
  },
  {
    id: "7",
    title: "Equipo de trabajo",
    link: "/Equipo.png",
    albumId: 7,
    color: colors.yellow,
  },
];

export const moreData = data.map((item) => ({
  ...item,
  id: item.id + "_more",
}));

export const sideData = data.map((item) => ({
  ...item,
  id: item.id + "_side",
}));

export const allData = [...data, ...moreData, ...sideData];

export interface Images {
  id: number;
  imageId: number;
  image: string;
}

export const images: Images[] = [
  {
    id: 1,
    imageId: 1,
    image: "/Cabecera index.png",
  },
  {
    id: 2,
    imageId: 2,
    image: "/Cabecera index.png",
  },
  {
    id: 3,
    imageId: 1,
    image: "/Cabecera index.png",
  },
];

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    id: 1,
    albumId: 1,
    title: "Moonlit Walk",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:12",
  },
  {
    id: 2,
    albumId: 1,
    title: "Coffee Daze",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:07",
  },
  {
    id: 3,
    albumId: 1,
    title: "Skyline Serenade",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:50",
  },

  {
    id: 1,
    albumId: 2,
    title: "Silent Rain",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:40",
  },
  {
    id: 2,
    albumId: 2,
    title: "Lost Pages",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:20",
  },
  {
    id: 3,
    albumId: 2,
    title: "Midnight Tales",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:50",
  },
  {
    id: 4,
    albumId: 2,
    title: "City Lights",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:30",
  },
  {
    id: 5,
    albumId: 2,
    title: "Night Drive",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "4:20",
  },
  {
    id: 1,
    albumId: 3,
    title: "Lunar",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:40",
  },
  {
    id: 2,
    albumId: 3,
    title: "Go go go!",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:20",
  },
  {
    id: 3,
    albumId: 3,
    title: "Keep focus!",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:40",
  },
  {
    id: 4,
    albumId: 3,
    title: "JavaScript is the way",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:10",
  },
  {
    id: 5,
    albumId: 3,
    title: "No more TypeScript for me",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:10",
  },
  {
    id: 1,
    albumId: 4,
    title: "Lunar",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:40",
  },
  {
    id: 2,
    albumId: 4,
    title: "Go go go!",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:20",
  },
  {
    id: 3,
    albumId: 4,
    title: "Keep focus!",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:40",
  },
  {
    id: 4,
    albumId: 4,
    title: "JavaScript is the way",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:10",
  },
  {
    id: 5,
    albumId: 4,
    title: "No more TypeScript for me",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:10",
  },
  {
    id: 1,
    albumId: 5,
    title: "Moonlit Walk",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:12",
  },
  {
    id: 2,
    albumId: 5,
    title: "Coffee Daze",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:07",
  },
  {
    id: 3,
    albumId: 5,
    title: "Skyline Serenade",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:50",
  },
  {
    id: 4,
    albumId: 5,
    title: "Urban Echoes",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:30",
  },
  {
    id: 5,
    albumId: 5,
    title: "Night's End",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:20",
  },
];
