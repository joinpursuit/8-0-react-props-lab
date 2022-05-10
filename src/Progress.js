const Progress = (props) => {
    const { targetAmount, donations } = props;
    let sum = 0;
    donations.map((donation) => {
        sum += donation.amount;
    });

    return (
        <section class='progress'>
            <h2>
                Raised <span class='secondary'>${sum}</span> of
                <span class='secondary'>${targetAmount}</span>
            </h2>
        </section>
    );
};
export default Progress;

