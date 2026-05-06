import "./GravityAI.css";
import gravityanimation from "../../Assets/ifp/b64897755a8daec10f3c7e328f30969d5e997537.gif"
import image1 from "../../Assets/gravity/Image.png"
import image2 from "../../Assets/gravity/Image 2.png"
import image3 from "../../Assets/gravity/Image 3.png"
import image4 from "../../Assets/gravity/Image 4.png"

const features = [
  {
    title: "Chat With Documents:",
    desc: "Upload documents and ask questions about their content.",
    img: image4,
  },
  {
    title: "Create Shapes:",
    desc: "Convert drawings into accurate shapes for better teaching.",
    img: image3,
  },
  {
    title: "Magic Pen:",
    desc: "Recognizes and interprets hand drawn doodles.",
    img: image2,
  },
  {
    title: "Mind Map:",
    desc: "Generate complex mind maps with the click of a button.",
    img: image1,
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
  <div className="gravity-monitorss">
    {/* <div className="gravity-video"> */}
      <img
        src={gravityanimation}
        alt="Gravity animation"
        className="gravity-gif"
      />
    {/* </div> */}
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