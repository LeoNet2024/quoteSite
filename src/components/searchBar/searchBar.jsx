import { CiSearch } from "react-icons/ci";
import { useState } from "react";

import classes from "./searchBar.module.css";

export default function SearchBar(props) {
  //Used for the seacrhBar
  const [searchCite, setSearchCite] = useState("");

  return (
    <div className={classes.search}>
      <p>Daily quote</p>
      <div>
        <input placeholder="" onChange={(e) => setSearchCite(e.target.value)} />
        <CiSearch
          style={{ fontSize: "3rem" }}
          onClick={() => props.func(searchCite)}
        />
      </div>
    </div>
  );
}
