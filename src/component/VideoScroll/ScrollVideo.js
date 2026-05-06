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

    const handleScroll = () => {
      const scrollTop = scrollBox.scrollTop;
      const scrollHeight = scrollBox.scrollHeight - scrollBox.clientHeight;

      const progress = scrollTop / scrollHeight;

      // update video time
      if (video.duration) {
        video.currentTime = video.duration * progress;
      }

      // update progress bar
      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }

      // update percentage text
      if (percentRef.current) {
        percentRef.current.innerText = `${Math.round(progress * 100)}%`;
      }
    };

    scrollBox.addEventListener("scroll", handleScroll);
    return () => scrollBox.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        height: "100vh",
        overflowY: "scroll",
        background: "#000",
        color: "#fff",
        fontFamily: "Courier New, monospace",
      }}
    >
      <div style={{ height: "400vh" }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
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
          <div style={{ position: "absolute", inset: 0 }}>
            {/* Top Bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 24,
                right: 24,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 11, opacity: 0.5 }}>
                YOUR BRAND
              </span>

              <span
                style={{
                  fontSize: 12,
                  padding: "5px 14px",
                  borderRadius: 20,
                  background: "rgba(0,0,0,0.45)",
                }}
              >
                <span ref={percentRef}>0%</span>
              </span>
            </div>

            {/* Bottom HUD */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "20px 24px",
                background:
                  "linear-gradient(transparent, rgba(0,0,0,0.8))",
              }}
            >
              <div
                style={{
                  height: 3,
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: 2,
                  overflow: "hidden",
                  marginBottom: 12,
                }}
              >
                <div
                  ref={progressRef}
                  style={{
                    height: "100%",
                    width: "0%",
                    background: "#fff",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 11,
                  opacity: 0.5,
                }}
              >
                <span>Scroll to scrub</span>
                <span ref={percentRef}>0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}