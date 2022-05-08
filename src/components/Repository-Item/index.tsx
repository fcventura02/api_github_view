import React from "react";
import * as S from "./styles";

interface IRepositoryItem {
    name: string;
    linkToRepo: string;
    fullName: string;
    description: string;
    language: string;
}

function RepositoryItem({
    name,
    linkToRepo,
    fullName,
    description,
    language,
}: IRepositoryItem) {
    return (
        <S.Wrapped className="container__neon">
            <S.Wrapped_Link href={linkToRepo} target="_blank" rel="noreferrer">
                <S.Wrapped_Title>{name}</S.Wrapped_Title>
                {fullName}
                <S.Wrapped_FullName>{language}</S.Wrapped_FullName>
                <S.Wrapped_FullName>{description}</S.Wrapped_FullName>
            </S.Wrapped_Link>
        </S.Wrapped>
    );
}

export default RepositoryItem;
