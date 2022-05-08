import React from "react";

export default function Progress(props) {
const {total, goal} = props

return (
<>
  <h2>
    Raised <span class="secondary">${total}</span> of
    <span class="secondary"> ${goal}</span>
  </h2>
</>
);
}

