export default function RecentDonations({ donations }) {
  //donations array
    return (
      <section>
        <h2>Recent Donations</h2>
        <ul>
          {
          donations.map((dono) => {
            return (
              <li key={dono.id}>
                <span>
                  {dono.name} donated ${dono.amount}
                </span>
                {dono.caption}
              </li>
            );
          })
          }
        </ul>
      </section>
    );
  }
