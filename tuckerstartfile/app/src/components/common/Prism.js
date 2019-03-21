import React, { useEffect } from "react";
import prismjs from "prismjs";

function Prism({children, language}) {
  useEffect(() => prismjs.highlightAll());
  return (
    <pre>
      <code className={language ? language : "language-javascript"}>
        {children}
      </code>
    </pre>
  );
}

export default Prism;
