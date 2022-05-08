import { useEffect, useState } from "react";
import useGithub from "../../hooks/githubHooks";
import RepositoryItem from "../Repository-Item";
import * as S from "./styles";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState([]);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.Wrapped_Tabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.Wrapped_Tab_List>
            <S.Wrapped_Tab className={"container__neon"}>Repositories</S.Wrapped_Tab>
            <S.Wrapped_Tab className={"container__neon"}>Starred</S.Wrapped_Tab>
          </S.Wrapped_Tab_List>
          <S.Wrapped_Tab_Panel>
            <S.Wrapped_List>
              {githubState.repositories.map((item:any) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                  language={item.language}
                  description={item.description}
                />
              ))}
            </S.Wrapped_List>
          </S.Wrapped_Tab_Panel>
          <S.Wrapped_Tab_Panel>
            <S.Wrapped_Tab_List>
              {githubState.starred.map((item:any) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                  language={item.language}
                  description={item.description}
                />
              ))}
            </S.Wrapped_Tab_List>
          </S.Wrapped_Tab_Panel>
        </S.Wrapped_Tabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;