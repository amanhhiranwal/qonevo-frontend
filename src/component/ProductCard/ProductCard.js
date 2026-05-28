import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductCard.css";
import DetailModal from '../../pages/IFP/DetailModal';

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card_ifp" key={p.id ?? p.name}>  {/* ✅ id fallback name */}

            <div className="abstract-art">
              <img
                className="img-default"
                src={p.thumbnail}
                alt={p.name}
                loading="lazy"
              />
              {p.images?.[1]?.image_url && (
                <img
                  className="img-hover"
                  src={p.images[1].image_url}
                  alt={p.name}
                  loading="lazy"
                />
              )}
            </div>

            <div className="product-info mt-4">

              <div className="product-name">
                {`${p?.name}`}   {/* ✅ name + size */}
              </div>

              <div className="product-spec">
                {p?.subheading}              {/* ✅ subheading */}
              </div>

              <div className="product-spec mt-4 mb-4" style={{ color: "#aaa" }}>
                {[p?.size, p?.chipset, p?.storage, p?.resolution]
                  .filter(Boolean)
                  .join(" | ")               /* ✅ | as separator */
                  || "Default : 4K UHD | 400 nits | 200W * 2"}
              </div>

              <button className="btn-view" onClick={() => setSelectedProduct(p)}>
                View Details
              </button>

            </div>
          </div>
        ))}
      </div>

      <DetailModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default ProductCard;