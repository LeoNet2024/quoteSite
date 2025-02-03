import classes from "./app.module.css";
import { FaArrowCircleLeft } from "react-icons/fa";

import { useState } from "react";

import { quotes } from "../data/quotes";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SearchBar from "../components/searchBar/searchBar";
import QuoteList from "../components/quotesList/QuoteList";
import Quote from "../components/quotes/Quote";

function generateNumber() {
  return Math.floor(Math.random() * quotes.length);
}

// this Function used for create new Array of quotes, by given string from other component

export default function App() {
  const quoteList = quotes.map((el) => el);

  const [newArr, setnewArr] = useState([]);
  const [randNum, setRandNum] = useState(generateNumber());

  function handleSearchCite(citeName) {
    if (citeName === "") return;
    setnewArr(
      quoteList.filter((el) => el.cite.toLowerCase().startsWith(citeName))
    );
  }
  const selectedQuote = quotes[randNum];
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.main}>
        <SearchBar func={handleSearchCite} />
        <Quote
          cite={selectedQuote.cite}
          quote={selectedQuote.quote}
          icon={
            <FaArrowCircleLeft
              style={{ fontSize: "2rem" }}
              onClick={() => setRandNum(generateNumber())}
            />
          }
        />
        <section className={classes.quoteWrap}>
          <QuoteList quotes={quotes} text="All quote" />
          <QuoteList quotes={newArr} text="search result" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
