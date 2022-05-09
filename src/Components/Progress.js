const Progress = ({currentAmount, goal}) => {
  return (
    <div>
      <h1>
        Raised ${currentAmount} of ${goal}
      </h1>
    </div>
  );
};

export default Progress;
