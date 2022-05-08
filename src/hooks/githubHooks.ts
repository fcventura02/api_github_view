import { useContext } from "react";
import { GithubContext } from "../providers/github-providers";
const useGithub = () => {
    const githubState = useContext(GithubContext);
    return githubState;
};

export default useGithub;
