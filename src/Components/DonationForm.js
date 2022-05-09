// const data = [ {
//  {name: "name", id: "name", type: "text"},
//   {name: "caption", id: "caption", type: "text"},
//   {name: "amount", id: "amount", type: "number"}
// 
// ]

const DonationForm = (props) => {
  return (
    <div>
      <section className="donation">
        <h3>
          You could be donation #6!<span className="secondary">#1</span>
          <form>
            <br></br>
            <label>

              Name
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name..."
              ></input>
            </label>
            <label>
              Caption
              <input
                id="caption"
                name="caption"
                type="text"
                placeholder="Add a brief message..."
              ></input>
            </label>
            <label>
              Amount
              <input
                id="amount"
                name="amount"
                type="text"
                placeholder="0"
              ></input>
            </label>
            <button onClick={()=> this.name}>Donate!</button>
          </form>
        </h3>
      </section>
    </div>
  );
};

export default DonationForm;
