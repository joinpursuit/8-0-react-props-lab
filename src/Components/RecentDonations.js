export default function RecentDonations(props) {
  const {donations} = props;
  return (
    
    <ul>
      {donations.map(el =>  <li>
        <span>{el.name} donated ${el.amount}.</span>
        {el.caption}
      </li>)}
    </ul>
  );
}
