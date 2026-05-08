// import { useState } from "react";
// import { createPortal } from "react-dom";



// const specGroups = [
//   {
//     title: "Specifications",
//     rows: [
//       { label: "Technology", value: "CVTE/Lango/KTC" },
//       { label: "Chipset", value: "9679/V100/311D2/3576" },
//       { label: "Storage", value: "8GB + 128GB/16GB + 256GB" },
//       { label: "Color", value: "Silver/Black" },
//       { label: "Protection panel", value: "4mm Anti glare tempered glass" },
//       { label: "Installation method", value: "Mobile stand/wall mount" },
//     ],
//   },
//   {
//     title: "Liquid Crystal Display Panel",
//     rows: [
//       { label: "Screen scale", value: "16:9" },
//       { label: "Display brand", value: "BOE/CSOT" },
//       { label: "Display color", value: "1.07B(8-bit+FRC)" },
//       { label: "Resolution ratio", value: "3840*2160" },
//       { label: "Refresh rate", value: "60Hz" },
//       { label: "Luminance", value: "≥ 400cd/m2" },
//       { label: "Viewing angle", value: "178°(H/V)" },
//       { label: "Contrast", value: "1200: 1 (Typ.) (transmission)" },
//       { label: "Backlight lifetime", value: "≥ 30K Hours" },
//     ],
//   },
//   {
//     title: "Infrared Touch Screen",
//     rows: [
//       { label: "Touch type", value: "Infrared touch" },
//       { label: "Touch count", value: "40 points" },
//       { label: "Touch accuracy", value: "±1mm" },
//       { label: "Response time", value: "≤ 4ms" },
//       { label: "Identifiable object", value: "Finger or stylus" },
//       { label: "Transparency", value: "≥ 85%" },
//       { label: "Temperature range", value: "Operating temp.: -10°C-60°C" },
//       { label: "Operating voltage", value: "DC 5V" },
//       { label: "Power dissipation", value: "1W-5W" },
//     ],
//   },
//   {
//     title: "Input/Output Devices & Features",
//     rows: [
//       { label: "Speakers", value: "20 Watt x 2/Optional Subwoofer" },
//       { label: "Interface", value: "HDMI x 3, VGA x 1, Front Ports (HDMI/ USB)" },
//       { label: "Microphone", value: "8 Array microphone with 10 m pickup range" },
//       { label: "Camera", value: "48 megapixels AI, 120 degrees wide Angle" },
//     ],
//   },
//   {
//     title: "Package",
//     rows: [
//       { label: "Net weight", value: "≤ 40Kg" },
//       { label: "Gross weight", value: "≤ 49kg" },
//       { label: "Bare machine size", value: "1484*914.4*97.3mm" },
//       { label: "Package size", value: "1582(L)*1002(H)*185(D)mm" },
//     ],
//   },
// ];

// const ProductModal = ({ product, onClose }) => {
//   const [activeImg, setActiveImg] = useState(0);
//   if (!product) return null;

//   const images = (product.images || [product.img, product.imgHover]).filter(Boolean);

//   const modalContent = (
//     <div
//       onClick={onClose}
//       style={{
//         position: "fixed",
//         top: 0, left: 0, right: 0, bottom: 0,
//         background: "rgba(0,0,0,0.5)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         zIndex: 999999,
//         padding: "16px",
//       }}
//     >
//       <div
//   onClick={(e) => e.stopPropagation()}
//   style={{
//     background: "#fff",
//     borderRadius: "16px",
//     width: "100%",
//     maxWidth: "1000px",
//     maxHeight: "90vh",
//     overflow: "hidden",  // ✅ keep this
//     display: "grid",
//     gridTemplateColumns: "1fr 1.2fr",
//   }}
// >
//         {/* ── LEFT: Image Gallery ── */}
//         {/* ── LEFT: Image Gallery ── */}
// <div
//   style={{
//     padding: "20px",
//     borderRight: "0.5px solid #e5e7eb",
//     display: "flex",
//     flexDirection: "column",
//     gap: "16px",
//     background: "#fff",
//   }}
// >
//   {/* Main Image — full width, tall */}
//   <div
//     style={{
//       background: "#f8f9fb",
//       borderRadius: "16px",
//       overflow: "hidden",
//       width: "100%",
//       aspectRatio: "16/10",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     }}
//   >
//     <img
//       src={images[activeImg]}
//       alt={product.name}
//       style={{
//         width: "100%",
//         height: "100%",
//         objectFit: "contain", // ✅ contain so full monitor shows
//       }}
//     />
//   </div>

//   {/* Thumbnails — large, 3 across */}
//   <div style={{ display: "flex", gap: "12px" }}>
//     {images.map((img, i) => (
//       <div
//         key={i}
//         onClick={() => setActiveImg(i)}
//         style={{
//           flex: 1,
//           aspectRatio: "4/3",
//           borderRadius: "12px",
//           overflow: "hidden",
//           cursor: "pointer",
//           border: activeImg === i
//             ? "2px solid #e53e5a"   // ✅ red border like screenshot
//             : "0.5px solid #e5e7eb",
//           background: "#f8f9fb",
//         }}
//       >
//         <img
//           src={img}
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "contain", // ✅ contain so monitor shows fully
//           }}
//         />
//       </div>
//     ))}
//   </div>
// </div>

//         {/* ── RIGHT: Details ── */}
// <div
//   style={{
//     padding: "32px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "24px",
//     overflowY: "scroll",   // ✅ change "auto" to "scroll"
//     height: "90vh",        // ✅ change "maxHeight" to "height"
//     background: "#f4f5f7",
//   }}
// >
//   {/* Close button */}
//   <div style={{ display: "flex", justifyContent: "flex-end" }}>
//     <button
//       onClick={onClose}
//       style={{
//         background: "none",
//         border: "none",
//         cursor: "pointer",
//         fontSize: "20px",
//         color: "#9ca3af",
//         lineHeight: 1,
//         padding: "4px",
//       }}
//     >
//       ✕
//     </button>
//   </div>

//   {/* Title */}
//   <div>
//     <h2 style={{
//       fontSize: "28px",
//       fontWeight: 700,
//       color: "#001654",
//       margin: "0 0 10px",
//       lineHeight: 1.2,
//     }}>
//       {product.name}
//     </h2>
//     <p style={{ fontSize: "15px", color: "#9ca3af", margin: 0 }}>
//       {product.specs}
//     </p>
//   </div>

//   {/* Key Specs — vertical divider style */}
//   <div style={{ display: "flex", gap: "0", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", padding: "16px 0" }}>
//     <div style={{ flex: 1, borderLeft: "3px solid #1a3a8f", paddingLeft: "16px" }}>
//       <p style={{ fontSize: "18px", fontWeight: 700, color: "#001654", margin: "0 0 4px" }}>4K UHD</p>
//       <p style={{ fontSize: "13px", color: "#9ca3af", margin: 0 }}>Resolution</p>
//     </div>
//     <div style={{ width: "1px", background: "#e5e7eb", margin: "0 24px" }} />
//     <div style={{ flex: 1, borderLeft: "3px solid #1a3a8f", paddingLeft: "16px" }}>
//       <p style={{ fontSize: "18px", fontWeight: 700, color: "#001654", margin: "0 0 4px" }}>20 Points</p>
//       <p style={{ fontSize: "13px", color: "#9ca3af", margin: 0 }}>Multi-Touch</p>
//     </div>
//   </div>

//   {/* Spec Groups — rotated label style */}
//  {specGroups.map((group, i) => (
//     <div
//       key={i}
//       style={{
//         display: "flex",
//         background: "#fff",
//         borderRadius: "8px",
//         overflow: "hidden",
//       }}
//     >
//       {/* Rotated side label */}
//       <div style={{
//         background: "#001654",
//         width: "36px",
//         minWidth: "36px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "12px 0",
//       }}>
//         <span style={{
//           color: "#fff",
//           fontSize: "11px",
//           fontWeight: 500,
//           writingMode: "vertical-rl",
//           transform: "rotate(180deg)",
//           letterSpacing: "0.5px",
//           whiteSpace: "nowrap",
//         }}>
//           {group.title}
//         </span>
//       </div>

//       {/* Rows */}
//       <table style={{
//         flex: 1,
//         borderCollapse: "collapse",
//         fontSize: "14px",
//       }}>
//         <tbody>
//           {group.rows.map((row, j) => (
//             <tr
//               key={j}
//               style={{
//                 borderBottom: j < group.rows.length - 1 ? "1px solid #f0f0f0" : "none",
//               }}
//             >
//               <td style={{
//                 padding: "12px 16px",
//                 color: "#6b7280",
//                 width: "40%",
//                 borderRight: "1px solid #f0f0f0",
//               }}>
//                 {row.label}
//               </td>
//               <td style={{
//                 padding: "12px 16px",
//                 color: "#1f2937",
//               }}>
//                 {row.value}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   ))}

//   {/* Get a Quote button — left aligned, rounded */}
//   <div>
//     <button
//       style={{
//         padding: "14px 28px",
//         background: "#001654",
//         color: "#fff",
//         border: "none",
//         borderRadius: "50px",
//         fontSize: "15px",
//         fontWeight: 700,
//         cursor: "pointer",
//         display: "inline-block",
//       }}
//     >
//       Get a Quote
//     </button>
//   </div>
// </div>
//       </div>
//     </div>
//   );

//   return createPortal(modalContent, document.body);
// };

// export default ProductModal;






import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const specGroups = [
  {
    title: "Specifications",
    rows: [
      { label: "Technology", value: "CVTE/Lango/KTC" },
      { label: "Chipset", value: "9679/V100/311D2/3576" },
      { label: "Storage", value: "8GB + 128GB/16GB + 256GB" },
      { label: "Color", value: "Silver/Black" },
      { label: "Protection panel", value: "4mm Anti glare tempered glass" },
      { label: "Installation method", value: "Mobile stand/wall mount" },
    ],
  },
  {
    title: "Liquid Crystal Display Panel",
    rows: [
      { label: "Screen scale", value: "16:9" },
      { label: "Display brand", value: "BOE/CSOT" },
      { label: "Display color", value: "1.07B(8-bit+FRC)" },
      { label: "Resolution ratio", value: "3840*2160" },
      { label: "Refresh rate", value: "60Hz" },
      { label: "Luminance", value: "≥ 400cd/m2" },
      { label: "Viewing angle", value: "178°(H/V)" },
      { label: "Contrast", value: "1200: 1 (Typ.) (transmission)" },
      { label: "Backlight lifetime", value: "≥ 30K Hours" },
    ],
  },
  {
    title: "Infrared Touch Screen",
    rows: [
      { label: "Touch type", value: "Infrared touch" },
      { label: "Touch count", value: "40 points" },
      { label: "Touch accuracy", value: "±1mm" },
      { label: "Response time", value: "≤ 4ms" },
      { label: "Identifiable object", value: "Finger or stylus" },
      { label: "Transparency", value: "≥ 85%" },
      { label: "Temperature range", value: "Operating temp.: -10°C-60°C" },
      { label: "Operating voltage", value: "DC 5V" },
      { label: "Power dissipation", value: "1W-5W" },
    ],
  },
  {
    title: "Input/Output Devices & Features",
    rows: [
      { label: "Speakers", value: "20 Watt x 2/Optional Subwoofer" },
      { label: "Interface", value: "HDMI x 3, VGA x 1, Front Ports (HDMI/ USB)" },
      { label: "Microphone", value: "8 Array microphone with 10 m pickup range" },
      { label: "Camera", value: "48 megapixels AI, 120 degrees wide Angle" },
    ],
  },
  {
    title: "Package",
    rows: [
      { label: "Net weight", value: "≤ 40Kg" },
      { label: "Gross weight", value: "≤ 49kg" },
      { label: "Bare machine size", value: "1484*914.4*97.3mm" },
      { label: "Package size", value: "1582(L)*1002(H)*185(D)mm" },
    ],
  },
];

const ProductModal = ({ product, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);

  // ✅ Lock body scroll when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  if (!product) return null;

  const images = (product.images || [product.img, product.imgHover]).filter(Boolean);

  const modalContent = (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999999,
        padding: "16px",
        overflow: "hidden",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "1000px",
          height: "90vh",            // ✅ fixed height so children can fill it
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          overflow: "hidden",        // ✅ clips border-radius
        }}
      >
        {/* ── LEFT: Image Gallery ── */}
        <div
          style={{
            padding: "20px",
            borderRight: "0.5px solid #e5e7eb",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            background: "#fff",
            overflowY: "auto",
          }}
        >
          {/* Main Image */}
          <div
            style={{
              background: "#f8f9fb",
              borderRadius: "16px",
              overflow: "hidden",
              width: "100%",
              aspectRatio: "16/10",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={images[activeImg]}
              alt={product.name}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>

          {/* Thumbnails */}
          <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  flex: 1,
                  aspectRatio: "4/3",
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: activeImg === i ? "2px solid #e53e5a" : "0.5px solid #e5e7eb",
                  background: "#f8f9fb",
                }}
              >
                <img src={img} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Details — THIS is the scroll container ── */}
        <div
          style={{
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            overflowY: "auto",       // ✅ scroll happens HERE
            background: "#f4f5f7",
          }}
        >
          {/* Close button */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "20px",
                color: "#9ca3af",
                lineHeight: 1,
                padding: "4px",
              }}
            >
              ✕
            </button>
          </div>

          {/* Title */}
          <div>
            <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#001654", margin: "0 0 10px", lineHeight: 1.2 }}>
              {product.name}
            </h2>
            <p style={{ fontSize: "15px", color: "#9ca3af", margin: 0 }}>
              {product.specs}
            </p>
          </div>

          {/* Key Specs */}
          <div style={{
            display: "flex",
            borderTop: "1px solid #e5e7eb",
            borderBottom: "1px solid #e5e7eb",
            padding: "16px 0",
            flexShrink: 0,
          }}>
            <div style={{ flex: 1, borderLeft: "3px solid #1a3a8f", paddingLeft: "16px" }}>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "#001654", margin: "0 0 4px" }}>4K UHD</p>
              <p style={{ fontSize: "13px", color: "#9ca3af", margin: 0 }}>Resolution</p>
            </div>
            <div style={{ width: "1px", background: "#e5e7eb", margin: "0 24px" }} />
            <div style={{ flex: 1, borderLeft: "3px solid #1a3a8f", paddingLeft: "16px" }}>
              <p style={{ fontSize: "18px", fontWeight: 700, color: "#001654", margin: "0 0 4px" }}>20 Points</p>
              <p style={{ fontSize: "13px", color: "#9ca3af", margin: 0 }}>Multi-Touch</p>
            </div>
          </div>

          {/* Spec Groups */}
          {specGroups.map((group, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                background: "#fff",
                borderRadius: "8px",
                overflow: "visible",   // ✅ CHANGED from "hidden" — fixes label clipping
                border: "1px solid #f0f0f0",
                flexShrink: 0,
              }}
            >
              {/* Rotated side label */}
              <div style={{
                background: "#001654",
                width: "36px",
                minWidth: "36px",
                borderRadius: "8px 0 0 8px",   // ✅ manual radius since overflow is visible
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "12px 0",
              }}>
                <span style={{
                  color: "#fff",
                  fontSize: "10px",
                  fontWeight: 500,
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  letterSpacing: "0.5px",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                }}>
                  {group.title}
                </span>
              </div>

              {/* Rows */}
              <table style={{ flex: 1, borderCollapse: "collapse", fontSize: "14px" }}>
                <tbody>
                  {group.rows.map((row, j) => (
                    <tr
                      key={j}
                      style={{
                        borderBottom: j < group.rows.length - 1 ? "1px solid #f0f0f0" : "none",
                      }}
                    >
                      <td style={{
                        padding: "12px 16px",
                        color: "#6b7280",
                        width: "40%",
                        borderRight: "1px solid #f0f0f0",
                        verticalAlign: "top",
                      }}>
                        {row.label}
                      </td>
                      <td style={{ padding: "12px 16px", color: "#1f2937" }}>
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          {/* Get a Quote button */}
          <div style={{ flexShrink: 0, paddingBottom: "8px" }}>
            <button
              style={{
                padding: "14px 28px",
                background: "#001654",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                fontSize: "15px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProductModal;