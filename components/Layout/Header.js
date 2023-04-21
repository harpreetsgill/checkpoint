import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import Navigation from "../UI/Navigation";

export default function ({ className }) {
  const router = useRouter();
  const isNotHomePage = router.route !== "/";

  const headerClasses = `${className} ${styles.header} grid`;

  return (
    <header className={headerClasses}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="https://assets.bigcartel.com/theme_images/84978602/Stack+_white_.png"
            alt="Checkpoint Logo"
            width="96"
            height="40"
          />
        </Link>
      </div>
      <h1>
        Checkpoint Japan is a celebration of low car style. Created to promote
        exciting driving style, import highly coveted good goods, and encourage
        higher standards for motoring spirit.
      </h1>
      {isNotHomePage && <Navigation className={styles.nav} />}
    </header>
  );
}
