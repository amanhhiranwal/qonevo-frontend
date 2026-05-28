import React, { useState , useEffect} from "react";

import img1 from "../../Assets/ifp/thumbnail-img.png";
import img2 from "../../Assets/ifp/thumbnail-img2.png";
import img3 from "../../Assets/ifp/thumbnail-img3.png";

import "./DetailModal.css";



const DetailModal = ({ isOpen, product, onClose }) => {
     


  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (product?.images?.length) {
      setActiveImage(product.images[0].image_url);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const images = (product.images ?? []).slice(0, 3).map(img => img.image_url);




  // if (!isOpen) return null;


//   const specificationData = [
//   {
//     title: "Specifications",

//     rows: [
//       {
//         label: "Technology",
//         value: "CVTE/Lango/KTC",
//       },

//       {
//         label: "Chipset",
//         value: "9679/V100/311D2/3576",
//       },

//       {
//         label: "Storage",
//         value: "8GB + 128GB/16GB + 256GB",
//       },

//       {
//         label: "Color",
//         value: "Silver/Black",
//       },

//       {
//         label: "Protection panel",
//         value: "4mm Anti glare tempered glass",
//       },

//       {
//         label: "Installation method",
//         value: "Mobile stand/wall mount",
//       },
//     ],
//   },

//   {
//     title: "Liquid Crystal Display Panel",

//     rows: [
//       {
//         label: "Screen scale",
//         value: "16:9",
//       },

//       {
//         label: "Display brand",
//         value: "BOE/CSOT",
//       },

//       {
//         label: "Display color",
//         value: "1.07B(8-bit+FRC)",
//       },

//       {
//         label: "Resolution ratio",
//         value: "3840×2160",
//       },

//       {
//         label: "Refresh rate",
//         value: "60Hz",
//       },
//     ],
//   },
//   {
//     title:"Infrared Touch Screen", 
//     rows:[
//     {  label: "Infrared touch"
//       , value: "40 points" 
//     },
    
//     {  label: "Touch accuracy"
//       , value: "±1mm" 
//     },
//     {
//       label:"Response time",
//       value:"≤10ms"
//     },
//     {
//       label:"Touch lifespan",
//       value:"≥50 million times"   
//     }

//     ]
//   }
// ];


const specificationData = product.specifications.map((group) => ({
  title: group.category,
  rows: group.items.map((item) => ({
    label: item.spec_key,
    value: item.spec_value,
  })),
}));
  return (

    <div className="modal-overlay" onClick={onClose}>

      <div className="modal-container"  onClick={(e) => e.stopPropagation()}>
         <button
    className="modal-close-btn"
    onClick={onClose}
  >
    ×
  </button>

        {/* LEFT SIDE */}
        <div className="left-gallery">

          {/* MAIN IMAGE */}
          <div className="preview-image">
            <img src={activeImage} alt="Product" />
          </div>

          {/* THUMBNAILS */}
          <div className="thumbnails">

            {images.map((img, index) => (
              <div
                key={index}
                className={`thumb ${
                  activeImage === img ? "active" : ""
                }`}
                onClick={() => setActiveImage(img)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="right-content">

         

          <h2>
          {`${product?.name}  ${product.size}` || `"Qonevo IFP 65" – Core – 8/128 (CVTE | 9679)`}
          </h2>

          <p className="subtitle">
            { product.subheading|| `Standard performance for everyday teaching and presentations`}
          </p>

          {/* FEATURE ROW */}
          <div className="feature-row">

            <div className="feature-box">
              <h3>{product?.resolution}</h3>
              <p>Resolution</p>
            </div>

            <div className="feature-box">
              <h3>20 Points</h3>
              <p>Multi-Touch</p>
            </div>

          </div>

         <div className="parent-container">
           {/* SPECIFICATIONS */}
          {specificationData.map((group, index) => (

  <div className="spec-group" key={index}>

    <div className="spec-label">
      {group.title}
    </div>

    <div className="spec-table">

      {group.rows.map((row, rowIndex) => (

        <div className="spec-row" key={rowIndex}>

          <span>{row.label}</span>

          <span>{row.value}</span>

        </div>

      ))}

    </div>

  </div>

))}
         </div>


        <div>
           <button
                  className="get-quote-btn"
                 
                >
                  Get Quote
                </button>
        </div>

        </div>

      </div>

    </div>
  );
};

export default DetailModal;