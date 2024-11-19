import { useState } from "react";
import { AnchorProps } from "../constants/types";

const Anchor = ({ href, text }: AnchorProps) => {
  const [urlClicked, setUrlClicked] = useState<boolean>(false);

  return (
    <a
      href={href}
      target="_blank"
      onClick={() => setUrlClicked(true)}
      style={{
        color: urlClicked ? "darkmagenta" : "darkslateblue",
      }}
    >
      {text}
    </a>
  );
};

export default Anchor;
