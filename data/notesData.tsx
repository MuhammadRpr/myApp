import { ImageSourcePropType } from "react-native";

export const notes: Note[] = [
  {
    id: 1,
    image: require("@/assets/images/prog0.png"),
    title: "belajar",
    desc: "mudah paham dfhd gjh",
    date: "12 juni 2024",
  },
  {
    id: 2,
    image: require("@/assets/images/prog1.png"),
    title: "belajar2",
    desc: "mudah paham2 dfhdg hgsdh",
    date: "13 juni 2024",
  },
  {
    id: 3,
    image: require("@/assets/images/prog2.png"),
    title: "belajar3",
    desc: "mudah paham3 hdthdg hgf ",
    date: "13 juni 2024",
  },
  {
    id: 4,
    image: require("@/assets/images/prog3.png"),
    title: "belajar4",
    desc: "mudah paham4 h dgvbd gjhrsyjdggb rhjru trhdf",
    date: "16 juni 2024",
  },
  {
    id: 5,
    image: require("@/assets/images/prog3.png"),
    title: "belajar4",
    desc: "mudah paham4 dshrs ydhfgjrsh fdghrs",
    date: "16 juni 2024",
  },
  {
    id: 6,
    image: require("@/assets/images/prog3.png"),
    title: "belajar4",
    desc: "mudah paham4 fdgsh rtwufg  s    h    yf     ",
    date: "16 juni 2024",
  },
  {
    id: 7,
    image: require("@/assets/images/prog3.png"),
    title: "belajar4",
    desc: "mudah paham4 dghfgjrwjfgj fggj gjf f jsf",
    date: "16 juni 2024",
  },
  {
    id: 8,
    image: require("@/assets/images/prog3.png"),
    title: "belajar4",
    desc: "mudah paham4 fdjrsfytf fg jffgj sfjs ",
    date: "16 juni 2024",
  },
];

type Note = {
  id: number;
  image: ImageSourcePropType | { uri: string };
  title: string;
  desc: string;
  date: string;
};
