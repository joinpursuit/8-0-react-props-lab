
import React from 'react'

export default function Progress(props) {
  console.log(props)
  console.log(props.totalRaised)
  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${props.totalRaised}</span> of
        <span class="secondary"> ${props.target}</span>
      </h2>
    </section>
  );
};

