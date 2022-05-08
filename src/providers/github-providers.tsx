import { AxiosResponse } from "axios";
import { createContext, ReactNode, useCallback, useState } from "react";
import api from "../services/api";

interface IGithubUser {
    id: number;
    name: string;
    login: string;
    bio: string;
    blog: string;
    company: string;
    location: string;
    avatar_url: string;
    html_url: string;
    followers: number;
    following: number;
    public_repos: number;
    public_gists: number;
}

interface IGithubContext {
    githubState: {
        hasUser: boolean;
        loading: boolean;
        user: IGithubUser;
        repositories: [];
        starred: [];
    };
    getUser: (user: string) => void;
    getUserRepos: (user: string) => void;
    getUserStarred: (user: string) => void;
}

export const GithubContext = createContext<IGithubContext | any>({
    githubState: {
        hasUser: false,
        loading: false,
        user: {
            name: "",
            login: "",
            bio: "",
            blog: "",
            company: "",
            location: "",
            avatar_url: "",
            html_url: "",
            followers: 0,
            following: 0,
            public_repos: 0,
            public_gists: 0,
        },
        repositories: [],
        starred: [],
    },
    getUser: () => [],
    getUserRepos: () => [],
    getUserStarred: () => [],
});

interface IGithubProvider {
    children: ReactNode;
}

function GithubProvider({ children }: IGithubProvider) {
    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
            name: "",
            login: "",
            bio: "",
            blog: "",
            company: "",
            location: "",
            avatar_url: "",
            html_url: "",
            followers: 0,
            following: 0,
            public_repos: 0,
            public_gists: 0,
        },
        repositories: [],
        starred: [],
    });
    const getUser = (username: string) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api.get(`users/${username}`)
            .then(({ data }: AxiosResponse) => {
                setGithubState((prevState: any) => ({
                    ...prevState,
                    hasUser: true,
                    user: {
                        id: data.id,
                        avatar_url: data.avatar_url,
                        bio: data.bio,
                        login: data.login,
                        name: data.name,
                        html_url: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos,
                    },
                }));
            })
            .finally(() => {
                setGithubState((prevState) => ({
                    ...prevState,
                    loading: !prevState.loading,
                }));
            });
    };
    const getUserRepos = (username: string) => {
        api.get(`users/${username}/repos`).then(({ data }: AxiosResponse) => {
            setGithubState((prevState) => ({
                ...prevState,
                repositories: data,
            }));
        });
    };
    const getUserStarred = (username: string) => {
        api.get(`users/${username}/starred`).then(({ data }: AxiosResponse) => {
            setGithubState((prevState) => ({
                ...prevState,
                starred: data,
            }));
        });
    };
    const contextValue = {
        githubState,
        getUser: useCallback((username: string) => getUser(username), []),
        getUserRepos: useCallback(
            (username: string) => getUserRepos(username),
            []
        ),
        getUserStarred: useCallback(
            (username: string) => getUserStarred(username),
            []
        ),
    };
    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
}

export default GithubProvider;
