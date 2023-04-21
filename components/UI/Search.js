import { useRef } from "react";
import searchImg from "@/public/search.svg";
import Image from "next/image";
import styles from "./Search.module.css";

export default function Search({ className, onSearch }) {
  const searchRef = useRef("");

  function searchHandler(event) {
    event.preventDefault();
    const searchQuery = searchRef.current.value;
    onSearch(searchQuery);
  }

  return (
    <form className={className + " " + styles.search} onSubmit={searchHandler}>
      <input
        type="search"
        id="search"
        placeholder="Search"
        defaultValue={searchRef.current.value}
        ref={searchRef}
      />
      <button>
        <Image src={searchImg} height="16" width="16" alt="Search Icon" />
      </button>
    </form>
  );
}
