import React, { useState , useEffect} from "react";
import { createPortal } from "react-dom";


import "./DetailModal.css";



const DetailModal = ({ isOpen, product, onClose }) => {
     

console.log(product?.resolution);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (product?.images?.length) {
      setActiveImage(product.images[0].image_url);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const images = (product.images ?? []).slice(0, 3).map(img => img.image_url);



const specificationData = product.specifications.map((group) => ({
  title: group.category,
  rows: group.items.map((item) => ({
    label: item.spec_key,
    value: item.spec_value,
  })),
}));
  return createPortal(

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
            <img  src={activeImage} alt="Product" loading="lazy"/>
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
                <img  src={img} alt={`Thumbnail ${index + 1}`} loading="lazy" />
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


        <div className="buttons-product-cta">
           <button
                  className="get-quote-btn"
                 disabled={true}
                >
                  Get Quote
                </button>
                <button
                  className="get-quote-btn"
                >
                  Download Brochure
                </button>
        </div>

        </div>

      </div>

    </div>,
    document.body
  );
};

export default DetailModal;