import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export default function pixelsToRem(pixels, htmlFontSize) {
  var baseFontSize = htmlFontSize; // Base font size in pixels
  var remValue = pixels / baseFontSize;
  return remValue + "rem";
}
