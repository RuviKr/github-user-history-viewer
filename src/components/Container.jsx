import Input from "./Input";

const Container = () => {

    const handleSubmit = (user) => {
        console.log(user);
    };
    return (
        <div data-testid="general-repo-container">
            <h2>טופס חיפוש שם משתמש בגיטהאב</h2>
            <Input handleSubmit={handleSubmit} />
        </div>
    );
}

export default Container;