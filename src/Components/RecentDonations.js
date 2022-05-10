export default function RecentDonations(props) {
const {name, caption,amount} = props;
return (
  <li><span>{name} donated ${amount}</span>{caption}</li>

)

}
  

