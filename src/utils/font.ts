import { Poppins } from "next/font/google";
import { Indie_Flower } from "next/font/google";
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
const indieFlower = Indie_Flower({ weight: "400", subsets: ["latin"] });
export const fontPoppins = poppins.className;
export const fontIndieFlower = indieFlower.className
