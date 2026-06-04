import React, { useEffect, useState, useRef } from "react";
import banner from "../../Assets/ListingPage/banner.png";
import "./ListingPage.css";
import axios from "axios";
// import DetailModal from "../IFP/DetailModal";
import FilterSideBar from "../../component/FilterSideBar/FilterSideBar";
import ProductCard from "../../component/ProductCard/ProductCard.js";

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
    googleIntegeration: [],
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

  useEffect(() => {
    const getProducts = async () => {
      try {
       

       
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
  setProducts(allProducts.filter((p) => (
    (!filters.sizes?.length        || filters.sizes.includes(p.size))          &&
    (!filters.chipset?.length      || filters.chipset.includes(p.chipset))     &&
    (!filters.storage?.length      || filters.storage.includes(p.storage))     &&
    (!filters.smartFeatures?.length|| p.smartFeatures?.some(f => filters.smartFeatures.includes(f))) &&
    (!filters.googleIntegration?.length || p.googleIntegration === true)
  )));
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
  );
};

export default ListingPage;
