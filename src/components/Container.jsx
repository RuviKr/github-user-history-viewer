import { useState } from "react";
import Input from "./Input";
import repoService from "../services/repoService";
import List from "./List";

const Container = () => {
    const [reposList, setRepos] = useState([]);
    const handleSubmit = async (user) => {
        const reposListFromServer = await repoService(user);
        setRepos(reposListFromServer);
    };
    return (
        <div data-testid="general-repo-container">
            <h2>טופס חיפוש שם משתמש בגיטהאב</h2>
            <Input handleSubmit={handleSubmit} />
            <List repos={reposList} />
        </div>
    );
}

export default Container;