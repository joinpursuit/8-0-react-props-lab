import React from "react";



const Progress = (props) => {
  const { donations } = props
  return (
    <div>
      <section className="progress">
        <h2>
          Raised<span className="secondary"> ${335}</span> of 
          <span className="secondary"> ${1000}</span>
        </h2>
      </section>
    </div>
  )
  }

export default Progress;
