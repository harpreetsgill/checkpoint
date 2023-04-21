import Link from "next/link";
import styles from "./Navigation.module.css";
import { useRouter } from "next/router";

export default function Navigation({ className, onMovement }) {
  const router = useRouter();

  function visibilityHandler(event) {
    onMovement(event);
  }
  const isHomePage = router.route === "/";
  const mouseChangeAttrs = isHomePage && {
    onMouseOver: visibilityHandler,
    onMouseOut: visibilityHandler,
  };

  const isBlogPage =
    router.route === "/blog" || router.route === "/blog/[slug]";
  const isShopPage = router.route === "/shop";

  const classes = `${className} ${styles.nav}`;

  return (
    <div className={classes}>
      <Link
        href="https://checkpointjapan.bigcartel.com/"
        target="_blank"
        className={isShopPage ? styles.active : undefined}
        id="shop"
        {...mouseChangeAttrs}
      >
        Shop
      </Link>
      <Link
        href="/blog"
        className={isBlogPage ? styles.active : undefined}
        id="blog"
        {...mouseChangeAttrs}
      >
        Blog
      </Link>
    </div>
  );
}
