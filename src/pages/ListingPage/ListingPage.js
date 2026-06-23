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
    smartFeatures: [],
    google_integration: [],
  });

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };
  // let data = [
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //     size: `65"`,
  //     chipset: "CVTE",
  //     storage: "128GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //      size: `65"`,
  //     chipset: "CVTE",
  //     storage: "128GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //      size: `65"`,
  //     chipset: "CVTE",
  //     storage: "128GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //      size: `65"`,
  //     chipset: "CVTE",
  //     storage: "128GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //      size: `65"`,
  //     chipset: "CVTE",
  //     storage: "8GB + 128GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //      size: `75"`,
  //     chipset: "CVTE",
  //     storage: "16GB + 256GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //     size: `65"`,
  //     chipset: "CVTE",
  //     storage: "16GB + 256GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //     size: "65",
  //     chipset: "CVTE",
  //     storage: "128GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //     size: '96"',
  //     chipset: "CVTE",
  //     storage: "128GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //     size: "65",
  //     chipset: "CVTE",
  //     storage: "128GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //     size: "65",
  //     chipset: "CVTE",
  //     storage: "128GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //     size: "65",
  //     chipset: "CVTE",
  //     storage: "16GB + 256GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //     size: "65",
  //     chipset: "CVTE",
  //     storage: "8GB + 128GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //     size: "65",
  //     chipset: "CVTE",
  //     storage: "128GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  //   {
  //     id: 1,
  //     name: "Qonevo IFP 65 – Core",
  //     slug: "qonevo-ifp-65-core",
  //     subheading: "Standard performance for classrooms and presentations",
  //     size: "65",
  //     chipset: "CVTE",
  //     storage: "8GB + 128GB",
  //     resolution: "4K UHD",
  //     google_integration: true,
  //     is_active: true,

  //     thumbnail: prodImg1,

  //     images: [
  //       {
  //         id: 101,
  //         product_id: 1,
  //         image_url: prodImg2,
  //         is_primary: true,
  //         created_at: "2026-05-27T10:00:00.000000Z",
  //       },
  //       {
  //         id: 102,
  //         product_id: 1,
  //         image_url: prodImg1,
  //         is_primary: false,
  //         created_at: "2026-05-27T10:00:01.000000Z",
  //       },
  //     ],

  //     specifications: [
  //       {
  //         category: "Display",
  //         items: [
  //           {
  //             id: 1001,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Size",
  //             spec_value: '65"',
  //           },
  //           {
  //             id: 1002,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Resolution",
  //             spec_value: "3840 × 2160",
  //           },
  //           {
  //             id: 1003,
  //             product_id: 1,
  //             category: "Display",
  //             spec_key: "Brightness",
  //             spec_value: "400 nits",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Touch",
  //         items: [
  //           {
  //             id: 1004,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Type",
  //             spec_value: "Infrared",
  //           },
  //           {
  //             id: 1005,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Touch Points",
  //             spec_value: "20 Points",
  //           },
  //           {
  //             id: 1006,
  //             product_id: 1,
  //             category: "Touch",
  //             spec_key: "Response Time",
  //             spec_value: "8 ms",
  //           },
  //         ],
  //       },

  //       {
  //         category: "Audio",
  //         items: [
  //           {
  //             id: 1007,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Speaker Output",
  //             spec_value: "2 × 20W",
  //           },
  //           {
  //             id: 1008,
  //             product_id: 1,
  //             category: "Audio",
  //             spec_key: "Microphone",
  //             spec_value: "8 Array Mic",
  //           },
  //         ],
  //       },
  //     ],

  //     created_at: "2026-05-27T10:00:00.000000Z",
  //     updated_at: "2026-05-27T10:00:00.000000Z",
  //   },
  // ];


  // let data = [ 
  //   {
  //       "id": 24,
  //       "name": "Clip[4k UHD Webcam]",
  //       "product_type": "CAMERA",
  //       "slug": "clip4k-uhd-webcam",
  //       "subheading": "",
  //       // "size": "65\"",
  //       "size": "",
  //       "chipset": "311D2",
  //       "storage": "8GB + 128GB",
  //       "resolution": "",
  //       "google_integration": false,
  //       "is_active": true,
  //       "specifications": [
  //           {
  //               "category": "Camera",
  //               "items": [
  //                   {
  //                       "id": 253,
  //                       "product_id": 24,
  //                       "category": "Camera",
  //                       "spec_key": "Model",
  //                       "spec_value": "JX1700US"
  //                   },
  //                   {
  //                       "id": 254,
  //                       "product_id": 24,
  //                       "category": "Camera",
  //                       "spec_key": "Megapixel",
  //                       "spec_value": "8.29MP"
  //                   },
  //                   {
  //                       "id": 255,
  //                       "product_id": 24,
  //                       "category": "Camera",
  //                       "spec_key": "PTZ \u0026 Auto Focus",
  //                       "spec_value": "Yes"
  //                   },
  //                   {
  //                       "id": 256,
  //                       "product_id": 24,
  //                       "category": "Camera",
  //                       "spec_key": "Microphone",
  //                       "spec_value": "Yes"
  //                   },
  //                   {
  //                       "id": 257,
  //                       "product_id": 24,
  //                       "category": "Camera",
  //                       "spec_key": "HDMI",
  //                       "spec_value": "Yes"
  //                   },
  //                   {
  //                       "id": 258,
  //                       "product_id": 24,
  //                       "category": "Camera",
  //                       "spec_key": "USB",
  //                       "spec_value": "Yes"
  //                   },
  //                   {
  //                       "id": 259,
  //                       "product_id": 24,
  //                       "category": "Camera",
  //                       "spec_key": "Digital Zoom",
  //                       "spec_value": "8x"
  //                   },
  //                   {
  //                       "id": 260,
  //                       "product_id": 24,
  //                       "category": "Camera",
  //                       "spec_key": "Weight",
  //                       "spec_value": "0.5kg"
  //                   },
  //                   {
  //                       "id": 261,
  //                       "product_id": 24,
  //                       "category": "Camera",
  //                       "spec_key": "Operating Systems",
  //                       "spec_value": "Windows 7, 8.1, 10\r\nor higher versions,\r\nmacOS 10.10 or\r\nhigher versions,\r\nGoogle chromebook\r\n76.0.3809.136 or\r\nhigher versions,\r\nLinux[requires UVC\r\nsupport], Android"
  //                   }
  //               ]
  //           }
  //       ],
  //       "created_at": "2026-06-23T05:00:49.636071Z",
  //       "updated_at": "2026-06-23T05:00:49.636071Z"
  //   },
  //   {
  //       "id": 23,
  //       "name": "CVTE 311D2(CPX)",
  //       "slug": "cvte-311d2cpx",
  //       "subheading": "",
  //       "size": "",
  //       "chipset": "",
  //       "storage": "",
  //       "resolution": "",
  //       "google_integration": true,
  //       "is_active": true,
  //       "specifications": [
  //           {
  //               "category": "Touch",
  //               "items": [
  //                   {
  //                       "id": 241,
  //                       "product_id": 23,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Type",
  //                       "spec_value": "Infrared"
  //                   },
  //                   {
  //                       "id": 242,
  //                       "product_id": 23,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Count",
  //                       "spec_value": "40 Points"
  //                   },
  //                   {
  //                       "id": 243,
  //                       "product_id": 23,
  //                       "category": "Touch",
  //                       "spec_key": "Touch Accuracy",
  //                       "spec_value": "±1mm"
  //                   },
  //                   {
  //                       "id": 244,
  //                       "product_id": 23,
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
  //                       "id": 235,
  //                       "product_id": 23,
  //                       "category": "Display",
  //                       "spec_key": "Size",
  //                       "spec_value": "110\""
  //                   },
  //                   {
  //                       "id": 236,
  //                       "product_id": 23,
  //                       "category": "Display",
  //                       "spec_key": "Technology",
  //                       "spec_value": "DLED"
  //                   },
  //                   {
  //                       "id": 237,
  //                       "product_id": 23,
  //                       "category": "Display",
  //                       "spec_key": "Resolution Ratio",
  //                       "spec_value": "3840*2160"
  //                   },
  //                   {
  //                       "id": 238,
  //                       "product_id": 23,
  //                       "category": "Display",
  //                       "spec_key": "Refresh Rate",
  //                       "spec_value": "60 HZ"
  //                   },
  //                   {
  //                       "id": 239,
  //                       "product_id": 23,
  //                       "category": "Display",
  //                       "spec_key": "Luminance",
  //                       "spec_value": "500 nits"
  //                   },
  //                   {
  //                       "id": 240,
  //                       "product_id": 23,
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
  //                       "id": 245,
  //                       "product_id": 23,
  //                       "category": "Input/Output",
  //                       "spec_key": "Speakers",
  //                       "spec_value": "2 x 20W"
  //                   },
  //                   {
  //                       "id": 246,
  //                       "product_id": 23,
  //                       "category": "Input/Output",
  //                       "spec_key": "Microphone",
  //                       "spec_value": "8 Array Mic"
  //                   },
  //                   {
  //                       "id": 247,
  //                       "product_id": 23,
  //                       "category": "Input/Output",
  //                       "spec_key": "Camera",
  //                       "spec_value": "48MP AI Camera"
  //                   },
  //                   {
  //                       "id": 248,
  //                       "product_id": 23,
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
  //                       "id": 249,
  //                       "product_id": 23,
  //                       "category": "Package",
  //                       "spec_key": "Net Weight",
  //                       "spec_value": "110kg"
  //                   },
  //                   {
  //                       "id": 250,
  //                       "product_id": 23,
  //                       "category": "Package",
  //                       "spec_key": "Gross Weight",
  //                       "spec_value": "144kg"
  //                   },
  //                   {
  //                       "id": 251,
  //                       "product_id": 23,
  //                       "category": "Package",
  //                       "spec_key": "Bare Machine Size",
  //                       "spec_value": "2500*1474*96mm"
  //                   },
  //                   {
  //                       "id": 252,
  //                       "product_id": 23,
  //                       "category": "Package",
  //                       "spec_key": "Package Size",
  //                       "spec_value": "2667*1644*230mm"
  //                   }
  //               ]
  //           }
  //       ],
  //       "created_at": "2026-06-15T13:03:45.296518Z",
  //       "updated_at": "2026-06-23T05:18:40.360394Z"
  //   }]
  useEffect(() => {
    const getProducts = async () => {
      try {
      
      //  setAllProducts(data); 

       
        const response = await axios.get(`${BASE_URL}/api/v1/products`);

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
  setProducts(
    allProducts.filter((p) => {
     const sizeOk = (() => {
  if (!filters.size?.length) return true;

  // Dig into specifications to find the Display > Size spec
  const sizeSpec = p.specifications
    ?.flatMap((s) => s.items)
    ?.find((item) => item.spec_key === "Size");

  if (!sizeSpec) return false;

  return filters.size.includes(sizeSpec.spec_value); // e.g. "110\""
})();

      const chipsetOk =
        !filters.chipset?.length ||
        (p.chipset && filters.chipset.includes(p.chipset));

      const storageOk =
        !filters.storage?.length ||
        (p.storage && filters.storage.includes(p.storage));

      const smartFeaturesOk =
        !filters.smartFeatures?.length ||
        p.smartFeatures?.some((f) => filters.smartFeatures.includes(f));

    const googleOk =
  !filters.google_integration?.length ||
  filters.google_integration.includes(p.google_integration); // true === true ✅

      return sizeOk && chipsetOk && storageOk && smartFeaturesOk && googleOk;
    })
  );
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
