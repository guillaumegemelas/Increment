import React from "react";

export function sum(a, b) {
  return a + b;
}

export default function Home() {
  return (
    <div>
      <p>page home: test React!</p>
      <p> {sum(40, 2)}</p>
    </div>
  );
}
