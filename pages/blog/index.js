import { useState } from "react";
import Head from "next/head";
import { getPosts } from "@/lib/wordpress";
import SubHeader from "@/components/Layout/SubHeader";
import Thumbnail from "@/components/UI/Thumbnail";
import Navigation from "@/components/UI/Navigation";
import styles from "./index.module.css";

export default function BlogPage(props) {
  const [posts, setPosts] = useState(props.posts);

  async function sortHandler(sortOrder) {
    const response = await fetch("/api/sort", {
      method: "POST",
      body: sortOrder,
    });
    const data = await response.json();
    setPosts(() => data);
  }

  async function searchHandler(searchQuery) {
    const response = await fetch("/api/search", {
      method: "POST",
      body: searchQuery,
    });
    const data = await response.json();
    setPosts(() => data);
  }

  return (
    <>
      <Head>
        <title>Blog | Checkpoint Japan</title>
        <meta
          name="description"
          content="Checkpoint Japan is a celebration of low car style. Created to promote exciting driving style, import highly coveted good goods, and encourage higher standards for motoring spirit."
        />
      </Head>
      <SubHeader onChange={sortHandler} onSearch={searchHandler} />
      <div className="grid">
        {/* <Navigation className={styles.navigation} /> */}
        {/* <div className="taglines">
          <p>Importer of Good Goods</p>
          <p>Contributors to Low Car Style</p>
        </div> */}
        {posts.map((post) => {
          return <Thumbnail key={post.id} data={post} />;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts(40);
  return {
    props: {
      posts,
    },
  };
}
