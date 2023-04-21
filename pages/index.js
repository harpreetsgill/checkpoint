import { useState } from "react";
import Head from "next/head";
import { getPosts } from "@/lib/wordpress";
import { shuffleArrayItems } from "@/lib/functions";
import SubHeader from "@/components/Layout/SubHeader";
import Thumbnail from "@/components/UI/Thumbnail";
import Navigation from "@/components/UI/Navigation";
import styles from "./index.module.css";

export default function Home({ items }) {
  const [visibilitySettings, setVisibilitySettings] = useState({
    itemType: "",
    visibility: "",
  });

  function visibilityHandler(event) {
    if (event.type === "mouseover" && event.target.id === "shop") {
      setVisibilitySettings(() => {
        return { itemType: "post", visibility: "hidden" };
      });
    } else if (event.type === "mouseout" && event.target.id === "shop") {
      setVisibilitySettings(() => {
        return { itemType: "", visibility: "" };
      });
    }
    if (event.type === "mouseover" && event.target.id === "blog") {
      setVisibilitySettings(() => {
        return { itemType: "product", visibility: "hidden" };
      });
    } else if (event.type === "mouseout" && event.target.id === "blog") {
      setVisibilitySettings(() => {
        return { itemType: "", visibility: "" };
      });
    }
  }

  return (
    <>
      <Head>
        <title>Checkpoint Japan</title>
        <meta
          name="description"
          content="Checkpoint Japan is a celebration of low car style. Created to promote exciting driving style, import highly coveted good goods, and encourage higher standards for motoring spirit."
        />
      </Head>
      <SubHeader />
      <div className="grid">
        <Navigation
          className={styles.navigation}
          onMovement={visibilityHandler}
        />
        <div className={styles.taglines}>
          <p>Importer of Good Goods</p>
          <p>Contributors to Low Car Style</p>
        </div>
        {items.map((item) => {
          return (
            <Thumbnail
              key={item.id}
              className={`${
                visibilitySettings.itemType === item.type ? "hidden" : ""
              }`}
              data={item}
              visibility={visibilitySettings}
            />
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts(16);

  const products = [
    {
      type: "product",
      id: "p-01",
      title: "Momo Leather Steering Wheel",
      slug: "https://checkpointjapan.bigcartel.com/product/momo-leather-steering-wheel-350mm",
      price: "165.00",
      image: {
        url: "https://assets.bigcartel.com/product_images/357705034/017A2747.jpg",
        height: "300",
        width: "400",
      },
      imageAlt: "Product alt text",
      sticky: true,
    },
    {
      type: "product",
      id: "p-02",
      title: "Checkpoint Mark II Fleece Sweater",
      slug: "https://checkpointjapan.bigcartel.com/product/checkpoint-mark-ii-fleece-sweater",
      price: "47.00",
      image: {
        url: "https://assets.bigcartel.com/product_images/358023274/unisex-premium-sweatshirt-black-back-642b3b7a977c4.jpg",
        height: "300",
        width: "400",
      },
      imageAlt: "Product alt text",
      sticky: true,
    },
    {
      type: "product",
      id: "p-03",
      title: "Enjoy Good Taste",
      slug: "https://checkpointjapan.bigcartel.com/product/enjoy-good-taste-hoodie",
      price: "57.00",
      image: {
        url: "https://assets.bigcartel.com/product_images/358021888/unisex-premium-hoodie-black-back-642b370a2ff93.jpg",
        height: "300",
        width: "400",
      },
      imageAlt: "Product alt text",
      sticky: true,
    },
    {
      type: "product",
      id: "p-04",
      title: "Underwater Flower Bubble Shift Knob",
      slug: "https://checkpointjapan.bigcartel.com/product/underwater-flower-bubble-shift-knob",
      price: "70.00",
      image: {
        url: "https://assets.bigcartel.com/product_images/357560053/017A2680.jpg",
        height: "300",
        width: "400",
      },
      imageAlt: "Product alt text",
      sticky: true,
    },
    {
      type: "product",
      id: "p-05",
      title: "JDM Taxi Window Lantern",
      slug: "https://checkpointjapan.bigcartel.com/product/jdm-taxi-window-lantern-12v",
      price: "75.00",
      image: {
        url: "https://assets.bigcartel.com/product_images/357560053/017A2680.jpg",
        height: "300",
        width: "400",
      },
      imageAlt: "Product alt text",
      sticky: true,
    },
    {
      type: "product",
      id: "p-06",
      title: "Boss Coffee Collection Duffle Bag",
      slug: "https://checkpointjapan.bigcartel.com/product/boss-coffee-collection-duffle-bag",
      price: "125.00",
      image: {
        url: "https://assets.bigcartel.com/product_images/357704488/017A2584.jpg",
        height: "300",
        width: "400",
      },
      imageAlt: "Product alt text",
      sticky: true,
    },
    {
      type: "product",
      id: "p-07",
      title: "Goodyear Tire Ash Tray",
      slug: "https://checkpointjapan.bigcartel.com/product/goodyear-tire-ash-tray",
      price: "55.00",
      image: {
        url: "https://assets.bigcartel.com/product_images/357559750/017A2668.jpg",
        height: "300",
        width: "400",
      },
      imageAlt: "",
      sticky: true,
    },
    {
      type: "product",
      id: "p-08",
      title: "Suntory MALT's Baseball Team Jacket",
      slug: "https://checkpointjapan.bigcartel.com/product/suntory-malt-s-baseball-team-jacket-medium",
      price: "80.00",
      image: {
        url: "https://assets.bigcartel.com/product_images/341584930/017A3170.jpg",
        height: "300",
        width: "400",
      },
      imageAlt: "",
      sticky: true,
    },
    {
      type: "product",
      id: "p-09",
      title: "Toyota Team SARD/TRD/Advan Jacket",
      slug: "https://checkpointjapan.bigcartel.com/product/toyota-team-sard-trd-advan-jacket-extra-large",
      price: "235.00",
      image: {
        url: "https://assets.bigcartel.com/product_images/348442969/017A0526.jpg",
        height: "300",
        width: "400",
      },
      imageAlt: "",
      sticky: true,
    },
    {
      type: "product",
      id: "p-10",
      title: "OBA Wood Steering Wheel",
      slug: "https://checkpointjapan.bigcartel.com/product/oba-wood-steering-wheel-350mm",
      price: "165.00",
      image: {
        url: "https://assets.bigcartel.com/product_images/357705100/017A2800xx.jpg",
        height: "300",
        width: "400",
      },
      imageAlt: "",
      sticky: true,
    },
    {
      type: "product",
      id: "p-11",
      title: "Sev Marchal Red Windbreaker",
      slug: "https://checkpointjapan.bigcartel.com/product/sev-marchal-red-windbreaker-medium",
      price: "75.00",
      image: {
        url: "https://assets.bigcartel.com/product_images/357307948/017A2361.jpg",
        height: "300",
        width: "400",
      },
      imageAlt: "",
      sticky: true,
    },
    {
      type: "product",
      id: "p-12",
      title: "Toyota Mechanic Jacket",
      slug: "https://checkpointjapan.bigcartel.com/product/toyota-mechanic-jacket-large",
      price: "85.00",
      image: {
        url: "https://assets.bigcartel.com/product_images/357307585/017A2303.jpg",
        height: "300",
        width: "400",
      },
      imageAlt: "",
      sticky: true,
    },
  ];

  const items = shuffleArrayItems(posts, products);

  return {
    props: {
      items,
    },
  };
}
