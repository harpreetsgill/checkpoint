import placeholderImage from "@/public/placeholder.png";

const apiDomain = process.env.API_DOMAIN;

// Supported size values: full, large, medium, medium_large, thumbnail
export async function getMedia(mediaId, size = "medium") {
  const response = await fetch(
    `${apiDomain}/wp-json/wp/v2/media/${mediaId}?_fields=id,alt_text,caption,media_details`
  );
  const data = await response.json();
  return {
    id: data.id,
    alt_text: data.alt_text,
    // caption: data.caption.rendered,
    url: data.media_details ? data.media_details.sizes[size].source_url : "",
    height: data.media_details ? data.media_details.sizes[size].height : "",
    width: data.media_details ? data.media_details.sizes[size].width : "",
  };
}

export async function getUser(userId) {
  const response = await fetch(
    `${apiDomain}/wp-json/wp/v2/users?id=${userId}`
  );
  const data = await response.json();
  return {
    id: data[0].id,
    name: data[0].name,
    url: data[0].url,
  };
}

export async function getSlugs() {
  const response = await fetch(
    `${apiDomain}/wp-json/wp/v2/posts?_fields=slug&per_page=40`
  );
  const data = await response.json();
  return data;
}

export async function getPosts(
  numberOfItems = 10,
  orderBy = "date",
  orderDirection = "desc",
  searchQuery = ""
) {
  const response = await fetch(
    `${apiDomain}/wp-json/wp/v2/posts?_fields=id,title,type,slug,date,featured_media,featured_img,sticky&per_page=${numberOfItems}&orderby=${orderBy}&order=${orderDirection}&search=${searchQuery}`
  );
  const data = await response.json();
  const posts = data.map((post) => {
    const date = new Date(post.date);
    const readableDate = new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);

    return {
      type: post.type,
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
      date: readableDate,
      sticky: post.sticky,
      image: {
        url: post.featured_img.image
          ? post.featured_img.image[0]
          : placeholderImage,
        height: post.featured_img.image ? post.featured_img.image[1] : "",
        width: post.featured_img.image ? post.featured_img.image[2] : "",
      },
      imageAlt: post.featured_img.image
        ? post.featured_img.image_alt
        : "Placeholder image that says Image Not Found",
    };
  });
  return posts;
}

export async function getPost(slug) {
  const response = await fetch(
    `${apiDomain}/wp-json/wp/v2/posts?slug=${slug}&per_page=1&_fields=id,title,author,date,featured_media,date,content,videoURL,next,previous`
  );
  const data = await response.json();
  const post = data[0];
  const date = new Date(post.date);
  const readableDate = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  const nextDate = new Date(post.next && post.next.date);
  const nextPostDate =
    nextDate &&
    new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(nextDate);

  const previousDate = new Date(post.previous && post.previous.date);
  const previousPostDate =
    post.previous &&
    new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(previousDate);

  return {
    id: post.id,
    title: post.title.rendered,
    authorId: post.author,
    date: readableDate,
    // featuredImageId: post.featured_media,
    // featuredImage: post.featured_media ? await getMedia(post.featured_media, "large") : "",
    content: post.content.rendered,
    videoURL: post.videoURL,
    nextPost: post.next && {
      type: "post",
      id: post.next.id,
      title: post.next.title,
      slug: post.next.slug,
      date: nextPostDate,
      image: {
        url: post.next.image ? post.next.image[0] : placeholderImage,
        width: post.next.image ? post.next.image[1] : "",
        height: post.next.image ? post.next.image[2] : "",
      },
      imageAlt: post.next.image
        ? post.next.image_alt
        : "Placeholder image that says Image Not Found",
    },
    prevPost: post.previous && {
      type: "post",
      id: post.previous.id,
      title: post.previous.title,
      slug: post.previous.slug,
      date: previousPostDate,
      image: {
        url: post.previous.image ? post.previous.image[0] : placeholderImage,
        width: post.previous.image ? post.previous.image[1] : "",
        height: post.previous.image ? post.previous.image[2] : "",
      },
      imageAlt: post.previous.image
        ? post.previous.image_alt
        : "Placeholder image that says Image Not Found",
    },
  };
}
