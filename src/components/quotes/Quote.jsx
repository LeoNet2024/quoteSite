import classes from "./quote.module.css";
import { FaArrowCircleLeft } from "react-icons/fa";

/**
 *
 * @param {*} props
 * @returns
 */
export default function Quote(props) {
  // props contain quote and cite from data

  return (
    <div className={classes.eachQuote}>
      <p>{props.quote}</p>
      <p>{props.cite}</p>
      <p style={{ margin: "auto 89%" }}>{props.icon}</p>
    </div>
  );
}
