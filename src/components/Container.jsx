import Input from "./Input";
import repoService from "../services/repoService";

const Container = () => {

    const handleSubmit = async (user) => {
        const reposListFromServer = await repoService(user);
        console.log(reposListFromServer);
    };
    return (
        <div data-testid="general-repo-container">
            <h2>טופס חיפוש שם משתמש בגיטהאב</h2>
            <Input handleSubmit={handleSubmit} />
        </div>
    );
}

export default Container;