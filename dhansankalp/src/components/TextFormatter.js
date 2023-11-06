const formatAnalysis = (analysis) => {
  return analysis.split("\n").map((paragraph, index) => {
    return <p key={index}>{paragraph}</p>;
  });
};
import React from "react";

const TextFormatter = () => {
  return <div>TextFormatter</div>;
};

export default TextFormatter;
const formatAnalysisGreen = (analysis) => {
  const sections = analysis.split("\n\n");

  return sections.map((section, index) => {
    const lines = section.split("\n");

    return (
      <div key={index} style={{ marginBottom: "20px" }}>
        {lines.map((line, index) => (
          <p key={index} style={{ marginBottom: "10px", fontWeight: "bold" }}>
            {line}
          </p>
        ))}
      </div>
    );
  });
};
