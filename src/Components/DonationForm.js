
export default function DonationForm({amount}) {

  return (<div>
    <form>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" id="nameInput" placeholder="Your Name" />
          </div>
          <div>
            <label>Caption</label>
            <input type="text" class="form-control" id="captionInput" placeholder="..." />
          </div>
          <div class="form-group">
            <label><span>You could be donation #{amount}!</span>
</label>
            <div><input type="number"  id="amountInput"></input></div>
              <button type="button">Donate</button>
          </div>
        </form>
    </div>
    );
}
