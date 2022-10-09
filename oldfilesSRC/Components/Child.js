const Child = ({ amount, caption, id, name }) => {
    return (
        <li id={id}>
            <span>{name} donated ${amount}</span>
            {caption}
        </li>
    );
};

export default Child;