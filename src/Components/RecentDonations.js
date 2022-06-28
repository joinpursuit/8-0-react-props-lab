export default function RecentDonations(props) {
  const { name, amount, caption } = props;
  return (
    <>
      <div>
        <span>
          {name} donated {amount}
        </span>
        {caption}
      </div>
    </>
  );
}
