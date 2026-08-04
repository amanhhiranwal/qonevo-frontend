// ---- imports unchanged, just add whatever extra sub-images you need ----
// import kioskFrame from "../../Assets/BrilliantVisuals/kiosk-frame.png";
import Tab3Image1 from "../../Assets/BrilliantVisuals/Tab3Image1.png";
import Tab1PopupImage from "../../Assets/BrilliantVisuals/Tab3Image2.png";


import AnimationA1 from "../../Assets/BrilliantVisuals/Animation 1/Anim 1.1.png"
import AnimationA2 from "../../Assets/BrilliantVisuals/Animation 1/Anim 1.2.png"

import AnimationA3 from "../../Assets/BrilliantVisuals/Animation 1/Anim 1.3.png"

import AnimationB1 from "../../Assets/BrilliantVisuals/Animation 2/Anim 2.1.png"
import AnimationB2 from "../../Assets/BrilliantVisuals/Animation 2/Anim 2.2.png"
import AnimationD1 from  "../../Assets/BrilliantVisuals/Animation 4/Anim 4.1.png"
import AnimationD2 from  "../../Assets/BrilliantVisuals/Animation 4/Anim 4.2.png"


// ---------------------icons---------------------------------------
import Icon1 from "../../Assets/BrilliantVisuals/Icons/Frame 48751-1.svg"
import Icon2 from "../../Assets/BrilliantVisuals/Icons/Frame 48751-2.svg"

import Icon3 from "../../Assets/BrilliantVisuals/Icons/Frame 48751-3.svg"

import Icon4 from "../../Assets/BrilliantVisuals/Icons/Frame 48751.svg"







import kioskFrame from "../../Assets/BrilliantVisuals/signage frame.png"

export const FEATURE_INTERVAL = 7000; // ms between tab auto-cycles
export const IMAGE_INTERVAL = 2500;   // ms between sub-image cycles within a tab

export const DEVICE_FRAME = kioskFrame;

export const SIGNAGE_FEATURES = [
  {
    id: "liquid-crystal-panel",
    title: "Liquid Crystal Panel",
    description:
      "Delivers vibrant colors, sharp visuals, and consistent image quality for professional digital signage.",
    heading: ["Brilliant Visuals", "That Captivate"],
    images: [AnimationA1, AnimationA2, AnimationA3], // 3 images, smooth crossfade
    shine: true,
    icon: <img src={Icon1} alt="Icon"  />
  },
  {
    id: "anti-riot-anti-theft",
    title: "Anti Riot/Anti Theft Design",
    description:
      "Built with a reinforced enclosure to provide enhanced protection against vandalism, tampering, and unauthorized access.",
    heading: ["Engineered for", "Maximum Protection"],
    images: [AnimationB1, AnimationB2 ], // 2 images, smooth crossfade
    icon:<img src={Icon2} alt="Icon"  />
  },
  {
    id: "commercial-grade-battery",
    title: "2K & 4K Ultra HD Display",
    description:
      "Deliver stunning clarity, vibrant colors, and exceptional detail with 2K and 4K Ultra HD resolution, ensuring every image, video, and message stands out with remarkable visual impact.",
    heading: ["Power That", "Keeps You Going"],
    images: [Tab3Image1], // single image, unchanged behavior
    popup: { image: Tab1PopupImage },
    icon: <img src={Icon3} alt="Icon"  />
  },
  {
    id: "rain-sun-protection",
    title: "Rain & Sun Protection",
    description:
      "Engineered to withstand harsh outdoor conditions with reliable protection against rain, dust, and direct sunlight.",
    heading: ["Ready for", "Every Weather"],
    images: [AnimationD1, AnimationD2], // 2 images, bottom-up reveal + zoom settle
    imageAnimation: "reveal",
    icon: <img className="bv-icons-signage" src={Icon4} alt="Icon"  />
  },
];

export const FEATURE_LAYOUTS = [
  { device: { x: -45, y: -10, scale: 1 }, heading: { x: 100, y: 0 } },
  { device: { x: -65, y: 5, scale: 1 }, heading: { x: 80, y: 32 } },
  { device: { x: 20, y: 18, scale: 1 }, heading: { x: -60, y: 10 } },
  { device: { x: 50, y: -10, scale: 1 }, heading: { x: -18, y: -10 } },
];

