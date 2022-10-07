import ListItem from "./ListItem";

const listItem = donations.map((donation) => {
  return (
    <ListItem firstName={donations.name} amount={donations.amount} caption={donations.caption} />
  )
})

const RecentDonations = (props) => {
  const {name} = props.name
  const {amount} = props.amount
  const {caption} = props.caption

  return (
    <section>
      <h2>Recent Donations</h2>
      <ul>
        <ListItem />
      </ul>
    </section>
  )
};

export default RecentDonations;
