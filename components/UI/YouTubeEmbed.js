import { useEffect, useRef, useState } from "react";
import { extractYTVideoId } from "@/lib/functions";
import styles from "./YouTubeEmbed.module.css";

export default function YouTubeEmbed({
  className,
  videoUrl,
  width,
  thumbnailQuality,
}) {
  const [videoHeight, setVideoHeight] = useState("27vw");

  const divRef = useRef();
  const videoId = extractYTVideoId(videoUrl);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setVideoHeight(() => "54vw");
    }
  }, [videoHeight]);

  const videoEmbedHandler = () => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.style.width = width;
    iframe.style.height = videoHeight;
    iframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=1&autoplay=1`
    );
    if (divRef.current) {
      divRef.current.innerHTML = "";
      divRef.current.appendChild(iframe);
    }
  };

  return (
    <div ref={divRef} className={`${className} ${styles.video}`}>
      <i onClick={videoEmbedHandler} className={styles.play} />
      <img
        onClick={videoEmbedHandler}
        loading="lazy"
        src={`https://img.youtube.com/vi/${videoId}/${thumbnailQuality}.jpg`}
        alt="YouTube Video Thumbnail"
        width={width}
        height={videoHeight}
      />
    </div>
  );
}
