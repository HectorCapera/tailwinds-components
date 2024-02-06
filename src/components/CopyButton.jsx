import React from "react";

const CopyButton = ({ codeToCopy }) => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeToCopy);
    alert("Código copiado al portapapeles");
  };

  return <button onClick={handleCopyCode}>Copiar Código</button>;
};

export default CopyButton;
