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

//------------------------------- tab icons -----------------------------
import plugIcon from "../../Assets/AdvDisplay/plugIcon.png";
import remoteIcon from "../../Assets/AdvDisplay/icons/remoteIcon.svg";
import AngleIcon from "../../Assets/AdvDisplay/icons/AngleIcon.svg";

import SplitIcon from "../../Assets/AdvDisplay/icons/splitIcon.svg";

import TimingIcon from "../../Assets/AdvDisplay/icons/timingIcon.svg";
import PlugTabIcon from "../../Assets/AdvDisplay/icons/plugIcon.svg";

const FEATURE_LAYOUTS = {
  "remote-publishing": {
    display: {
      top: "clamp(-84px, -5.6vw, -80px)", // preserved
      right: "clamp(-90px, -8vw, -200px)", // desktop stays at -170px, smaller screens move towards -70px
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
      top: "clamp(420px, 45vw, 630px)",
      left: "clamp(165px, 16vw, 245px)",
    },
  },

  // default: {
  //   display: {
  //     top: "clamp(70px, 7vw, 100px)", // preserved
  //     right: "clamp(20px, 5vw, 50px)", // slightly more centered on smaller screens
  //     width: "clamp(520px, 54vw, 780px)",
  //     height: "clamp(303px, 31.5vw, 455px)",
  //   },

  //   kiosk: {
  //     top: "clamp(245px, 21vw, 300px)",
  //     // right: "clamp(28px, 3.5vw, 60px)",
  //     right: "clamp(0px, 1.5vw, 5px)",
  //     width: "clamp(130px, 13.2vw, 190px)",
  //     height: "clamp(315px, 31.9vw, 460px)",
  //   },

  //   mobile: {
  //     show: false,
  //     top: "clamp(390px, 33vw, 470px)",
  //     left: "clamp(40px, 4vw, 60px)",
  //     width: "clamp(105px, 10.8vw, 155px)",
  //     height: "clamp(215px, 22vw, 318px)",
  //   },

  //   headline: {
  //     top: "clamp(450px, 40vw, 560px)",
  //     // left: "clamp(100px, 4vw, 60px)",
  //     left: "calc(100% - clamp(20px, 5vw, 50px) - clamp(520px, 54vw, 780px))",
  //   },
  // },
default: {
  display: {
    top: "clamp(0px, 5vw, 10px)",
    right: "clamp(20px, 5vw, 50px)",
    width: "clamp(520px, 54vw, 780px)",
    height: "clamp(303px, 31.5vw, 455px)",
  },

  kiosk: {
    top: "clamp(200px, 18vw, 260px)",
    right: "clamp(20px, 1.5vw, 40px)",
    width: "clamp(130px, 13.2vw, 190px)",
    height: "clamp(315px, 31.9vw, 460px)",
  },

  mobile: {
    show: false,

    top: "clamp(350px, 30vw, 420px)",
    left: "clamp(40px, 4vw, 60px)",
    width: "clamp(105px, 10.8vw, 155px)",
    height: "clamp(215px, 22vw, 318px)",
  },

  headline: {
    top: "clamp(350px, 36vw, 480px)",
    left: "calc(100% - clamp(20px, 5vw, 50px) - clamp(520px, 54vw, 780px))",
  },
},
};
const getLayout = (id) => FEATURE_LAYOUTS[id] || FEATURE_LAYOUTS.default;

const SubIconAngle = () => <AnimatedAngleIcon />;

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
    icon: <img src={remoteIcon} alt="" className="adv-icon-img" />,
    title: "Remote Publishing",
    desc: "Update and manage display content remotely, enabling quick deployment of advertisements and information across connected screens.",
    subIcon: null,
    headline: "Update Content",
    subheadline: "in Real Time",
    showPulse: true,
    duration: 5000,
    demos: [
      { screen: BigScreen1, kiosk: KisokScreen1, phone: MobileScreen1 },
      { screen: BigScreen2, kiosk: KisokScreen2, phone: MobileScreen2 },
      { screen: BigScreen3, kiosk: KisokScreen3, phone: MobileScreen3 },
      { screen: BigScreen4, kiosk: KisokScreen4, phone: MobileScreen4 },
    ],
  },
  {
    id: "viewing-angle",
    icon: <img src={AngleIcon} alt="" className="adv-icon-img" />,
    title: "178° Wide Viewing Angle",
    desc: "Delivers clear and consistent visuals from wide viewing positions, ensuring excellent visibility for audiences from different angles.",
    subIcon: <SubIconAngle />,
    headline: "Maximum Visibility",
    subheadline: "across every view",
    showPulse: false,
    duration: 2500,
    demos: [{ screen: Tab2ScreenImage, kiosk: Tab2KioskImage }],
  },
  {
    id: "usb",
    icon: <img src={PlugTabIcon} alt="" className="adv-icon-img" />,
    title: "USB Plug & Play",
    desc: "Play images, videos, and presentations directly from a USB drive without requiring additional software or complex setup.",
    subIcon: <img src={plugIcon} alt="" className="adv-subicon-img" />,
    headline: "Instant Playback",
    subheadline: "in seconds",
    showPulse: false,
    duration: 2500,
    demos: [{ screen: Tab3ScreenImage, phone: Tab3KioskImage }],
  },
  {
    id: "split-screen",
    icon: <img src={SplitIcon} alt="" className="adv-icon-img" />,
    title: "Smart Split Screen Display",
    desc: "Display multiple types of content simultaneously using customizable screen partitions for advertisements, announcements, videos, or images.",
    subIcon: "split",
    headline: "One Screen",
    subheadline: "Multiple Possibilities",
    showPulse: false,
    duration: 6000,
    demos: [
      { screen: Tab4ScreenImage1, kiosk: Tab4KioskImage1 },
      { screen: Tab4ScreenImage2, kiosk: Tab4KioskImage2 },
      { screen: Tab4ScreenImage3, kiosk: Tab4KioskImage3 },
      { screen: Tab4ScreenImage4, kiosk: Tab4KioskImage4 },
    ],
  },
  {
    id: "timing-switch",
    icon: <img src={TimingIcon} alt="" className="adv-icon-img" />,
    title: "Timing Switch",
    desc: "Schedule automatic power on/off and content playback times to simplify daily operation and improve energy efficiency.",
    headline: "Automate",
    subheadline: "Your Display Schedule",
    showPulse: false,
    duration: 7000,
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
