// data.js
// ---- imports unchanged, just add whatever extra sub-images you need ----
import Tab3Image1 from "../../Assets/BrilliantVisuals/Tab3Image1.png";
import Tab1PopupImage from "../../Assets/BrilliantVisuals/Tab3Image2.png";

import AnimationA1 from "../../Assets/BrilliantVisuals/Animation 1/Anim 1.1.png";
import AnimationA2 from "../../Assets/BrilliantVisuals/Animation 1/Anim 1.2.png";
import AnimationA3 from "../../Assets/BrilliantVisuals/Animation 1/Anim 1.3.png";

import AnimationB1 from "../../Assets/BrilliantVisuals/Animation 2/Anim 2.1.png";
import AnimationB2 from "../../Assets/BrilliantVisuals/Animation 2/Anim 2.2.png";
import AnimationD1 from "../../Assets/BrilliantVisuals/Animation 4/Anim 4.1.png";
import AnimationD2 from "../../Assets/BrilliantVisuals/Animation 4/Anim 4.2.png";

// ---------------------icons---------------------------------------
import Icon1 from "../../Assets/BrilliantVisuals/Icons/lcd_icon.svg";
import Icon2 from "../../Assets/BrilliantVisuals/Icons/Frame 48751-2.svg";
import Icon3 from "../../Assets/BrilliantVisuals/Icons/hd_icon.svg";
import Icon4 from "../../Assets/BrilliantVisuals/Icons/rain_protection.svg";

import kioskFrame from "../../Assets/BrilliantVisuals/signage frame.png";

export const FEATURE_INTERVAL = 7000;
export const IMAGE_INTERVAL = 2500;

export const DEVICE_FRAME = kioskFrame;

/**
 * Layout configuration for each feature tab.
 *
 * device.x / device.y  – percentage-based translation of the device frame
 * device.scale         – uniform scale factor
 * heading.x            – horizontal offset of heading relative to device center (%)
 *                        positive = right of device, negative = left of device
 * heading.y            – vertical nudge from vertical-center alignment (%)
 */
// export const FEATURE_LAYOUTS = [
//   { device: { x: -15, y: -10, scale: 1 }, heading: { x: 113, y: 0 } },
//   { device: { x: -45, y: 5, scale: 1 }, heading: { x: 125, y: 32 } },
//   { device: { x: 10, y: 18, scale: 1 }, heading: { x: -50, y: 10 } },
//   { device: { x: 42, y: -10, scale: 1 }, heading: { x: -45, y: -10 } },
// ];

// data.js
export const FEATURE_LAYOUTS = [
  {
    device: { x: -15, y: -10, scale: 1 },
    heading: { x: 113, y: 0 },
    headingResponsiveX: -3,   // vw offset at intermediate breakpoints
  },
  {
    device: { x: -45, y: 5, scale: 1 },
    heading: { x: 125, y: 32 },
    headingResponsiveX: -4,
  },
  {
    device: { x: 10, y: 18, scale: 1 },
    heading: { x: -50, y: 10 },
    headingResponsiveX: -2,
  },
  {
    device: { x: 42, y: -10, scale: 1 },
    heading: { x: -45, y: -10 },
    headingResponsiveX: -1,
  },
];
// data.js — adjusted heading offsets (rest of file unchanged)

// export const FEATURE_LAYOUTS = [
//   { device: { x: -45, y: -10, scale: 1 }, heading: { x: 120, y: 0 } },
//   { device: { x: -65, y: 5, scale: 1 }, heading: { x: 120, y: 32 } },
//   { device: { x: 10, y: 18, scale: 1 }, heading: { x: -85, y: 10 } },
//   { device: { x: 42, y: -10, scale: 1 }, heading: { x: -70, y: -10 } },
// ];
export const SIGNAGE_FEATURES = [
  {
    id: "liquid-crystal-panel",
    title: "Liquid Crystal Panel",
    description:
      "Delivers vibrant colors, sharp visuals, and consistent image quality for professional digital signage.",
    heading: ["Brilliant Visuals", "That Captivate"],
    images: [AnimationA1, AnimationA2, AnimationA3],
    shine: true,
    icon: <img src={Icon1} alt="Icon" />,
  },
  {
    id: "anti-riot-anti-theft",
    title: "Anti Riot/Anti Theft Design",
    description:
      "Built with a reinforced enclosure to provide enhanced protection against vandalism, tampering, and unauthorized access.",
    heading: ["Engineered for", "Maximum Protection"],
    images: [AnimationB1, AnimationB2],
    icon: <img src={Icon2} alt="Icon" />,
  },
  {
    id: "commercial-grade-battery",
    title: "2K & 4K Ultra HD Display",
    description:
      "Deliver stunning clarity, vibrant colors, and exceptional detail with 2K and 4K Ultra HD resolution, ensuring every image, video, and message stands out with remarkable visual impact.",
    heading: ["Power That", "Keeps You Going"],
    images: [Tab3Image1],
    popup: { image: Tab1PopupImage },
    icon: <img src={Icon3} alt="Icon" />,
  },
  {
    id: "rain-sun-protection",
    title: "Rain & Sun Protection",
    description:
      "Engineered to withstand harsh outdoor conditions with reliable protection against rain, dust, and direct sunlight.",
    heading: ["Ready for", "Every Weather"],
    images: [AnimationD1, AnimationD2],
    imageAnimation: "reveal",
    icon: <img className="bv-icons-signage" src={Icon4} alt="Icon" />,
  },
];