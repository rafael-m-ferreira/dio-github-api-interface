import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 10px;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 220px;
  margin-left: 10px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperUsername = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    color: var(--link-color);
    font-weight: bold;
  }
`;
export const WrapperGeral = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-right: 20px;
    text-align: center;
  }
`;
