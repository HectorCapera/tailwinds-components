import React from "react";
import CopyButton from "./CopyButton";

const CodeContainer = ({ codeToCopy }) => (
  <div className="code-container">
    <pre>
      <code className="html">{codeToCopy}</code>
    </pre>
    <CopyButton codeToCopy={codeToCopy} />
  </div>
);

export default CodeContainer;
