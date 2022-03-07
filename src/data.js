import VARIETYPACK from "./assets/IMG/Chocolate-Bar-Packaging-Mockup-removebg-preview.png";
import mockup from "./assets/IMG/Snack-Bar-Mockup-removebg-preview.png";
import BarsFront from "./assets/IMG/4Bars-front.png";
import BarsSide from "./assets/IMG/VARIETY_SPLIT_LG_1000x.png";
import ALMONDFront from "./assets/IMG/ALMOND-FRONT.png";
import ALMONDOverhead from "./assets/IMG/ALMOND-OVERHEAD.png";
import BANANAFront from "./assets/IMG/BANANA-FRONT.png";
import BANANAOverhead from "./assets/IMG/BANANA-OVERHEAD.png";
import DOUBLEDARKFront from "./assets/IMG/DOUBLEDARK-FRONT.png";
import DOUBLEDARKOverhead from "./assets/IMG/DOUBLEDARK-OVERHEAD.png";
import HAZELNUTFront from "./assets/IMG/HAZELNUT-FRONT.png";
import HAZELNUTOverhead from "./assets/IMG/HAZELNUT-OVERHEAD.png";
import SALTEDFront from "./assets/IMG/SALTED-FRONT.png";
import SALTEDOverhead from "./assets/IMG/SALTED-OVERHEAD.png";
// import SALTEDSide from "./assets/IMG/SALTED-SIDE.png"

export const Products = [
  {
    id: 1,
    name: "VARIETY PACK",
    img: VARIETYPACK,
    imgFront: BarsFront,
    imgOverhead: BarsSide,
    price: 18.5,
    priceSubs: (15.5).toFixed(2),
    category: "Multipack",
    color: "#EB3581",
    bgColor: "#CDA0FF",
    reviews: "69",
    description:
      "Blissful flavor, with just a little bit of sweetness. The Big Four - Salted Peanut, Banana Pecan, Hazelnut Cafe and Almond Horchata - are all plant-based, and made with zero grams of sugar.",
  },
  {
    id: 2,
    name: "SALTED PEANUT",
    img: mockup,
    imgFront: SALTEDFront,
    imgOverhead: SALTEDOverhead,
    price: 18.5,
    priceSubs: (15.5).toFixed(2),
    category: "Multipack",
    color: "#d84c29",
    bgColor: "#f7c4de",
    reviews: "26",
    description:
      "We went nuts on flavor, not on sweetness. With zero grams of sugar, this grown-up candy bar will transport you to a world of midnight movies, holding hands in the dark, and chocolatey peanut delights.",
  },
  {
    id: 3,
    name: "HAZELNUT CAFE",
    img: mockup,
    imgFront: HAZELNUTFront,
    imgOverhead: HAZELNUTOverhead,
    price: 18.5,
    priceSubs: (15.5).toFixed(2),
    category: "Multipack",
    color: "#f7d12f",
    bgColor: "#7e553f",
    reviews: "9",
    description:
      "A latte flavor, a little sweetness. With zero grams of sugar, this grown-up candy bar will remind you of crisp autumn days, crackling leaves, and perfectly steamed hazelnut lattes.",
  },
  {
    id: 4,
    name: "ALMOND HORCHATA",
    img: mockup,
    imgFront: ALMONDFront,
    imgOverhead: ALMONDOverhead,
    price: 18.5,
    priceSubs: (15.5).toFixed(2),
    category: "Multipack",
    color: "#f4c2db",
    bgColor: "#3e9a47",
    reviews: "13",
    description:
      "A lotta horchata, a little sweetness. With ZERO grams of sugar, this grown-up candy bar will leave you dreaming of iced horchatas, jingling bodega doors, and leisurely summer strolls.",
  },
  {
    id: 5,
    name: "DOUBLE DARK MINT",
    img: mockup,
    imgFront: DOUBLEDARKFront,
    imgOverhead: DOUBLEDARKOverhead,
    price: 18.5,
    priceSubs: (15.5).toFixed(2),
    category: "Multipack",
    color: "#5ddc9c",
    bgColor: "#7e553f",
    reviews: "16",
    description:
      "An avalanche of flavor, a light flurry of sweetness. With zero grams of sugar, this grown-up candy bar will have you dreaming of snowball fights, puffy coats, and minty mugs of hot chocolate.",
  },
  {
    id: 6,
    name: "BANANA PECAN",
    img: mockup,
    imgFront: BANANAFront,
    imgOverhead: BANANAOverhead,
    price: 18.5,
    priceSubs: (15.5).toFixed(2),
    category: "Multipack",
    color: "#3e9a47",
    bgColor: "#f7d12f",
    reviews: "8",
    description:
      "We went bananas on flavor, not on sweetness. With zero grams of sugar, this grown-up candy bar will remind you of Saturday mornings, sunlit kitchens, and toasty banana pecan muffins.",
  },
];
