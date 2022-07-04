import React from 'react';
import * as S from './styled';

function RepositoryItem({ name, linkToRepo, fullName }) {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperSubTitle>full name: </S.WrapperSubTitle>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
}

export default RepositoryItem;
