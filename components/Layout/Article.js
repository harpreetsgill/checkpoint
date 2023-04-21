import styles from "./Article.module.css";

export default function ({ className, data }) {
  return (
    <article
      className={`${className} ${styles.article}`}
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}
