// const Progress = () => {
//   return null;
// };

// export default Progress;

export default function Progress(props) {
  const { total, target } = props;
  return (
    <>
      Raised <span class="secondary">${total}</span> of
      <span class="secondary"> ${target}</span>
    </>
  );
}
