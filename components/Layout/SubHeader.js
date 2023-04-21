import { useRouter } from "next/router";
import styles from "./SubHeader.module.css";
import Sort from "../UI/Sort";
import Search from "../UI/Search";

export default function SubHeader (props) {
  const router = useRouter();
  let subHeaderContent = (
    <>
      <p className={styles.est}>EST 2017</p>
      <p className={styles.status}>STATUS: AVTIVE</p>
    </>
  );

  if (router.route === "/blog/[slug]") {
    const postTitle = props.data.title;
    const authorName = props.data.author;
    const authorURL = props.data.authorURL;
    const postDate = props.data.date;
    subHeaderContent = (
      <>
        <h1 className={styles.postTitle}>{postTitle}</h1>
        <p className={styles.author}>
          By{" "}
          <a href={authorURL} target="_blank">
            {authorName}
          </a>
        </p>
        <p className={styles.date}>{postDate}</p>
      </>
    );
  }

  if (router.route === "/blog") {
    subHeaderContent = (
      <>
        <Sort className={styles.sort} onChange={props.onChange} />
        <Search className={styles.search} onSearch={props.onSearch} />
      </>
    );
  }

  return <div className={`${styles.subHeader}`}>{subHeaderContent}</div>;
}
