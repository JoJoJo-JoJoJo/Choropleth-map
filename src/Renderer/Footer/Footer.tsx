import { url1, url2 } from "../../constants/constants";
import Anchor from "./Anchor";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="src">
        <b>Sources:</b>
        <Anchor href={url1} text={url1} />
        <Anchor href={url2} text={url2} />
      </p>
      <p className="cr">Copyright 2024 ©</p>
    </footer>
  );
}

export default Footer
