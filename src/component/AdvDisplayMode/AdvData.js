import BigScreenFrame from "../../Assets/AdvDisplay/Big Screen Frame.png";
import KioskFrame from "../../Assets/AdvDisplay/Kiosk Frame.png";
import MobileFrame from "../../Assets/AdvDisplay/Mobile Frame.png";

// ---------------------------------------------------------------------------
// Demo artwork
//---------------------------------------------------------------------------

// Remote publishing
import MobileScreen1 from "../../Assets/AdvDisplay/Mobile Screen 1.png";
import MobileScreen2 from "../../Assets/AdvDisplay/Mobile Screen 2.png";
import MobileScreen3 from "../../Assets/AdvDisplay/Mobile Screen 3.png";
import MobileScreen4 from "../../Assets/AdvDisplay/Mobile Screen 4.png";
import BigScreen1 from "../../Assets/AdvDisplay/Big Screen 1.png";
import BigScreen2 from "../../Assets/AdvDisplay/Big Screen 2.png";
import BigScreen3 from "../../Assets/AdvDisplay/Big Screen 3.png";
import BigScreen4 from "../../Assets/AdvDisplay/Big Screen 4.png";
import KioskScreen1 from "../../Assets/AdvDisplay/Vertical Screen 1.png";
import KioskScreen2 from "../../Assets/AdvDisplay/Vertical Screen 2.png";
import KioskScreen3 from "../../Assets/AdvDisplay/Vertical Screen 3.png";
import KioskScreen4 from "../../Assets/AdvDisplay/Vertical Screen 4.png";

// 178 degree viewing angle
import Tab2ScreenImage from "../../Assets/AdvDisplay/Horizontal Anim 2.png";
import Tab2KioskImage from "../../Assets/AdvDisplay/Vertical Anim 2.png";

// USB plug and play
import Tab3ScreenImage from "../../Assets/AdvDisplay/Horizontal Anim 3.png";
import Tab3KioskImage from "../../Assets/AdvDisplay/Vertical Anim 3.png";

// Smart split screen
import Tab4ScreenImage1 from "../../Assets/AdvDisplay/Horizontal Anim 4.1.png";
import Tab4ScreenImage2 from "../../Assets/AdvDisplay/Horizontal Anim 4.2.png";
import Tab4ScreenImage3 from "../../Assets/AdvDisplay/Horizontal Anim 4.3.png";
import Tab4ScreenImage4 from "../../Assets/AdvDisplay/Horizontal Anim 4.4.png";
import Tab4KioskImage1 from "../../Assets/AdvDisplay/Vertical Anim 4.1.png";
import Tab4KioskImage2 from "../../Assets/AdvDisplay/Vertical Anim 4.2.png";
import Tab4KioskImage3 from "../../Assets/AdvDisplay/Vertical Anim 4.3.png";
import Tab4KioskImage4 from "../../Assets/AdvDisplay/Vertical Anim 4.4.png";

// Timing switch
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

// Feature icons
import plugIcon from "../../Assets/AdvDisplay/plugIcon.svg";
import remoteIcon from "../../Assets/AdvDisplay/icons/remote_pub.svg";
import AngleIcon from "../../Assets/AdvDisplay/icons/AngleIcon.svg";
import SplitIcon from "../../Assets/AdvDisplay/icons/splitIcon.svg";
import TimingIcon from "../../Assets/AdvDisplay/icons/timingIcon.svg";
import PlugTabIcon from "../../Assets/AdvDisplay/icons/plugIcon.svg";

// ---------------------------------------------------------------------------
// Fluid mockup layouts
// ---------------------------------------------------------------------------
//
// The artwork is positioned on a 1.15:1 responsive canvas. These values are
// percentages of that canvas rather than viewport pixels. This preserves the
// 1440px composition while allowing the complete group to scale on laptops,
// tablets, and phones. Smaller breakpoints in AdvDisplayMode.css adjust only
// the few negative offsets that could otherwise leave artwork outside the
// available canvas.
//
const FEATURE_LAYOUTS = {
  "remote-publishing": {
    display: {
      top: "-22.2%",
      right: "-15%", 
      width: "100%",
      height: "64.1%",
      clipPath: "inset(20% 20% 0% 0%)",
    },
    kiosk: {
      top: "18.7%",
      right: "3.8%",
      width: "26.3%",
      height: "73.1%",
    },
    mobile: {
      show: true,
      top: "48.4%",
      left: "7.7%",
      width: "19.9%",
      height: "46.9%",
    },
    headline: {
      top: "73.9%",
      left: "31.4%",
    },
  },

  default: {
    display: {
      top: "-1.5%",
      right: "2.6%",
      width: "100%",
      height: "67.1%",
    },
    kiosk: {
      top: "31.3%",
      right: "-5.1%",
      width: "24.4%",
      height: "67.8%",
    },
    mobile: {
      show: false,
      top: "61.9%",
      left: "7.7%",
      width: "19.9%",
      height: "46.9%",
    },
    headline: {
      top: "67.8%",
      left: "-1.64%",
    },
  },
};

const getLayout = (featureId) =>
  FEATURE_LAYOUTS[featureId] || FEATURE_LAYOUTS.default;

/*
  Put layout values into custom properties instead of inline top/left/right
  declarations. This lets responsive CSS override an offset when necessary,
  without JavaScript measuring the viewport or changing the animation states.
*/
const frameStyle = ({ top, right, bottom, left, width, height }) => {
  const style = {};

  if (top != null) style["--adv-top"] = top;
  if (right != null) style["--adv-right"] = right;
  if (bottom != null) style["--adv-bottom"] = bottom;
  if (left != null) style["--adv-left"] = left;
  if (width != null) style["--adv-width"] = width;
  if (height != null) style["--adv-height"] = height;

  return style;
};

const SubIconAngle = () => <AnimatedAngleIcon />;

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
    duration: 6400,
    demos: [
      { screen: BigScreen1, kiosk: KioskScreen1, phone: MobileScreen1 },
      { screen: BigScreen2, kiosk: KioskScreen2, phone: MobileScreen2 },
      { screen: BigScreen3, kiosk: KioskScreen3, phone: MobileScreen3 },
      { screen: BigScreen4, kiosk: KioskScreen4, phone: MobileScreen4 },
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
    subIcon: "",
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
    subIcon: null,
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
