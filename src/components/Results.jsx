import React from "react";

export default function Results({ results }) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.original_title}</h2>
          {/* <h3>{result.overview}</h3> */}
        </div>
      ))}
    </div>
  );
}
