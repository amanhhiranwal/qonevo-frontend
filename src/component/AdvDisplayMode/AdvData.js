import BigScreenFrame from "../../Assets/AdvDisplay/Big Screen Frame.png";
import KioskFrame from "../../Assets/AdvDisplay/Kiosk Frame.png";
import MobileFrame from "../../Assets/AdvDisplay/Mobile Frame.png";

// ---------------- Feature 1: Remote Publishing ----------------
import MobileScreen1 from "../../Assets/AdvDisplay/Mobile Screen 1.png";
import MobileScreen2 from "../../Assets/AdvDisplay/Mobile Screen 2.png";
import MobileScreen3 from "../../Assets/AdvDisplay/Mobile Screen 3.png";
import MobileScreen4 from "../../Assets/AdvDisplay/Mobile Screen 4.png";
import BigScreen1 from "../../Assets/AdvDisplay/Big Screen 1.png";
import BigScreen2 from "../../Assets/AdvDisplay/Big Screen 2.png";
import BigScreen3 from "../../Assets/AdvDisplay/Big Screen 3.png";
import BigScreen4 from "../../Assets/AdvDisplay/Big Screen 4.png";
import KisokScreen1 from "../../Assets/AdvDisplay/Vertical Screen 1.png";
import KisokScreen2 from "../../Assets/AdvDisplay/Vertical Screen 2.png";
import KisokScreen3 from "../../Assets/AdvDisplay/Vertical Screen 3.png";
import KisokScreen4 from "../../Assets/AdvDisplay/Vertical Screen 4.png";

// ---------------- Feature 2: 178° Viewing Angle ----------------
import Tab2ScreenImage from "../../Assets/AdvDisplay/Horizontal Anim 2.png";
import Tab2KioskImage from "../../Assets/AdvDisplay/Vertical Anim 2.png";

// ---------------- Feature 3: USB Plug & Play ----------------
import Tab3ScreenImage from "../../Assets/AdvDisplay/Horizontal Anim 3.png";
import Tab3KioskImage from "../../Assets/AdvDisplay/Vertical Anim 3.png";

// ---------------- Feature 4: Smart Split Screen ----------------
import Tab4ScreenImage1 from "../../Assets/AdvDisplay/Horizontal Anim 4.1.png";
import Tab4ScreenImage2 from "../../Assets/AdvDisplay/Horizontal Anim 4.2.png";
import Tab4ScreenImage3 from "../../Assets/AdvDisplay/Horizontal Anim 4.3.png";
import Tab4ScreenImage4 from "../../Assets/AdvDisplay/Horizontal Anim 4.4.png";
import Tab4KioskImage1 from "../../Assets/AdvDisplay/Vertical Anim 4.1.png";
import Tab4KioskImage2 from "../../Assets/AdvDisplay/Vertical Anim 4.2.png";
import Tab4KioskImage3 from "../../Assets/AdvDisplay/Vertical Anim 4.3.png";
import Tab4KioskImage4 from "../../Assets/AdvDisplay/Vertical Anim 4.4.png";

// ---------------- Feature 5: Timing Switch ----------------
import Tab5ScreenImage1 from "../../Assets/AdvDisplay/Horizontal Anim 5.1.png";
import Tab5ScreenImage2 from "../../Assets/AdvDisplay/Horizontal Anim 5.2.png";
import Tab5ScreenImage3 from "../../Assets/AdvDisplay/Horizontal Anim 5.3.png";
import Tab5ScreenImage4 from "../../Assets/AdvDisplay/Horizontal Anim 5.4.png";
import Tab5ScreenImage5 from "../../Assets/AdvDisplay/Horizontal Anim 5.5.png";
import Tab5KioskImage1 from "../../Assets/AdvDisplay/Vertical Anim 5.1.png";
import Tab5KioskImage2 from "../../Assets/AdvDisplay/Vertical Anim 5.2.png";
import Tab5KioskImage3 from "../../Assets/AdvDisplay/Vertical Anim 5.3.png";
import Tab5KioskImage4 from "../../Assets/AdvDisplay/Vertical Anim 5.4.png";
import Tab5KioskImage5 from "../../Assets/AdvDisplay/Vertical Anim 5.5.png";

import { AnimatedAngleIcon } from "./AnimatedDegreeIcon";
import { AnimatedSplitIcon } from "./AnimatedSplitIcon";
import plugIcon from "../../Assets/AdvDisplay/plugIcon.png"



const FEATURE_LAYOUTS = {
  "remote-publishing": {
    display: {
      top: "clamp(-80px, -5.6vw, -80px)", // preserved
      right: "clamp(-110px, -8vw, -170px)", // desktop stays at -170px, smaller screens move towards -70px
      width: "clamp(520px, 54vw, 780px)",
      height: "clamp(303px, 31.5vw, 455px)",
    },

    kiosk: {
      top: "clamp(190px, 16.8vw, 235px)",
      right: "clamp(16px, 2vw, 30px)",
      width: "clamp(140px, 14.2vw, 205px)",
      height: "clamp(338px, 34.4vw, 496px)",
    },

    mobile: {
      show: true,
      top: "clamp(340px, 30vw, 420px)",
      left: "clamp(40px, 4vw, 60px)",
      width: "clamp(105px, 10.8vw, 155px)",
      height: "clamp(215px, 22vw, 318px)",
    },

    headline: {
      top: "clamp(520px, 45vw, 640px)",
      left: "clamp(185px, 16vw, 245px)",
    },
  },

  default: {
    display: {
      top: "clamp(70px, 7vw, 100px)", // preserved
      right: "clamp(20px, 5vw, 50px)", // slightly more centered on smaller screens
      width: "clamp(520px, 54vw, 780px)",
      height: "clamp(303px, 31.5vw, 455px)",
    },

    kiosk: {
      top: "clamp(245px, 21vw, 300px)",
      // right: "clamp(28px, 3.5vw, 60px)",
      right: "clamp(0px, 1.5vw, 5px)",
      width: "clamp(130px, 13.2vw, 190px)",
      height: "clamp(315px, 31.9vw, 460px)",
    },

    mobile: {
      show: false,
      top: "clamp(390px, 33vw, 470px)",
      left: "clamp(40px, 4vw, 60px)",
      width: "clamp(105px, 10.8vw, 155px)",
      height: "clamp(215px, 22vw, 318px)",
    },

    headline: {
      top: "clamp(450px, 40vw, 560px)",
      // left: "clamp(100px, 4vw, 60px)",
      left: "calc(100% - clamp(20px, 5vw, 50px) - clamp(520px, 54vw, 780px))",
    },
  },
};
const getLayout = (id) => FEATURE_LAYOUTS[id] || FEATURE_LAYOUTS.default;

const IconRemote = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="2" y="4" width="14" height="10" rx="1.5" />
    <path d="M6 18h6M9 14v4" />
    <path d="M18 8l4-2v9l-4-2" />
  </svg>
);
const SubIconAngle = () => <AnimatedAngleIcon />;

const IconAngle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M7 6v12M17 6v12" />
  </svg>
);
const IconUsb = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3v8" />
    <circle cx="12" cy="4.5" r="1.2" fill="currentColor" stroke="none" />
    <path d="M9 8h6l1.5 3H7.5L9 8z" />
    <path d="M12 11v6M9 20h6" />
  </svg>
);
const IconSplit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M12 5v14" />
  </svg>
);
const IconTimer = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="13" r="7" />
    <path d="M12 9v4l2.5 2.5M10 2h4" />
  </svg>
);

const frameStyle = ({ top, right, left, width, height }) => ({
  top,
  right,
  left,
  width,
  height,
});
const advFeatures = [
  {
    id: "remote-publishing",
    icon: <IconRemote />,
    title: "Remote Publishing",
    desc: "Update and manage display content remotely, enabling quick deployment of advertisements and information across connected screens.",
    subIcon: null,
    headline: "Update Content",
    subheadline: "in Real Time",
    showPulse: true,
    demos: [
      { screen: BigScreen1, kiosk: KisokScreen1, phone: MobileScreen1 },
      { screen: BigScreen2, kiosk: KisokScreen2, phone: MobileScreen2 },
      { screen: BigScreen3, kiosk: KisokScreen3, phone: MobileScreen3 },
      { screen: BigScreen4, kiosk: KisokScreen4, phone: MobileScreen4 },
    ],
  },
  {
    id: "viewing-angle",
    icon: <IconAngle />,
    title: "178° Wide Viewing Angle",
    desc: "Delivers clear and consistent visuals from wide viewing positions, ensuring excellent visibility for audiences from different angles.",
    subIcon: <SubIconAngle />,
    headline: "Maximum Visibility",
    subheadline: "across every view",
    showPulse: false,
    demos: [{ screen: Tab2ScreenImage, kiosk: Tab2KioskImage }],
  },
  {
    id: "usb",
    icon: <IconUsb />,
    title: "USB Plug & Play",
    desc: "Play images, videos, and presentations directly from a USB drive without requiring additional software or complex setup.",
    subIcon: <img src={plugIcon} alt="" className="adv-subicon-img" />,
    headline: "Instant Playback",
    subheadline: "in seconds",
    showPulse: false,
    demos: [{ screen: Tab3ScreenImage, phone: Tab3KioskImage }],
  },
  {
    id: "split-screen",
    icon: <IconSplit />,
    title: "Smart Split Screen Display",
    desc: "Display multiple types of content simultaneously using customizable screen partitions for advertisements, announcements, videos, or images.",
    subIcon: "split",
    headline: "One Screen",
    subheadline: "Multiple Possibilities",
    showPulse: false,
    demos: [
      { screen: Tab4ScreenImage1, kiosk: Tab4KioskImage1 },
      { screen: Tab4ScreenImage2, kiosk: Tab4KioskImage2 },
      { screen: Tab4ScreenImage3, kiosk: Tab4KioskImage3 },
      { screen: Tab4ScreenImage4, kiosk: Tab4KioskImage4 },
    ],
  },
  {
    id: "timing-switch",
    icon: <IconTimer />,
    title: "Timing Switch",
    desc: "Schedule automatic power on/off and content playback times to simplify daily operation and improve energy efficiency.",
    headline: "Automate",
    subheadline: "Your Display Schedule",
    showPulse: false,
    demos: [
      { screen: Tab5ScreenImage1, kiosk: Tab5KioskImage1 },
      { screen: Tab5ScreenImage2, kiosk: Tab5KioskImage2 },
      { screen: Tab5ScreenImage3, kiosk: Tab5KioskImage3 },
      { screen: Tab5ScreenImage4, kiosk: Tab5KioskImage4 },
      { screen: Tab5ScreenImage5, kiosk: Tab5KioskImage5 },
    ],
  },
];


export {
  BigScreenFrame,
  KioskFrame,
  MobileFrame,
  AnimatedSplitIcon,
  getLayout,
  frameStyle,
  advFeatures,
};