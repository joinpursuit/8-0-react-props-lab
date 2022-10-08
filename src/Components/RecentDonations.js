

const RecentDonations = ({name, amount, caption, id}) => {

  return(
    
    
        <section>
          <ul><li id={id}> <span>{name} donated ${amount}</span>{caption}</li></ul>       
          </section> 
)

}


export default RecentDonations;



