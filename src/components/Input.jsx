const Input = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const text = event.target.text.value;
        props.handleSubmit(text);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                placeholder="your user name..."
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Input;