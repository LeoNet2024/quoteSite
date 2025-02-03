import classes from "./quoteList.module.css";

import Quote from "../quotes/Quote";
export default function QuoteList(props) {
  const listOfQuotes = props.quotes.map((el) => {
    return <Quote cite={el.cite} quote={el.quote} key={crypto.randomUUID()} />;
  });

  return (
    <div className={classes.quotesList}>
      <p1>{props.text}</p1>
      {listOfQuotes}
    </div>
  );
}
