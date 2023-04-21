import { useEffect, useState } from "react";
import styles from "./Sort.module.css";

export default function Sort({ className, onChange }) {
  const [sortBy, setSortBy] = useState("newest");

  function sortChangeHandler(event) {
    onChange(event.target.value);
    setSortBy(event.target.value);
  }

  return (
    <form
      className={className + " " + styles.sortForm}
      onChange={sortChangeHandler}
    >
      <span className={styles.title}>Sort</span>
      <label htmlFor="newest">
        Newest
        <input
          type="radio"
          name="sort"
          id="newest"
          value="newest"
          defaultChecked={sortBy === "newest"}
        />
        <span className={styles.customRadio}></span>
      </label>

      <label htmlFor="oldest">
        Oldest
        <input
          type="radio"
          name="sort"
          id="oldest"
          value="oldest"
          defaultChecked={sortBy === "oldest"}
        />
        <span className={styles.customRadio}></span>
      </label>

      <label htmlFor="az">
        A-Z
        <input
          type="radio"
          name="sort"
          id="az"
          value="az"
          defaultChecked={sortBy === "az"}
        />
        <span className={styles.customRadio}></span>
      </label>

      <label htmlFor="za">
        Z-A
        <input
          type="radio"
          name="sort"
          id="za"
          value="za"
          defaultChecked={sortBy === "za"}
        />
        <span className={styles.customRadio}></span>
      </label>
    </form>
  );
}
