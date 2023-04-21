import Image from "next/image";
import styles from "./Thumbnail.module.css";
import { useRouter } from "next/router";

export default function Thumbnail(props) {
  const router = useRouter();

  const type = props.data.type;
  const title = props.data.title;
  const image = props.data.image.url;
  const imageWidth = props.data.image.width;
  const imageHeight = props.data.image.height;
  const imageAltText = props.data.imageAlt;
  const slug = props.data.slug;
  const link =
    type === "post" && router.route === "/blog/[slug]"
      ? slug
      : type === "post"
      ? `blog/${slug}`
      : slug;
  const date = props.data.date;
  const price = `$${props.data.price}`;
  const isSticky = props.data.sticky;

  const openInNewTab = type === "product" ? "_blank" : "";

  const classes = `${props.className} ${styles.thumbnail} ${styles[type]}`;

  return (
    <a className={classes} href={link} target={openInNewTab}>
      <Image unoptimized={true} src={image} fill alt={imageAltText} />
      <div className={styles.text}>
        <h2>{title}</h2>
        {type === "post" ? (
          <time>{date}</time>
        ) : (
          <p className={styles.price}>{price}</p>
        )}
      </div>
    </a>
  );
}
