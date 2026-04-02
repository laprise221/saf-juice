export const siteData = {
  name: "Saf Juice",
  tagline: "Jus de fruits frais, sans sucres ajout\u00e9s",
  description:
    "Des jus de fruits 100% naturels, press\u00e9s \u00e0 froid, sans sucres ajout\u00e9s. Livr\u00e9s directement chez vous \u00e0 Dakar. Bouteilles de 330ml.",
  phone: "77 436 16 76",
  instagram: "@safjuice",
  instagramUrl: "https://www.instagram.com/safjuice",
  delivery: "Livraison uniquement",
  events: "Partenariat pour vos \u00e9v\u00e9nements, contactez-nous !",
  bottleSize: "330 ml",
  philosophy: [
    {
      title: "100% Naturel",
      text: "Aucun sucre ajout\u00e9, aucun conservateur. Juste des fruits frais press\u00e9s avec soin.",
    },
    {
      title: "Livr\u00e9 chez vous",
      text: "Commandez par t\u00e9l\u00e9phone ou Instagram, on vous livre partout \u00e0 Dakar.",
    },
    {
      title: "Saveurs locales",
      text: "Bouye, bissab, gingembre, baobab \u2014 les go\u00fbts du S\u00e9n\u00e9gal dans chaque bouteille.",
    },
    {
      title: "\u00c9v\u00e9nements",
      text: "Mariages, s\u00e9minaires, anniversaires \u2014 on pr\u00e9pare vos jus sur mesure.",
    },
  ],
};

export type Juice = {
  name: string;
  ingredients: string;
  price: number;
};

export type Shot = {
  name: string;
  ingredients: string;
  price: number;
};

export const menuJus: Juice[] = [
  { name: "Jus d\u00e9tox", ingredients: "Citron, pomme, concombre", price: 2000 },
  {
    name: "Jus immunit\u00e9",
    ingredients: "Gingembre, curcuma, orange, citron",
    price: 2000,
  },
  { name: "Jus bissab", ingredients: "Hibiscus, menthe", price: 1200 },
  {
    name: "Jus passion",
    ingredients: "Fruit de la passion, bouye, orange",
    price: 1500,
  },
  {
    name: "Jus bissab blanc",
    ingredients: "Hibiscus blanc, ananas",
    price: 1500,
  },
  { name: "Jus gingembre", ingredients: "Gingembre, ananas", price: 1500 },
  { name: "Jus mangue", ingredients: "Mangue", price: 2000 },
  { name: "Jus goyave", ingredients: "Goyave, bouye", price: 1500 },
  {
    name: "Jus d\u00e9tox carotte",
    ingredients: "Carotte, gingembre, orange",
    price: 2000,
  },
  {
    name: "Jus fortifiant",
    ingredients: "Gingembre, citron, miel",
    price: 2000,
  },
  {
    name: "Jus past\u00e8que",
    ingredients: "Past\u00e8que, gingembre (optionnel)",
    price: 1500,
  },
  { name: "Jus bouye fraise", ingredients: "Bouye, fraise", price: 1500 },
  {
    name: "Jus bouye",
    ingredients: "Bouye, fleur d\u2019oranger",
    price: 1500,
  },
  {
    name: "Jus fruits rouges",
    ingredients: "Bouye, fruits rouges",
    price: 1500,
  },
  { name: "Jus bouye mangue", ingredients: "Bouye, mangue", price: 1500 },
  { name: "Jus fraise ananas", ingredients: "Fraise, ananas", price: 2000 },
  { name: "Jus bouye ananas", ingredients: "Bouye, ananas", price: 1500 },
  {
    name: "Jus d\u00e9fense",
    ingredients: "Carotte, gingembre, orange, citron, mandarine",
    price: 2000,
  },
  { name: "Jus fraise", ingredients: "Fraise", price: 2000 },
  {
    name: "Jus tonic",
    ingredients: "Pamplemousse, orange",
    price: 2000,
  },
];

export const menuShots: Shot[] = [
  {
    name: "Shot br\u00fble-graisse",
    ingredients: "Ananas, citron",
    price: 1200,
  },
  {
    name: "Shot immunit\u00e9",
    ingredients: "Gingembre, curcuma, orange, citron",
    price: 1200,
  },
];

export const photos = [
  {
    src: "/photos/jus.png",
    alt: "Jus bouye mangue dans la verdure",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/photos/jsu2.png",
    alt: "Bouteilles de jus past\u00e8que",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/photos/jus3.png",
    alt: "Jus gingembre ananas",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/photos/jus5.png",
    alt: "Jus d\u00e9tox",
    span: "col-span-2 row-span-1",
  },
];

export const avis = [
  {
    name: "Aminata D.",
    text: "Les jus sont incroyables ! Le bissab blanc est mon pr\u00e9f\u00e9r\u00e9, et la livraison est toujours rapide.",
    rating: 5,
  },
  {
    name: "Moussa S.",
    text: "Depuis que j\u2019ai d\u00e9couvert Saf Juice, je ne bois plus que \u00e7a. Le jus d\u00e9tox carotte est top pour le matin.",
    rating: 5,
  },
  {
    name: "Fatou N.",
    text: "Parfait pour nos \u00e9v\u00e9nements ! Ils ont g\u00e9r\u00e9 le buffet jus de notre mariage, tout le monde a ador\u00e9.",
    rating: 5,
  },
  {
    name: "Ibrahima K.",
    text: "Le shot br\u00fble-graisse est devenu mon rituel du matin. Qualit\u00e9 au top, je recommande \u00e0 100%.",
    rating: 5,
  },
];

export const tickerWords = [
  "FRUITS FRAIS",
  "SANS SUCRES AJOUT\u00c9S",
  "LIVRAISON DAKAR",
  "PRESS\u00c9 \u00c0 FROID",
  "100% NATUREL",
  "BOUYE",
  "BISSAB",
  "GINGEMBRE",
  "MANGUE",
  "D\u00c9TOX",
  "IMMUNIT\u00c9",
  "VITAMINE C",
];
