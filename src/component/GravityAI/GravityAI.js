import "./GravityAI.css";

const features = [
  {
    title: "Chat With Documents:",
    desc: "Upload documents and ask questions about their content.",
    img: "https://placehold.co/340x180/2d2d2d/ffffff?text=Chat+With+Docs",
  },
  {
    title: "Create Shapes:",
    desc: "Convert drawings into accurate shapes for better teaching.",
    img: "https://placehold.co/340x180/2d2d2d/ffffff?text=Create+Shapes",
  },
  {
    title: "Magic Pen:",
    desc: "Recognizes and interprets hand drawn doodles.",
    img: "https://placehold.co/340x180/2d2d2d/ffffff?text=Magic+Pen",
  },
  {
    title: "Mind Map:",
    desc: "Generate complex mind maps with the click of a button.",
    img: "https://placehold.co/340x180/2d2d2d/ffffff?text=Mind+Map",
  },
];

export default function GravityAI() {
  return (
    <>
     

      <section className="gravity-section">
        <div className="container">

          {/* ── Heading ── */}
          <div className="text-center mb-0">
            <h1 className="gravity-title">Gravity Ai Integration</h1>
            <p className="gravity-subtitle">Enhance user interaction with intelligent features</p>
          </div>

          {/* ── White screen container ── */}
          <div className="gravity-screen-wrap">
            <div className="gravity-monitor">
              {/* Monitor top bar */}
             

              {/* "Video" area — swap <div> for <video src="..." autoPlay loop muted /> */}
              <div className="gravity-video" />

              
              
            </div>
          </div>

          {/* ── Feature cards ── */}
          <div className="d-flex gravity-cards-row">
            {features.map((f, i) => (
              <div className="gravity-card" key={i}>
                <p className="gravity-card-title">{f.title}</p>
                <p className="gravity-card-desc">{f.desc}</p>
                <img className="gravity-card-img" src={f.img} alt={f.title} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}