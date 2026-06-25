import React, { useEffect, useState, useRef } from "react";
import banner from "../../Assets/ListingPage/banner.png";
import "./ListingPage.css";
import axios from "axios";
// import DetailModal from "../IFP/DetailModal";
import FilterSideBar from "../../component/FilterSideBar/FilterSideBar";
import ProductCard from "../../component/ProductCard/ProductCard.js";
import PageLayout from "../../layouts/PageLayout.jsx";

// import prodImg1 from "../../Assets/ProductCard/img1.png";
// import prodImg2 from "../../Assets/ProductCard/img2.png";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const layoutRef = useRef(null);
  const rightRef = useRef(null);
  const ITEMS_PER_LOAD = 4;
  const loadMoreRef = useRef(null);

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [allProducts, setAllProducts] = useState([]);
  // const [visibleProducts, setVisibleProducts] = useState([]);
  const visibleProducts = products.slice(0, visibleCount);
  const [filters, setFilters] = useState({
    size: [],
    chipset: [],
    storage: [],
    smart_features: [],
    processor_speed: [],
    processor: [],
  });

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

const getSpecValue = (product, category, key) => {
  return product.specifications
    ?.find((section) => section.category === category)
    ?.items?.find((item) => item.spec_key === key)
    ?.spec_value;
};

  // let data = [
  //      {
  //       "id": 29,
  //       "name": "110\" Interactive Flat Panel with Camera",
  //       "product_type": "IFP",
  //       "slug": "110-interactive-flat-panel-with-camera-1782213928159689977",
  //       "subheading": "CVTE 311D2",
  //       "size": "",
  //       "chipset": "",
  //       "storage": "8GB + 128GB",
  //       "resolution": "",
  //       "google_integration": true,
  //       "is_active": true,
  //       "thumbnail": "https://qonevo-products.s3.ap-south-1.amazonaws.com/products/1782214972161073631.png",
  //       "images": [
  //           {
  //               "id": 14,
  //               "product_id": 29,
  //               "image_url": "https://qonevo-products.s3.ap-south-1.amazonaws.com/products/1782214972161073631.png",
  //               "is_primary": true,
  //               "created_at": "2026-06-23T11:42:52.285727Z"
  //           }
  //       ],
  //       "specifications": [
  //           {
  //               "category": "Display",
  //               "items": [
  //                   {
  //                       "id": 290,
  //                       "product_id": 29,
  //                       "category": "Display",
  //                       "spec_key": "Size",
  //                       "spec_value": "110\""
  //                   },
  //                   {
  //                       "id": 291,
  //                       "product_id": 29,
  //                       "category": "Display",
  //                       "spec_key": "Technology",
  //                       "spec_value": "DLED"
  //                   },
  //                   {
  //                       "id": 292,
  //                       "product_id": 29,
  //                       "category": "Display",
  //                       "spec_key": "Resolution Ratio",
  //                       "spec_value": "3840x2160"
  //                   },
  //                   {
  //                       "id": 293,
  //                       "product_id": 29,
  //                       "category": "Display",
  //                       "spec_key": "Refresh Rate",
  //                       "spec_value": "60 Hz"
  //                   },
  //                   {
  //                       "id": 294,
  //                       "product_id": 29,
  //                       "category": "Display",
  //                       "spec_key": "Luminance",
  //                       "spec_value": "500 nits"
  //                   },
  //                   {
  //                       "id": 295,
  //                       "product_id": 29,
  //                       "category": "Display",
  //                       "spec_key": "Viewing Angle",
  //                       "spec_value": "178 (H/V)"
  //                   },
  //                   {
  //                       "id": 308,
  //                       "product_id": 29,
  //                       "category": "Display",
  //                       "spec_key": "Size",
  //                       "spec_value": "110\""
  //                   },
  //                   {
  //                       "id": 309,
  //                       "product_id": 29,
  //                       "category": "Display",
  //                       "spec_key": "Technology",
  //                       "spec_value": "DLED"
  //                   },
  //                   {
  //                       "id": 310,
  //                       "product_id": 29,
  //                       "category": "Display",
  //                       "spec_key": "Resolution Ratio",
  //                       "spec_value": "3840x2160"
  //                   },
  //                   {
  //                       "id": 311,
  //                       "product_id": 29,
  //                       "category": "Display",
  //                       "spec_key": "Refresh Rate",
  //                       "spec_value": "60 Hz"
  //                   },
  //                   {
  //                       "id": 312,
  //                       "product_id": 29,
  //                       "category": "Display",
  //                       "spec_key": "Luminance",
  //                       "spec_value": "500 nits"
  //                   },
  //                   {
  //                       "id": 313,
  //                       "product_id": 29,
  //                       "category": "Display",
  //                       "spec_key": "Viewing Angle",
  //                       "spec_value": "178 (H/V)"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Input/Output",
  //               "items": [
  //                   {
  //                       "id": 300,
  //                       "product_id": 29,
  //                       "category": "Input/Output",
  //                       "spec_key": "Speakers",
  //                       "spec_value": "2 x 20 W"
  //                   },
  //                   {
  //                       "id": 301,
  //                       "product_id": 29,
  //                       "category": "Input/Output",
  //                       "spec_key": "Microphone",
  //                       "spec_value": "8 Array mic"
  //                   },
  //                   {
  //                       "id": 302,
  //                       "product_id": 29,
  //                       "category": "Input/Output",
  //                       "spec_key": "Camera",
  //                       "spec_value": "48 mp AI camera"
  //                   },
  //                   {
  //                       "id": 303,
  //                       "product_id": 29,
  //                       "category": "Input/Output",
  //                       "spec_key": "Interface",
  //                       "spec_value": "HDMI-In, HDMI-Out, USB 3.0, USB 2.0, USB-C, Touch-USB, LAN, Mic In, Audio Out, SPDIF, RS232"
  //                   },
  //                   {
  //                       "id": 322,
  //                       "product_id": 29,
  //                       "category": "Input/Output",
  //                       "spec_key": "Speakers",
  //                       "spec_value": "2 x 20 W"
  //                   },
  //                   {
  //                       "id": 323,
  //                       "product_id": 29,
  //                       "category": "Input/Output",
  //                       "spec_key": "Microphone",
  //                       "spec_value": "8 Array mic"
  //                   },
  //                   {
  //                       "id": 324,
  //                       "product_id": 29,
  //                       "category": "Input/Output",
  //                       "spec_key": "Camera",
  //                       "spec_value": "48 mp AI camera"
  //                   },
  //                   {
  //                       "id": 325,
  //                       "product_id": 29,
  //                       "category": "Input/Output",
  //                       "spec_key": "Interface",
  //                       "spec_value": "HDMI-In, HDMI-Out, USB 3.0, USB 2.0, USB-C, Touch-USB, LAN, Mic In, Audio Out, SPDIF, RS232"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Package",
  //               "items": [
  //                   {
  //                       "id": 304,
  //                       "product_id": 29,
  //                       "category": "Package",
  //                       "spec_key": "Net Weight",
  //                       "spec_value": "110 Kg"
  //                   },
  //                   {
  //                       "id": 305,
  //                       "product_id": 29,
  //                       "category": "Package",
  //                       "spec_key": "Gross Weight",
  //                       "spec_value": "144 kg"
  //                   },
  //                   {
  //                       "id": 306,
  //                       "product_id": 29,
  //                       "category": "Package",
  //                       "spec_key": "Bare Machine Size",
  //                       "spec_value": "2500 * 1474 * 96 mm"
  //                   },
  //                   {
  //                       "id": 307,
  //                       "product_id": 29,
  //                       "category": "Package",
  //                       "spec_key": "Package Size",
  //                       "spec_value": "2667 * 1664 * 230 mm"
  //                   },
  //                   {
  //                       "id": 326,
  //                       "product_id": 29,
  //                       "category": "Package",
  //                       "spec_key": "Net Weight",
  //                       "spec_value": "110 Kg"
  //                   },
  //                   {
  //                       "id": 327,
  //                       "product_id": 29,
  //                       "category": "Package",
  //                       "spec_key": "Gross Weight",
  //                       "spec_value": "144 kg"
  //                   },
  //                   {
  //                       "id": 328,
  //                       "product_id": 29,
  //                       "category": "Package",
  //                       "spec_key": "Bare Machine Size",
  //                       "spec_value": "2500 * 1474 * 96 mm"
  //                   },
  //                   {
  //                       "id": 329,
  //                       "product_id": 29,
  //                       "category": "Package",
  //                       "spec_key": "Package Size",
  //                       "spec_value": "2667 * 1664 * 230 mm"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Processor",
  //               "items": [
  //                   {
  //                       "id": 314,
  //                       "product_id": 29,
  //                       "category": "Processor",
  //                       "spec_key": "Processor",
  //                       "spec_value": "Octacore"
  //                   },
  //                   {
  //                       "id": 315,
  //                       "product_id": 29,
  //                       "category": "Processor",
  //                       "spec_key": "Processor Speed",
  //                       "spec_value": "2.4 GHZ"
  //                   },
  //                   {
  //                       "id": 316,
  //                       "product_id": 29,
  //                       "category": "Processor",
  //                       "spec_key": "EDLA",
  //                       "spec_value": "No"
  //                   },
  //                   {
  //                       "id": 317,
  //                       "product_id": 29,
  //                       "category": "Processor",
  //                       "spec_key": "NFC",
  //                       "spec_value": "No"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Touch",
  //               "items": [
  //                   {
  //                       "id": 296,
  //                       "product_id": 29,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Type",
  //                       "spec_value": "Infrared"
  //                   },
  //                   {
  //                       "id": 297,
  //                       "product_id": 29,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Count",
  //                       "spec_value": "40 Points"
  //                   },
  //                   {
  //                       "id": 298,
  //                       "product_id": 29,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Accuracy",
  //                       "spec_value": "±1mm"
  //                   },
  //                   {
  //                       "id": 299,
  //                       "product_id": 29,
  //                       "category": "Touch",
  //                       "spec_key": "Response Time",
  //                       "spec_value": "≤4ms"
  //                   },
  //                   {
  //                       "id": 318,
  //                       "product_id": 29,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Type",
  //                       "spec_value": "Infrared"
  //                   },
  //                   {
  //                       "id": 319,
  //                       "product_id": 29,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Count",
  //                       "spec_value": "40 Points"
  //                   },
  //                   {
  //                       "id": 320,
  //                       "product_id": 29,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Accuracy",
  //                       "spec_value": "±1mm"
  //                   },
  //                   {
  //                       "id": 321,
  //                       "product_id": 29,
  //                       "category": "Touch",
  //                       "spec_key": "Response Time",
  //                       "spec_value": "≤4ms"
  //                   }
  //               ]
  //           }
  //       ],
  //       "created_at": "2026-06-23T11:25:28.160066Z",
  //       "updated_at": "2026-06-24T12:39:07.977842Z"
  //   },
  //   {
  //       "id": 21,
  //       "name": "98\" Interactive Flat Panel with Camera",
  //       "product_type": "IFP",
  //       "slug": "ifp12",
  //       "subheading": "CVTE 311D2",
  //       "size": "",
  //       "chipset": "",
  //       "storage": "16GB + 256GB",
  //       "resolution": "",
  //       "google_integration": true,
  //       "is_active": true,
  //       "thumbnail": "https://qonevo-products.s3.ap-south-1.amazonaws.com/products/1782214901145616654.png",
  //       "images": [
  //           {
  //               "id": 13,
  //               "product_id": 21,
  //               "image_url": "https://qonevo-products.s3.ap-south-1.amazonaws.com/products/1782214901145616654.png",
  //               "is_primary": true,
  //               "created_at": "2026-06-23T11:41:41.278586Z"
  //           }
  //       ],
  //       "specifications": [
  //           {
  //               "category": "Package",
  //               "items": [
  //                   {
  //                       "id": 231,
  //                       "product_id": 21,
  //                       "category": "Package",
  //                       "spec_key": "Net Weight",
  //                       "spec_value": "85kg"
  //                   },
  //                   {
  //                       "id": 232,
  //                       "product_id": 21,
  //                       "category": "Package",
  //                       "spec_key": "Gross Weight",
  //                       "spec_value": "98kg"
  //                   },
  //                   {
  //                       "id": 233,
  //                       "product_id": 21,
  //                       "category": "Package",
  //                       "spec_key": "Bare Machine Size",
  //                       "spec_value": "1957*1160*100mm"
  //                   },
  //                   {
  //                       "id": 234,
  //                       "product_id": 21,
  //                       "category": "Package",
  //                       "spec_key": "Package Size",
  //                       "spec_value": "2360*1430*308mm"
  //                   },
  //                   {
  //                       "id": 348,
  //                       "product_id": 21,
  //                       "category": "Package",
  //                       "spec_key": "Net Weight",
  //                       "spec_value": "85kg"
  //                   },
  //                   {
  //                       "id": 349,
  //                       "product_id": 21,
  //                       "category": "Package",
  //                       "spec_key": "Gross Weight",
  //                       "spec_value": "98kg"
  //                   },
  //                   {
  //                       "id": 350,
  //                       "product_id": 21,
  //                       "category": "Package",
  //                       "spec_key": "Bare Machine Size",
  //                       "spec_value": "1957*1160*100mm"
  //                   },
  //                   {
  //                       "id": 351,
  //                       "product_id": 21,
  //                       "category": "Package",
  //                       "spec_key": "Package Size",
  //                       "spec_value": "2360*1430*308mm"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Processor",
  //               "items": [
  //                   {
  //                       "id": 336,
  //                       "product_id": 21,
  //                       "category": "Processor",
  //                       "spec_key": "Processor",
  //                       "spec_value": "Octacore"
  //                   },
  //                   {
  //                       "id": 337,
  //                       "product_id": 21,
  //                       "category": "Processor",
  //                       "spec_key": "Processor Speed",
  //                       "spec_value": "2.4 GHZ"
  //                   },
  //                   {
  //                       "id": 338,
  //                       "product_id": 21,
  //                       "category": "Processor",
  //                       "spec_key": "EDLA",
  //                       "spec_value": "No"
  //                   },
  //                   {
  //                       "id": 339,
  //                       "product_id": 21,
  //                       "category": "Processor",
  //                       "spec_key": "NFC",
  //                       "spec_value": "Yes"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Touch",
  //               "items": [
  //                   {
  //                       "id": 223,
  //                       "product_id": 21,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Type",
  //                       "spec_value": "Infrared"
  //                   },
  //                   {
  //                       "id": 224,
  //                       "product_id": 21,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Count",
  //                       "spec_value": "40 Points"
  //                   },
  //                   {
  //                       "id": 225,
  //                       "product_id": 21,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Accuracy",
  //                       "spec_value": "±1mm"
  //                   },
  //                   {
  //                       "id": 226,
  //                       "product_id": 21,
  //                       "category": "Touch",
  //                       "spec_key": "Response Time",
  //                       "spec_value": "≤ 4 MS"
  //                   },
  //                   {
  //                       "id": 340,
  //                       "product_id": 21,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Type",
  //                       "spec_value": "Infrared"
  //                   },
  //                   {
  //                       "id": 341,
  //                       "product_id": 21,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Count",
  //                       "spec_value": "40 Points"
  //                   },
  //                   {
  //                       "id": 342,
  //                       "product_id": 21,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Accuracy",
  //                       "spec_value": "±1mm"
  //                   },
  //                   {
  //                       "id": 343,
  //                       "product_id": 21,
  //                       "category": "Touch",
  //                       "spec_key": "Response Time",
  //                       "spec_value": "≤ 4 MS"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Display",
  //               "items": [
  //                   {
  //                       "id": 217,
  //                       "product_id": 21,
  //                       "category": "Display",
  //                       "spec_key": "Size",
  //                       "spec_value": "98\""
  //                   },
  //                   {
  //                       "id": 218,
  //                       "product_id": 21,
  //                       "category": "Display",
  //                       "spec_key": "Technology",
  //                       "spec_value": "DLED"
  //                   },
  //                   {
  //                       "id": 219,
  //                       "product_id": 21,
  //                       "category": "Display",
  //                       "spec_key": "Resolution Ratio",
  //                       "spec_value": "3840*2160"
  //                   },
  //                   {
  //                       "id": 220,
  //                       "product_id": 21,
  //                       "category": "Display",
  //                       "spec_key": "Refresh Rate",
  //                       "spec_value": "60 HZ"
  //                   },
  //                   {
  //                       "id": 221,
  //                       "product_id": 21,
  //                       "category": "Display",
  //                       "spec_key": "Luminance",
  //                       "spec_value": "500 nits"
  //                   },
  //                   {
  //                       "id": 222,
  //                       "product_id": 21,
  //                       "category": "Display",
  //                       "spec_key": "Viewing Angle",
  //                       "spec_value": "178°(H/V)"
  //                   },
  //                   {
  //                       "id": 330,
  //                       "product_id": 21,
  //                       "category": "Display",
  //                       "spec_key": "Size",
  //                       "spec_value": "98\""
  //                   },
  //                   {
  //                       "id": 331,
  //                       "product_id": 21,
  //                       "category": "Display",
  //                       "spec_key": "Technology",
  //                       "spec_value": "DLED"
  //                   },
  //                   {
  //                       "id": 332,
  //                       "product_id": 21,
  //                       "category": "Display",
  //                       "spec_key": "Resolution Ratio",
  //                       "spec_value": "3840*2160"
  //                   },
  //                   {
  //                       "id": 333,
  //                       "product_id": 21,
  //                       "category": "Display",
  //                       "spec_key": "Refresh Rate",
  //                       "spec_value": "60 HZ"
  //                   },
  //                   {
  //                       "id": 334,
  //                       "product_id": 21,
  //                       "category": "Display",
  //                       "spec_key": "Luminance",
  //                       "spec_value": "500 nits"
  //                   },
  //                   {
  //                       "id": 335,
  //                       "product_id": 21,
  //                       "category": "Display",
  //                       "spec_key": "Viewing Angle",
  //                       "spec_value": "178°(H/V)"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Input/Output",
  //               "items": [
  //                   {
  //                       "id": 227,
  //                       "product_id": 21,
  //                       "category": "Input/Output",
  //                       "spec_key": "Speakers",
  //                       "spec_value": "2 x 20W"
  //                   },
  //                   {
  //                       "id": 228,
  //                       "product_id": 21,
  //                       "category": "Input/Output",
  //                       "spec_key": "Microphone",
  //                       "spec_value": "8 Array Mic"
  //                   },
  //                   {
  //                       "id": 229,
  //                       "product_id": 21,
  //                       "category": "Input/Output",
  //                       "spec_key": "Camera",
  //                       "spec_value": "48MP AI Camera"
  //                   },
  //                   {
  //                       "id": 230,
  //                       "product_id": 21,
  //                       "category": "Input/Output",
  //                       "spec_key": "Interface",
  //                       "spec_value": "HDMI-In, HDMI-Out, USB 3.0, USB 2.0, USB-C, Touch-USB, LAN, Mic In, Audio Out, SPDIF, RS232"
  //                   },
  //                   {
  //                       "id": 344,
  //                       "product_id": 21,
  //                       "category": "Input/Output",
  //                       "spec_key": "Speakers",
  //                       "spec_value": "2 x 20W"
  //                   },
  //                   {
  //                       "id": 345,
  //                       "product_id": 21,
  //                       "category": "Input/Output",
  //                       "spec_key": "Microphone",
  //                       "spec_value": "8 Array Mic"
  //                   },
  //                   {
  //                       "id": 346,
  //                       "product_id": 21,
  //                       "category": "Input/Output",
  //                       "spec_key": "Camera",
  //                       "spec_value": "48MP AI Camera"
  //                   },
  //                   {
  //                       "id": 347,
  //                       "product_id": 21,
  //                       "category": "Input/Output",
  //                       "spec_key": "Interface",
  //                       "spec_value": "HDMI-In, HDMI-Out, USB 3.0, USB 2.0, USB-C, Touch-USB, LAN, Mic In, Audio Out, SPDIF, RS232"
  //                   }
  //               ]
  //           }
  //       ],
  //       "created_at": "2026-06-15T12:43:24.008851Z",
  //       "updated_at": "2026-06-24T12:39:39.494939Z"
  //   },
  //   {
  //       "id": 20,
  //       "name": "86\" Interactive Flat Panel with Camera",
  //       "product_type": "IFP",
  //       "slug": "ifp11",
  //       "subheading": "LANGO 3576",
  //       "size": "",
  //       "chipset": "",
  //       "storage": "8GB + 128GB",
  //       "resolution": "",
  //       "google_integration": true,
  //       "is_active": true,
  //       "thumbnail": "https://qonevo-products.s3.ap-south-1.amazonaws.com/products/1782214869707219514.png",
  //       "images": [
  //           {
  //               "id": 12,
  //               "product_id": 20,
  //               "image_url": "https://qonevo-products.s3.ap-south-1.amazonaws.com/products/1782214869707219514.png",
  //               "is_primary": true,
  //               "created_at": "2026-06-23T11:41:09.826566Z"
  //           }
  //       ],
  //       "specifications": [
  //           {
  //               "category": "Display",
  //               "items": [
  //                   {
  //                       "id": 199,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Size",
  //                       "spec_value": "86\""
  //                   },
  //                   {
  //                       "id": 200,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Technology",
  //                       "spec_value": "DLED"
  //                   },
  //                   {
  //                       "id": 201,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Resolution Ratio",
  //                       "spec_value": "3840*2160"
  //                   },
  //                   {
  //                       "id": 202,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Refresh Rate",
  //                       "spec_value": "60 HZ"
  //                   },
  //                   {
  //                       "id": 203,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Luminance",
  //                       "spec_value": "500 nits"
  //                   },
  //                   {
  //                       "id": 204,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Viewing Angle",
  //                       "spec_value": "178°(H/V)"
  //                   },
  //                   {
  //                       "id": 352,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Size",
  //                       "spec_value": "86\""
  //                   },
  //                   {
  //                       "id": 353,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Technology",
  //                       "spec_value": "DLED"
  //                   },
  //                   {
  //                       "id": 354,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Resolution Ratio",
  //                       "spec_value": "3840*2160"
  //                   },
  //                   {
  //                       "id": 355,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Refresh Rate",
  //                       "spec_value": "60 HZ"
  //                   },
  //                   {
  //                       "id": 356,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Luminance",
  //                       "spec_value": "500 nits"
  //                   },
  //                   {
  //                       "id": 357,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Viewing Angle",
  //                       "spec_value": "178°(H/V)"
  //                   },
  //                   {
  //                       "id": 594,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Size",
  //                       "spec_value": "86\""
  //                   },
  //                   {
  //                       "id": 595,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Technology",
  //                       "spec_value": "DLED"
  //                   },
  //                   {
  //                       "id": 596,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Resolution Ratio",
  //                       "spec_value": "3840*2160"
  //                   },
  //                   {
  //                       "id": 597,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Refresh Rate",
  //                       "spec_value": "60 HZ"
  //                   },
  //                   {
  //                       "id": 598,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Luminance",
  //                       "spec_value": "500 nits"
  //                   },
  //                   {
  //                       "id": 599,
  //                       "product_id": 20,
  //                       "category": "Display",
  //                       "spec_key": "Viewing Angle",
  //                       "spec_value": "178°(H/V)"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Input/Output",
  //               "items": [
  //                   {
  //                       "id": 209,
  //                       "product_id": 20,
  //                       "category": "Input/Output",
  //                       "spec_key": "Speakers",
  //                       "spec_value": "2 x 20W"
  //                   },
  //                   {
  //                       "id": 210,
  //                       "product_id": 20,
  //                       "category": "Input/Output",
  //                       "spec_key": "Microphone",
  //                       "spec_value": "8 Array Mic"
  //                   },
  //                   {
  //                       "id": 211,
  //                       "product_id": 20,
  //                       "category": "Input/Output",
  //                       "spec_key": "Camera",
  //                       "spec_value": "48MP AI Camera"
  //                   },
  //                   {
  //                       "id": 212,
  //                       "product_id": 20,
  //                       "category": "Input/Output",
  //                       "spec_key": "Interface",
  //                       "spec_value": "HDMI-In, HDMI-Out, USB 3.0, USB 2.0, USB-C, Touch-USB, LAN, Mic In, Audio Out, SPDIF, RS232"
  //                   },
  //                   {
  //                       "id": 366,
  //                       "product_id": 20,
  //                       "category": "Input/Output",
  //                       "spec_key": "Speakers",
  //                       "spec_value": "2 x 20W"
  //                   },
  //                   {
  //                       "id": 367,
  //                       "product_id": 20,
  //                       "category": "Input/Output",
  //                       "spec_key": "Microphone",
  //                       "spec_value": "8 Array Mic"
  //                   },
  //                   {
  //                       "id": 368,
  //                       "product_id": 20,
  //                       "category": "Input/Output",
  //                       "spec_key": "Camera",
  //                       "spec_value": "48MP AI Camera"
  //                   },
  //                   {
  //                       "id": 369,
  //                       "product_id": 20,
  //                       "category": "Input/Output",
  //                       "spec_key": "Interface",
  //                       "spec_value": "HDMI-In, HDMI-Out, USB 3.0, USB 2.0, USB-C, Touch-USB, LAN, Mic In, Audio Out, SPDIF, RS232"
  //                   },
  //                   {
  //                       "id": 608,
  //                       "product_id": 20,
  //                       "category": "Input/Output",
  //                       "spec_key": "Speakers",
  //                       "spec_value": "2 x 20W"
  //                   },
  //                   {
  //                       "id": 609,
  //                       "product_id": 20,
  //                       "category": "Input/Output",
  //                       "spec_key": "Microphone",
  //                       "spec_value": "8 Array Mic"
  //                   },
  //                   {
  //                       "id": 610,
  //                       "product_id": 20,
  //                       "category": "Input/Output",
  //                       "spec_key": "Camera",
  //                       "spec_value": "48MP AI Camera"
  //                   },
  //                   {
  //                       "id": 611,
  //                       "product_id": 20,
  //                       "category": "Input/Output",
  //                       "spec_key": "Interface",
  //                       "spec_value": "HDMI-In, HDMI-Out, USB 3.0, USB 2.0, USB-C, Touch-USB, LAN, Mic In, Audio Out, SPDIF, RS232"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Package",
  //               "items": [
  //                   {
  //                       "id": 213,
  //                       "product_id": 20,
  //                       "category": "Package",
  //                       "spec_key": "Net Weight",
  //                       "spec_value": "65kg"
  //                   },
  //                   {
  //                       "id": 214,
  //                       "product_id": 20,
  //                       "category": "Package",
  //                       "spec_key": "Gross Weight",
  //                       "spec_value": "81kg"
  //                   },
  //                   {
  //                       "id": 215,
  //                       "product_id": 20,
  //                       "category": "Package",
  //                       "spec_key": "Bare Machine Size",
  //                       "spec_value": "1952*1180*97mm"
  //                   },
  //                   {
  //                       "id": 216,
  //                       "product_id": 20,
  //                       "category": "Package",
  //                       "spec_key": "Package Size",
  //                       "spec_value": "2048*1268*194mm"
  //                   },
  //                   {
  //                       "id": 370,
  //                       "product_id": 20,
  //                       "category": "Package",
  //                       "spec_key": "Net Weight",
  //                       "spec_value": "65kg"
  //                   },
  //                   {
  //                       "id": 371,
  //                       "product_id": 20,
  //                       "category": "Package",
  //                       "spec_key": "Gross Weight",
  //                       "spec_value": "81kg"
  //                   },
  //                   {
  //                       "id": 372,
  //                       "product_id": 20,
  //                       "category": "Package",
  //                       "spec_key": "Bare Machine Size",
  //                       "spec_value": "1952*1180*97mm"
  //                   },
  //                   {
  //                       "id": 373,
  //                       "product_id": 20,
  //                       "category": "Package",
  //                       "spec_key": "Package Size",
  //                       "spec_value": "2048*1268*194mm"
  //                   },
  //                   {
  //                       "id": 612,
  //                       "product_id": 20,
  //                       "category": "Package",
  //                       "spec_key": "Net Weight",
  //                       "spec_value": "65kg"
  //                   },
  //                   {
  //                       "id": 613,
  //                       "product_id": 20,
  //                       "category": "Package",
  //                       "spec_key": "Gross Weight",
  //                       "spec_value": "81kg"
  //                   },
  //                   {
  //                       "id": 614,
  //                       "product_id": 20,
  //                       "category": "Package",
  //                       "spec_key": "Bare Machine Size",
  //                       "spec_value": "1952*1180*97mm"
  //                   },
  //                   {
  //                       "id": 615,
  //                       "product_id": 20,
  //                       "category": "Package",
  //                       "spec_key": "Package Size",
  //                       "spec_value": "2048*1268*194mm"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Processor",
  //               "items": [
  //                   {
  //                       "id": 358,
  //                       "product_id": 20,
  //                       "category": "Processor",
  //                       "spec_key": "Processor",
  //                       "spec_value": "Quadcore"
  //                   },
  //                   {
  //                       "id": 359,
  //                       "product_id": 20,
  //                       "category": "Processor",
  //                       "spec_key": "Processor Speed",
  //                       "spec_value": "1.2 GHZ"
  //                   },
  //                   {
  //                       "id": 360,
  //                       "product_id": 20,
  //                       "category": "Processor",
  //                       "spec_key": "EDLA",
  //                       "spec_value": "Yes"
  //                   },
  //                   {
  //                       "id": 361,
  //                       "product_id": 20,
  //                       "category": "Processor",
  //                       "spec_key": "NFC",
  //                       "spec_value": "No"
  //                   },
  //                   {
  //                       "id": 600,
  //                       "product_id": 20,
  //                       "category": "Processor",
  //                       "spec_key": "Processor",
  //                       "spec_value": "Octacore"
  //                   },
  //                   {
  //                       "id": 601,
  //                       "product_id": 20,
  //                       "category": "Processor",
  //                       "spec_key": "Processor Speed",
  //                       "spec_value": "2.4 GHZ"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Touch",
  //               "items": [
  //                   {
  //                       "id": 205,
  //                       "product_id": 20,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Type",
  //                       "spec_value": "Infrared"
  //                   },
  //                   {
  //                       "id": 206,
  //                       "product_id": 20,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Count",
  //                       "spec_value": "40 Points"
  //                   },
  //                   {
  //                       "id": 207,
  //                       "product_id": 20,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Accuracy",
  //                       "spec_value": "±1mm"
  //                   },
  //                   {
  //                       "id": 208,
  //                       "product_id": 20,
  //                       "category": "Touch",
  //                       "spec_key": "Response Time",
  //                       "spec_value": "≤ 4 MS"
  //                   },
  //                   {
  //                       "id": 362,
  //                       "product_id": 20,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Type",
  //                       "spec_value": "Infrared"
  //                   },
  //                   {
  //                       "id": 363,
  //                       "product_id": 20,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Count",
  //                       "spec_value": "40 Points"
  //                   },
  //                   {
  //                       "id": 364,
  //                       "product_id": 20,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Accuracy",
  //                       "spec_value": "±1mm"
  //                   },
  //                   {
  //                       "id": 365,
  //                       "product_id": 20,
  //                       "category": "Touch",
  //                       "spec_key": "Response Time",
  //                       "spec_value": "≤ 4 MS"
  //                   },
  //                   {
  //                       "id": 604,
  //                       "product_id": 20,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Type",
  //                       "spec_value": "Infrared"
  //                   },
  //                   {
  //                       "id": 605,
  //                       "product_id": 20,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Count",
  //                       "spec_value": "40 Points"
  //                   },
  //                   {
  //                       "id": 606,
  //                       "product_id": 20,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Accuracy",
  //                       "spec_value": "±1mm"
  //                   },
  //                   {
  //                       "id": 607,
  //                       "product_id": 20,
  //                       "category": "Touch",
  //                       "spec_key": "Response Time",
  //                       "spec_value": "≤ 4 MS"
  //                   }
  //               ]
  //           }
  //       ],
  //       "created_at": "2026-06-15T12:37:48.186957Z",
  //       "updated_at": "2026-06-24T12:57:50.944652Z"
  //   },
  //   {
  //       "id": 17,
  //       "name": "86\" Interactive Flat Panel without Camera",
  //       "product_type": "IFP",
  //       "slug": "ifp9",
  //       "subheading": "LANGO V100",
  //       "size": "",
  //       "chipset": "",
  //       "storage": "",
  //       "resolution": "",
  //       "google_integration": true,
  //       "is_active": true,
  //       "thumbnail": "https://qonevo-products.s3.ap-south-1.amazonaws.com/products/1782214801278121846.png",
  //       "images": [
  //           {
  //               "id": 11,
  //               "product_id": 17,
  //               "image_url": "https://qonevo-products.s3.ap-south-1.amazonaws.com/products/1782214801278121846.png",
  //               "is_primary": true,
  //               "created_at": "2026-06-23T11:40:01.40683Z"
  //           }
  //       ],
  //       "specifications": [
  //           {
  //               "category": "Display",
  //               "items": [
  //                   {
  //                       "id": 163,
  //                       "product_id": 17,
  //                       "category": "Display",
  //                       "spec_key": "Size",
  //                       "spec_value": "86\""
  //                   },
  //                   {
  //                       "id": 164,
  //                       "product_id": 17,
  //                       "category": "Display",
  //                       "spec_key": "Technology",
  //                       "spec_value": "DLED"
  //                   },
  //                   {
  //                       "id": 165,
  //                       "product_id": 17,
  //                       "category": "Display",
  //                       "spec_key": "Resolution Ratio",
  //                       "spec_value": "3840*2160"
  //                   },
  //                   {
  //                       "id": 166,
  //                       "product_id": 17,
  //                       "category": "Display",
  //                       "spec_key": "Refresh Rate",
  //                       "spec_value": "60 HZ"
  //                   },
  //                   {
  //                       "id": 167,
  //                       "product_id": 17,
  //                       "category": "Display",
  //                       "spec_key": "Luminance",
  //                       "spec_value": "500 nits"
  //                   },
  //                   {
  //                       "id": 168,
  //                       "product_id": 17,
  //                       "category": "Display",
  //                       "spec_key": "Viewing Angle",
  //                       "spec_value": "178°(H/V)"
  //                   },
  //                   {
  //                       "id": 374,
  //                       "product_id": 17,
  //                       "category": "Display",
  //                       "spec_key": "Size",
  //                       "spec_value": "86\""
  //                   },
  //                   {
  //                       "id": 375,
  //                       "product_id": 17,
  //                       "category": "Display",
  //                       "spec_key": "Technology",
  //                       "spec_value": "DLED"
  //                   },
  //                   {
  //                       "id": 376,
  //                       "product_id": 17,
  //                       "category": "Display",
  //                       "spec_key": "Resolution Ratio",
  //                       "spec_value": "3840*2160"
  //                   },
  //                   {
  //                       "id": 377,
  //                       "product_id": 17,
  //                       "category": "Display",
  //                       "spec_key": "Refresh Rate",
  //                       "spec_value": "60 HZ"
  //                   },
  //                   {
  //                       "id": 378,
  //                       "product_id": 17,
  //                       "category": "Display",
  //                       "spec_key": "Luminance",
  //                       "spec_value": "500 nits"
  //                   },
  //                   {
  //                       "id": 379,
  //                       "product_id": 17,
  //                       "category": "Display",
  //                       "spec_key": "Viewing Angle",
  //                       "spec_value": "178°(H/V)"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Input/Output",
  //               "items": [
  //                   {
  //                       "id": 173,
  //                       "product_id": 17,
  //                       "category": "Input/Output",
  //                       "spec_key": "Speakers",
  //                       "spec_value": "2 x 20W"
  //                   },
  //                   {
  //                       "id": 174,
  //                       "product_id": 17,
  //                       "category": "Input/Output",
  //                       "spec_key": "Microphone",
  //                       "spec_value": "8 Array Mic"
  //                   },
  //                   {
  //                       "id": 175,
  //                       "product_id": 17,
  //                       "category": "Input/Output",
  //                       "spec_key": "Camera",
  //                       "spec_value": "NA"
  //                   },
  //                   {
  //                       "id": 176,
  //                       "product_id": 17,
  //                       "category": "Input/Output",
  //                       "spec_key": "Interface",
  //                       "spec_value": "HDMI-In, HDMI-Out, USB 3.0, USB 2.0, USB-C, Touch-USB, LAN, Mic In, Audio Out, SPDIF, RS232"
  //                   },
  //                   {
  //                       "id": 388,
  //                       "product_id": 17,
  //                       "category": "Input/Output",
  //                       "spec_key": "Speakers",
  //                       "spec_value": "2 x 20W"
  //                   },
  //                   {
  //                       "id": 389,
  //                       "product_id": 17,
  //                       "category": "Input/Output",
  //                       "spec_key": "Microphone",
  //                       "spec_value": "8 Array Mic"
  //                   },
  //                   {
  //                       "id": 390,
  //                       "product_id": 17,
  //                       "category": "Input/Output",
  //                       "spec_key": "Camera",
  //                       "spec_value": "NA"
  //                   },
  //                   {
  //                       "id": 391,
  //                       "product_id": 17,
  //                       "category": "Input/Output",
  //                       "spec_key": "Interface",
  //                       "spec_value": "HDMI-In, HDMI-Out, USB 3.0, USB 2.0, USB-C, Touch-USB, LAN, Mic In, Audio Out, SPDIF, RS232"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Package",
  //               "items": [
  //                   {
  //                       "id": 177,
  //                       "product_id": 17,
  //                       "category": "Package",
  //                       "spec_key": "Net Weight",
  //                       "spec_value": "65kg"
  //                   },
  //                   {
  //                       "id": 178,
  //                       "product_id": 17,
  //                       "category": "Package",
  //                       "spec_key": "Gross Weight",
  //                       "spec_value": "81kg"
  //                   },
  //                   {
  //                       "id": 179,
  //                       "product_id": 17,
  //                       "category": "Package",
  //                       "spec_key": "Bare Machine Size",
  //                       "spec_value": "1952*1180*97mm"
  //                   },
  //                   {
  //                       "id": 180,
  //                       "product_id": 17,
  //                       "category": "Package",
  //                       "spec_key": "Package Size",
  //                       "spec_value": "2048*1268*194mm"
  //                   },
  //                   {
  //                       "id": 392,
  //                       "product_id": 17,
  //                       "category": "Package",
  //                       "spec_key": "Net Weight",
  //                       "spec_value": "65kg"
  //                   },
  //                   {
  //                       "id": 393,
  //                       "product_id": 17,
  //                       "category": "Package",
  //                       "spec_key": "Gross Weight",
  //                       "spec_value": "81kg"
  //                   },
  //                   {
  //                       "id": 394,
  //                       "product_id": 17,
  //                       "category": "Package",
  //                       "spec_key": "Bare Machine Size",
  //                       "spec_value": "1952*1180*97mm"
  //                   },
  //                   {
  //                       "id": 395,
  //                       "product_id": 17,
  //                       "category": "Package",
  //                       "spec_key": "Package Size",
  //                       "spec_value": "2048*1268*194mm"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Processor",
  //               "items": [
  //                   {
  //                       "id": 380,
  //                       "product_id": 17,
  //                       "category": "Processor",
  //                       "spec_key": "Processor",
  //                       "spec_value": "Octacore"
  //                   },
  //                   {
  //                       "id": 381,
  //                       "product_id": 17,
  //                       "category": "Processor",
  //                       "spec_key": "Processor Speed",
  //                       "spec_value": "1.2 GHZ"
  //                   },
  //                   {
  //                       "id": 382,
  //                       "product_id": 17,
  //                       "category": "Processor",
  //                       "spec_key": "EDLA",
  //                       "spec_value": "Yes"
  //                   },
  //                   {
  //                       "id": 383,
  //                       "product_id": 17,
  //                       "category": "Processor",
  //                       "spec_key": "NFC",
  //                       "spec_value": "Yes"
  //                   }
  //               ]
  //           },
  //           {
  //               "category": "Touch",
  //               "items": [
  //                   {
  //                       "id": 169,
  //                       "product_id": 17,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Type",
  //                       "spec_value": "Infrared"
  //                   },
  //                   {
  //                       "id": 170,
  //                       "product_id": 17,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Count",
  //                       "spec_value": "40 Points"
  //                   },
  //                   {
  //                       "id": 171,
  //                       "product_id": 17,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Accuracy",
  //                       "spec_value": "±1mm"
  //                   },
  //                   {
  //                       "id": 172,
  //                       "product_id": 17,
  //                       "category": "Touch",
  //                       "spec_key": "Response Time",
  //                       "spec_value": "≤ 4 MS"
  //                   },
  //                   {
  //                       "id": 384,
  //                       "product_id": 17,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Type",
  //                       "spec_value": "Infrared"
  //                   },
  //                   {
  //                       "id": 385,
  //                       "product_id": 17,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Count",
  //                       "spec_value": "40 Points"
  //                   },
  //                   {
  //                       "id": 386,
  //                       "product_id": 17,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Accuracy",
  //                       "spec_value": "±1mm"
  //                   },
  //                   {
  //                       "id": 387,
  //                       "product_id": 17,
  //                       "category": "Touch",
  //                       "spec_key": "Response Time",
  //                       "spec_value": "≤ 4 MS"
  //                   }
  //               ]
  //           }
  //       ],
  //       "created_at": "2026-06-15T12:29:43.810087Z",
  //       "updated_at": "2026-06-24T12:41:12.72815Z"
  //   }
  // ]

  useEffect(() => {
    const getProducts = async () => {
      try {
        //  setAllProducts(data);
        //  setProducts(data);

        const response = await axios.get(
          `${BASE_URL}/api/v1/products?type=ifp`,
        );

        setProducts(response.data);
        setAllProducts(response.data);
        setVisibleCount(ITEMS_PER_LOAD);
      } catch (error) {
        console.log("API Error:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

useEffect(() => {
  const filtered = allProducts.filter((p) => {
    const sizeValue = getSpecValue(p, "Display", "Size");
    console.log(
  getSpecValue(p, "Display", "Size")
);

    const processorValue = getSpecValue(
      p,
      "Processor",
      "Processor"
    );

    const processorSpeedValue = getSpecValue(
      p,
      "Processor",
      "Processor Speed"
    );

    const edlaValue = getSpecValue(
      p,
      "Processor",
      "EDLA"
    );

    const nfcValue = getSpecValue(
      p,
      "Processor",
      "NFC"
    );

    const sizeOk =
      !filters.size.length ||
      filters.size.includes(sizeValue);

   const processorOk =
  !filters.processor.length ||
  filters.processor.some(
    (f) =>
      f.toLowerCase().replace(/\s+/g, "") ===
      processorValue?.toLowerCase().replace(/\s+/g, "")
  );
    const processorSpeedOk =
      !filters.processor_speed.length ||
      filters.processor_speed.includes(processorSpeedValue);

    const storageOk =
      !filters.storage.length ||
      filters.storage.includes(p.storage);

    const smartFeaturesOk =
      !filters.smart_features.length ||
      filters.smart_features.some((feature) => {
        if (feature === "EDLA") {
          return edlaValue?.toLowerCase() === "yes";
        }

        if (feature === "NFC") {
          return nfcValue?.toLowerCase() === "yes";
        }

        return false;
      });

    return (
      sizeOk &&
      processorOk &&
      processorSpeedOk &&
      storageOk &&
      smartFeaturesOk
    );
  });

  setProducts(filtered);
  setVisibleCount(ITEMS_PER_LOAD);
}, [filters, allProducts]);






  useEffect(() => {
    const el = loadMoreRef.current;
    if (!el) return;

    if (visibleCount >= products.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setVisibleCount((prev) => {
            const next = Math.min(prev + ITEMS_PER_LOAD, products.length);
            return next;
          });
        }
      },
      {
        rootMargin: "0px 0px 300px 0px",
        threshold: 0,
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [visibleCount, products.length]);

  return (
    <PageLayout className="listing-container">
      <div className="listing-container">
        <div className="listing-banner">
          <img src={banner} alt="Listing Page" />

          <div className="listing-banner-text">
            <h1>The Smart Classroom. Reimagined.</h1>
            <p>Qonevo Interactive Flat Panel | Limitless Interactive</p>
          </div>
        </div>

        <div className="listing-content">
          <div className="listing-layout" ref={layoutRef}>
            <div className="listing-sidebar">
              <FilterSideBar onFilterChange={handleFilterChange} />
            </div>

            <div ref={rightRef} className={`right-listing-content`}>
              {loading ? (
                <div className="products-loader">
                  <div className="loader"></div>
                </div>
              ) : products.length === 0 ? (
                // ← empty state
                <p className="no-data">No Data Found...</p>
              ) : (
                <>
                  <ProductCard products={visibleProducts} variant="grid-3" />
                  {visibleProducts.length < products.length && (
                    <div ref={loadMoreRef} className="load-more-trigger">
                      <div className="loader"></div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ListingPage;
