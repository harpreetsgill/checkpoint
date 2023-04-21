import styles from "./Footer.module.css";

export default function Footer(props) {
  return (
    <footer className={`${props.className} ${styles.footer}`}>
      <div className={styles.social}>
        <a href="https://www.youtube.com/@CheckpointJapan" target="_blank">
          YouTube
        </a>
        <a href="https://www.instagram.com/checkpointjpn" target="_blank">
          Instagram
        </a>
        <a href="https://twitter.com/checkpointjpn" target="_blank">
          Twitter
        </a>
        <a href="https://www.facebook.com/importersofgoodgoods" target="_blank">
          Facebook
        </a>
        <a href="https://www.tiktok.com/@checkpointjapan" target="_blank">
          TikTok
        </a>
      </div>
      <div className={styles.rules}>
        <p>Don&apos;t forget to break the rules</p>
      </div>
    </footer>
  );
}
