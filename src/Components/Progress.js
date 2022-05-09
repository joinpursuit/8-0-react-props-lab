import React from "react";

const Progress = (props) => {
  const { goal, total } = props;
  return (
    <>
      <h1>
        Raised $ {total} of ${goal}
      </h1>
      <p>You could be donation #6!</p>
    </>
  );
};

export default Progress;
