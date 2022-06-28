const DonationForm = () => {
  return (
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="nameInput" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Caption</label>
            <input type="text" className="form-control" id="captionInput" placeholder="..." />
          </div>
          <div className="form-group">
            <label>Amount to Donate</label>
            <input type="range" className="custom-range" id="amountInput" min="5" max="1000" />
            <blockquote className="blockquote text-right">
              <p className="h3 mb-0">$ 5</p>
              <button type="button" className="btn btn-lg btn-success my-4">Donate</button>
            </blockquote>
          </div>
        </form>);
};

export default DonationForm;
