import {Component} from "react";

class RecentDonation extends Component{
    render() {
        const {amount,caption,name}=this.props.donation;
        return (
            <li><span>{name} donated ${amount}</span> {caption}</li>
        )
    }
}

export default RecentDonation;