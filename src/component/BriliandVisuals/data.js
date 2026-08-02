// ---- imports unchanged, just add whatever extra sub-images you need ----
// import kioskFrame from "../../Assets/BrilliantVisuals/kiosk-frame.png";
import Tab1Image1 from "../../Assets/BrilliantVisuals/Tab1Image1.png";
import Tab1Image1b from "../../Assets/BrilliantVisuals/Tab1Image2.png";
import Tab2Image1 from "../../Assets/BrilliantVisuals/Tab2Image1.png";
import Tab2Image2 from "../../Assets/BrilliantVisuals/Tab2Image2.png";
import Tab3Image1 from "../../Assets/BrilliantVisuals/Tab3Image1.png";
import Tab1PopupImage from "../../Assets/BrilliantVisuals/Tab3Image2.png";
import Tab1Image4 from "../../Assets/BrilliantVisuals/Tab1Image3.png";
import Tab1Image4b from "../../Assets/BrilliantVisuals/Tab1Image2.png";


import AnimationA1 from "../../Assets/BrilliantVisuals/Animation 1/Anim 1.1.png"
import AnimationA2 from "../../Assets/BrilliantVisuals/Animation 1/Anim 1.2.png"

import AnimationA3 from "../../Assets/BrilliantVisuals/Animation 1/Anim 1.3.png"

import AnimationB1 from "../../Assets/BrilliantVisuals/Animation 2/Anim 2.1.png"
import AnimationB2 from "../../Assets/BrilliantVisuals/Animation 2/Anim 2.2.png"
import AnimationD1 from  "../../Assets/BrilliantVisuals/Animation 4/Anim 4.1.png"
import AnimationD2 from  "../../Assets/BrilliantVisuals/Animation 4/Anim 4.2.png"







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
    icon: ( /* unchanged */ null ),
  },
  {
    id: "anti-riot-anti-theft",
    title: "Anti Riot/Anti Theft Design",
    description:
      "Built with a reinforced enclosure to provide enhanced protection against vandalism, tampering, and unauthorized access.",
    heading: ["Engineered for", "Maximum Protection"],
    images: [AnimationB1, AnimationB2 ], // 2 images, smooth crossfade
    icon: ( /* unchanged */ null ),
  },
  {
    id: "commercial-grade-battery",
    title: "Commercial Grade Battery",
    description:
      "Ensures stable and reliable power backup for uninterrupted operation during temporary power interruptions.",
    heading: ["Power That", "Keeps You Going"],
    images: [Tab3Image1], // single image, unchanged behavior
    popup: { image: Tab1PopupImage },
    icon: ( /* unchanged */ null ),
  },
  {
    id: "rain-sun-protection",
    title: "Rain & Sun Protection",
    description:
      "Engineered to withstand harsh outdoor conditions with reliable protection against rain, dust, and direct sunlight.",
    heading: ["Ready for", "Every Weather"],
    images: [AnimationD1, AnimationD2], // 2 images, bottom-up reveal + zoom settle
    imageAnimation: "reveal",
    icon: ( /* unchanged */ null ),
  },
];

export const FEATURE_LAYOUTS = [
  { device: { x: -45, y: -10, scale: 1 }, heading: { x: 100, y: 0 } },
  { device: { x: -65, y: 5, scale: 1 }, heading: { x: 80, y: 32 } },
  { device: { x: 35, y: 18, scale: 1 }, heading: { x: -40, y: 10 } },
  { device: { x: 50, y: -10, scale: 1 }, heading: { x: -18, y: -10 } },
];

