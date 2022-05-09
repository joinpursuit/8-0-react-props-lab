import React from "react";

export default function Progress(props) {
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${props.totalRaised}</span> of
        <span class="secondary"> ${props.target}</span>
      </h2>
    </section>
  );
}
