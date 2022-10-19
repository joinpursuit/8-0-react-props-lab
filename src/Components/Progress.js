import { useState } from "react";

export default function Progress({ recDon, recTotal }) {
  // was trying to use recDon.reduce but had Trouble

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${recDon}</span> of
        <span className="secondary"> ${recTotal}</span>
      </h2>
    </section>
  );
}
