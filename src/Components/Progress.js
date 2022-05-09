import React from 'react'

const Progress = (props) => {
  let sum = 0;
  props.donations.map((item) => {
    sum += item.amount;
  });

  return (
    <section class="progress">
      <h2>
        Raised <span class="secondary">${sum}</span> of
        <span class="secondary"> ${props.max}</span>
      </h2>
    </section>
  );
};

export default Progress;
