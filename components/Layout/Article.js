import styles from "./Article.module.css";

export default function Article({ className, data }) {
  return (
    <article
      className={`${className} ${styles.article}`}
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}
