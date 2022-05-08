import { MdLocationPin, MdLink, MdWork } from "react-icons/md";
import useGithub from "../../hooks/githubHooks";
import * as S from "./styles";

function Profile() {
    const { githubState } = useGithub();
    return (
        <S.Wrapped>
            <S.Wrapped_Img
                src={githubState.user.avatar_url}
                alt="Avatar do usuário"
            />
            <S.Wrapped_Info_User>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.Wrapped_User_Generic>
                        <h3>
                            <a
                                href={githubState.user.html_url}
                                target="_blank"
                                rel="noreferrer"
                                className="text__neon-link"
                            >
                                {githubState.user.login}
                            </a>
                        </h3>
                    </S.Wrapped_User_Generic>
                    <S.Wrapped_User_Generic>
                        <p>{githubState.user.bio}</p>
                    </S.Wrapped_User_Generic>
                    <S.Wrapped_User_Generic>
                        <MdWork />
                        <span>{githubState.user.company}</span>
                    </S.Wrapped_User_Generic>
                    <S.Wrapped_User_Generic>
                        <MdLocationPin />
                        <span>{githubState.user.location}</span>
                    </S.Wrapped_User_Generic>
                    <S.Wrapped_User_Generic>
                        <MdLink />
                        <a
                            href={githubState.user.blog}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {githubState.user.blog}
                        </a>
                    </S.Wrapped_User_Generic>
                </div>
                <S.Wrapped_Status_Count>
                    <div>
                        <h4>Followers</h4>
                        <span> {githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span> {githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span> {githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span> {githubState.user.public_repos}</span>
                    </div>
                </S.Wrapped_Status_Count>
            </S.Wrapped_Info_User>
        </S.Wrapped>
    );
}
export default Profile;
