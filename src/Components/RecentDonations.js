const RecentDonations = (props) => {
  const { name, amount, caption } = props
  return (
    <section>
     
      <ul>
        <li>
          <span>{name} donated ${amount}</span>{caption}
        </li>
      </ul>
    </section>
  )
}

export default RecentDonations
