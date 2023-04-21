import Head from "next/head";
import { getPost, getPosts, getSlugs, getUser } from "@/lib/wordpress";
import Article from "@/components/Layout/Article";
import SubHeader from "@/components/Layout/SubHeader";
import YouTubeEmbed from "@/components/UI/YouTubeEmbed";
import styles from "./index.module.css";
import Thumbnail from "@/components/UI/Thumbnail";

export default function PostPage({ postData, authorData }) {
  const title = postData.title;

  const subHeaderData = {
    title: title,
    date: postData.date,
    author: authorData.name,
    authorURL: authorData.url,
  };

  const postContent = postData.content;
  const videoURL = postData.videoURL;

  const nextPostData = postData.nextPost;
  const prevPostData = postData.prevPost;

  return (
    <>
      <Head>
        <title>{title} | Checkpoint</title>
      </Head>
      <SubHeader data={subHeaderData} />
      <div className={styles.articleContent}>
        <Article className={styles.left} data={postContent} />
        <div className={styles.right}>
          {videoURL !== "" && (
            <YouTubeEmbed
              className={styles.video}
              videoUrl={videoURL}
              width="100%"
              thumbnailQuality="maxresdefault"
            />
          )}
          <div className={styles.relatedPosts}>
            {nextPostData && (
              <>
                <p className={styles.nextPost}>Next</p>
                <Thumbnail
                  className={styles.nextPost}
                  type="post"
                  data={nextPostData}
                />
              </>
            )}
            {prevPostData && (
              <>
                <p className={styles.prevPost}>Prev</p>
                <Thumbnail
                  className={styles.prevPost}
                  type="post"
                  data={prevPostData}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = await getSlugs();
  const postsPaths = slugs.map((post) => {
    return { params: { slug: post.slug } };
  });
  return {
    paths: postsPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  const postData = await getPost(slug);
  const authorData = await getUser(postData.authorId);

  return {
    props: { postData, authorData },
  };
}
