// import { useEffect, useRef } from "react";
// import videoSrc from "../../Assets/your-video.mp4";

// export default function ScrollVideo() {
//   const videoRef = useRef(null);
//   const scrollRef = useRef(null);
//   const progressRef = useRef(null);
//   const percentRef = useRef(null);

//   useEffect(() => {
//     const scrollBox = scrollRef.current;
//     const video = videoRef.current;

//     const handleScroll = () => {
//       const scrollTop = scrollBox.scrollTop;
//       const scrollHeight = scrollBox.scrollHeight - scrollBox.clientHeight;

//       const progress = scrollTop / scrollHeight;

//       // update video time
//       if (video.duration) {
//         video.currentTime = video.duration * progress;
//       }

//       // update progress bar
//       if (progressRef.current) {
//         progressRef.current.style.width = `${progress * 100}%`;
//       }

//       // update percentage text
//       if (percentRef.current) {
//         percentRef.current.innerText = `${Math.round(progress * 100)}%`;
//       }
//     };

//     scrollBox.addEventListener("scroll", handleScroll);
//     return () => scrollBox.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     // <div
//     //   ref={scrollRef}
//     //   style={{
//     //     height: "100vh",
//     //     overflowY: "scroll",
//     //     background: "#fff",
//     //     color: "#fff",
//     //     fontFamily: "Courier New, monospace",
//     //   }}
//     // >

//     <div
//   ref={scrollRef}
//   style={{
//     height: "100vh",
//     overflowY: "scroll",
//     background: "transparent", // ✅ or remove this line entirely
//     color: "#fff",
//     fontFamily: "Courier New, monospace",
//   }}
// >
//       <div style={{ height: "400vh" }}>
//         {/* <div
//           style={{
//             position: "sticky",
//             top: 0,
//             height: "100vh",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             overflow: "hidden",
//           }}
//         > */}
//         <div
//   style={{
//     position: "sticky",
//     top: 0,
//     height: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     overflow: "hidden",
//     background: "#000", // ✅ only the video area is black
//   }}
// >
//           <video
//             ref={videoRef}
//             muted
//             playsInline
//             preload="auto"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//             }}
//           >
//             <source src={videoSrc} type="video/mp4" />
//           </video>

//           {/* HUD */}
          
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useRef } from "react";
import videoSrc from "../../Assets/your-video.mp4";

export default function ScrollVideo() {
  const videoRef = useRef(null);
  const scrollRef = useRef(null);
  const progressRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    const scrollBox = scrollRef.current;
    const video = videoRef.current;
    let currentTime = 0;
    let rafId;

    const handleScroll = () => {
      const scrollTop = scrollBox.scrollTop;
      const scrollHeight = scrollBox.scrollHeight - scrollBox.clientHeight;
      const progress = scrollTop / scrollHeight;

      const targetTime = video.duration ? video.duration * progress : 0;

      // update progress bar
      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }

      // update percentage text
      if (percentRef.current) {
        percentRef.current.innerText = `${Math.round(progress * 100)}%`;
      }

      const animate = () => {
        currentTime += (targetTime - currentTime) * 0.1;
        if (video.readyState >= 2) {
          video.currentTime = currentTime;
        }
        if (Math.abs(targetTime - currentTime) > 0.01) {
          rafId = requestAnimationFrame(animate);
        }
      };

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(animate);
    };

    scrollBox.addEventListener("scroll", handleScroll);
    return () => {
      scrollBox.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
     <div className="scroll-video-wrapper" style={{ background: "#fff", minHeight: "100vh" }}>
    <div
      ref={scrollRef}
      style={{
        height: "100vh",
        overflowY: "scroll",
        background: "#fff",  // ✅ NOT transparent
        color: "#fff",
        fontFamily: "Courier New, monospace",
      }}
    >
        <div style={{ height: "400vh", background: "#fff" }}>
          <div
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              background: "#000",
            }}
          >
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>

            {/* HUD */}
          </div>
        </div>
      </div>
    </div>
  );
}