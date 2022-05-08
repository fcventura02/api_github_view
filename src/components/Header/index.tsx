import { useState } from "react";
import { MdSearch } from "react-icons/md";
import useGithub from "../../hooks/githubHooks";
import * as S from "./styles";

function SearchUser() {
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    return (
        <header>
            <S.Wrapper>
                <input
                    type="text"
                    placeholder="Digite o username para pesquisa..."
                    onChange={(event: any) =>
                        setUsernameForSearch(event.target.value)
                    }
                />
                <button type="submit" onClick={submitGetUser}>
                    <MdSearch />
                </button>
            </S.Wrapper>
        </header>
    );
}

export default SearchUser;
