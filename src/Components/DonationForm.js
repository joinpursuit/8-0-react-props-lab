const DonationForm = (props) => {
  const { donations } = props;
  return (
    <div>
      <h4>You could be donation #{donations.length + 1}!</h4>

      <form>
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter Name" />
        <label for="caption">Caption</label>
        <input type="text" id="caption" placeholder="Enter Caption" />
        <label for="amount">Amount</label>
        <input type="number" id="amount" placeholder="Enter Amount" />
        <input type="submit" value="Donate!" />
      </form>
    </div>
  );
};

export default DonationForm;
