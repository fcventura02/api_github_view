import SearchUser from "./components/Header";
import Layout from "./components/Layout";
import { Wrapped_Layout_Aside } from "./components/Layout/styles";
import NoSearch from "./components/NoSearch";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import useGithub from "./hooks/githubHooks";

function App() {
    const { githubState } = useGithub();
    return (
        <Layout>
            {githubState.hasUser ? (
                <>
                    {githubState.loading ? (
                        <p>Loading</p>
                    ) : (
                        <>
                            <Wrapped_Layout_Aside>
                                <div>
                                    <SearchUser />
                                    <Profile />
                                </div>
                            </Wrapped_Layout_Aside>
                            <Repositories />
                        </>
                    )}
                </>
            ) : (
                <>
                    <Wrapped_Layout_Aside>
                        <SearchUser />
                    </Wrapped_Layout_Aside>
                    <NoSearch />
                </>
            )}
        </Layout>
    );
}

export default App;
